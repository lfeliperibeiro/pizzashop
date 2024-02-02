import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '@/lib/react-query'

import { SignUp } from './sign-up'

describe('NavLink', () => {
  it('should be redirect when user click in button sign in', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <SignUp />,

      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter
              initialEntries={['/sign-in?email=johndoe@example.com']}
            >
              <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                  {children}
                </QueryClientProvider>
              </HelmetProvider>
            </MemoryRouter>
          )
        },
      },
    )

    const signIn = wrapper.getByTestId('redirect-sign-in')

    await user.click(signIn)

    expect(signIn).toBeInTheDocument()
    expect(signIn.localName).toBe('a')
    expect(signIn).toHaveAttribute('href')
    expect(signIn).toHaveTextContent('Fazer login')
  })

  it('should be set default input value', async () => {
    // const user = userEvent.setup()
    const wrapper = render(
      <SignUp />,

      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/sign-up']}>
              <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                  {children}
                </QueryClientProvider>
              </HelmetProvider>
            </MemoryRouter>
          )
        },
      },
    )

    const restaurantNameInput = wrapper.getByLabelText(
      'Nome do estabelecimento',
    ) as HTMLInputElement

    const managerNameInput = wrapper.getByLabelText(
      'Seu nome',
    ) as HTMLInputElement

    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement

    const phoneInput = wrapper.getByLabelText('Seu celular') as HTMLInputElement

    expect(restaurantNameInput).toBeInTheDocument()
    expect(managerNameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(phoneInput).toBeInTheDocument()
  })
})

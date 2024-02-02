import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

const onPageChange = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    onPageChange.mockClear()
  })
  it('should render the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        onPageChange={onPageChange}
        pageIndex={0}
        totalCount={200}
        perPage={10}
      />,
    )

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        onPageChange={onPageChange}
        pageIndex={0}
        totalCount={200}
        perPage={10}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    await user.click(nextPageButton)

    expect(nextPageButton).toBeInTheDocument()
    expect(onPageChange).toHaveBeenCalledWith(1)
  })

  it('should be able to navigate to the previous page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        onPageChange={onPageChange}
        pageIndex={3}
        totalCount={200}
        perPage={10}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Página anterior',
    })

    await user.click(nextPageButton)

    expect(nextPageButton).toBeInTheDocument()
    expect(onPageChange).toHaveBeenCalledWith(2)
  })

  it('should be able to navigate to the first page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        onPageChange={onPageChange}
        pageIndex={30}
        totalCount={200}
        perPage={10}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Primeira página',
    })

    await user.click(nextPageButton)

    expect(nextPageButton).toBeInTheDocument()
    expect(onPageChange).toHaveBeenCalledWith(0)
  })

  it('should be able to navigate to the last page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        onPageChange={onPageChange}
        pageIndex={0}
        totalCount={200}
        perPage={10}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Última página',
    })

    await user.click(nextPageButton)

    expect(nextPageButton).toBeInTheDocument()
    expect(onPageChange).toHaveBeenCalledWith(19)
  })
})

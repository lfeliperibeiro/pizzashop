import { expect, test } from '@playwright/test'

test('signup in successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('11 11111-1111')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso')

  expect(toast).toBeVisible()
})

test('signup with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shopper')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('11 11111-1111')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante')

  expect(toast).toBeVisible()
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByTestId('redirect-sign-in').click()

  expect(page.url()).toContain('sign-in')
})

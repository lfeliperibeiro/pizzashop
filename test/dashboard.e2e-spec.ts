import { expect, test } from '@playwright/test'

test('display day order amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('10', { exact: true })).toBeVisible()
  expect(page.getByText('-3% em relação ao mês passado')).toBeVisible()
})

test('display month order amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('300')).toBeVisible()
  expect(page.getByText('+8% em relação ao mês passado')).toBeVisible()
})

test('display canceled order amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('2', { exact: true })).toBeVisible()
  expect(page.getByText('-3% em relação ao mês passado')).toBeVisible()
})

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('R$ 20.000,00')).toBeVisible()
  expect(page.getByText('+2% em relação ao mês passado')).toBeVisible()
})

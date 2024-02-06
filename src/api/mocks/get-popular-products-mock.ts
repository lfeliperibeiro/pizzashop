import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    {
      product: 'Product 1',
      amount: 20,
    },
    {
      product: 'Product 2',
      amount: 15,
    },
    {
      product: 'Product 3',
      amount: 10,
    },
    {
      product: 'Product 4',
      amount: 5,
    },
    {
      product: 'Product 5',
      amount: 3,
    },
  ])
})

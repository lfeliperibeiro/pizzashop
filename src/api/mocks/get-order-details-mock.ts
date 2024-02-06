import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123456789',
    },
    status: 'delivered',
    createdAt: new Date().toISOString(),
    totalInCents: 3000,
    orderItems: [
      {
        id: 'product-1',
        product: { name: 'Pizza' },
        priceInCents: 1000,
        quantity: 2,
      },
      {
        id: 'product-2',
        product: { name: 'Coke' },
        priceInCents: 2000,
        quantity: 4,
      },
    ],
  })
})

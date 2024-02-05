import { http, HttpResponse } from 'msw'

export const getOrderDetailsMock = http.get(
  // <
  //   GetOrderDetailsParams,
  //   never,
  //   GetOrderDetailsResponse
  // >
  '/orders/:orderId',
  ({ params }) => {
    return HttpResponse.json({
      id: params.orderId,
      customer: {
        name: 'John Doe',
        email: 'johnDoe@example.com',
        phone: '123456789',
      },
      status: 'delivered',
      createdAt: new Date().toISOString(),
      totalInCents: 3000,
      orderItems: [
        {
          id: 'product-1',
          product: { name: 'Pizza' },
          priceCents: 1000,
          quantity: 2,
        },
        {
          id: 'product-2',
          product: { name: 'Coke' },
          priceCents: 2000,
          quantity: 4,
        },
      ],
    })
  },
)

import { http, HttpResponse } from 'msw'

import { GetOrdersResponse, Order } from '../get-orders'

type OrderStatus = Order['status']

const statuses: OrderStatus[] = [
  'pending',
  'cancelled',
  'processing',
  'delivering',
  'delivered',
]

const orders: Order[] = Array.from({ length: 60 }).map((_, index) => {
  return {
    orderId: `order-${index + 1}`,
    customerName: `Customer ${index + 1}`,
    createdAt: new Date().toISOString(),
    total: 2400,
    status: statuses[index % 5],
  }
})

export const getOrdersMock = http.get<never, never, GetOrdersResponse>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0

    const customerName = searchParams.get('customerName')
    const orderId = searchParams.get('orderId')
    const status = searchParams.get('status')

    let filteredOrders = orders

    if (customerName) {
      filteredOrders = filteredOrders.filter((order) =>
        order.customerName.includes(customerName),
      )
    }

    if (orderId) {
      filteredOrders = filteredOrders.filter((order) =>
        order.orderId.includes(orderId),
      )
    }

    if (status) {
      filteredOrders = filteredOrders.filter((order) => order.status === status)
    }

    const paginatedOrders = filteredOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      orders: paginatedOrders,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filteredOrders.length,
      },
    })
  },
)
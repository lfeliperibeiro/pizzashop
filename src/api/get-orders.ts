import { api } from '@/lib/axios'

export interface GetOrderParams {
  pageIndex?: number | null
}

interface Order {
  orderId: string
  createdAt: string
  status: 'pending' | 'cancelled' | 'processing' | 'delivering' | 'delivered'
  customerName: string
  total: number
}

export interface GetOrdersResponse {
  orders: Order[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({ pageIndex }: GetOrderParams) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  })

  return response.data
}

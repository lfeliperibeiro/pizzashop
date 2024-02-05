import { api } from '@/lib/axios'

interface Customer {
  name: string
  email: string
  phone: string | null
}

interface OrderItem {
  id: string
  priceInCents: number
  quantity: number
  product: {
    name: string
  }
}

export interface GetOrderDetailsParams {
  orderId: string
}

export interface GetOrderDetailsResponse {
  id: string
  createdAt: string
  status: 'pending' | 'delivered' | 'canceled' | 'delivering' | 'processing'
  totalInCents: number
  customer: Customer
  orderItems: OrderItem[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)

  return response.data
}

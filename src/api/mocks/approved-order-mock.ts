import { http, HttpResponse } from 'msw'

import { ApprovedOrderParams } from '../approved-order'

export const approvedOrderMock = http.patch<ApprovedOrderParams, never, never>(
  '/orders/:orderId/approve',
  async ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)

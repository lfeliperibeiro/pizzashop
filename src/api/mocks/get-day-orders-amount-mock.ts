import { http, HttpResponse } from 'msw'

// todo: insert type after the body is defined

export const getDaysOrdersAmountMock = http.get(
  '/metrics/day-orders-amount',
  () => {
    return HttpResponse.json({
      amount: 20,
      diffFromYesterday: -5,
    })
  },
)

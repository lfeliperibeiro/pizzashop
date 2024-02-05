import { http, HttpResponse } from 'msw'

// todo: insert type after the body is defined

export const getMonthOrdersAmountMock = http.get(
  '/metrics/month-orders-amount',
  () => {
    return HttpResponse.json({
      amount: 20,
      diffFromLastMonth: -5,
    })
  },
)

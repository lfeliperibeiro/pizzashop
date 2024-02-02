import { http, HttpResponse } from 'msw'

// todo: insert type after the body is defined

export const getMonthCanceledOrdersAmountMock = http.get(
  '/metrics/month-canceled-orders-amount',
  () => {
    return HttpResponse.json({
      amount: 200,
      diffFromLastMonth: 9,
    })
  },
)

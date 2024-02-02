import { http, HttpResponse } from 'msw'

// todo: insert type after the body is defined

export const getMonthRevenueMock = http.get('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 40000,
    diffFromLastMonth: 10,
  })
})

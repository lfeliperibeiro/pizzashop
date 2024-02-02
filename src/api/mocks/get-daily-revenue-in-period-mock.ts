import { http, HttpResponse } from 'msw'

// todo: insert type after the body is defined

export const getDailyRevenueInPeriodMock = http.get(
  '/metrics/daily-receipt-in-period',
  () => {
    return HttpResponse.json([
      {
        date: '01/01/2024',
        receipt: 2000,
      },
      {
        date: '02/01/2024',
        receipt: 2000,
      },
      {
        date: '03/01/2024',
        receipt: 5000,
      },
      {
        date: '04/01/2024',
        receipt: 20000,
      },
      {
        date: '05/01/2024',
        receipt: 46000,
      },
      {
        date: '06/01/2024',
        receipt: 2800,
      },
      {
        date: '07/01/2024',
        receipt: 9000,
      },
    ])
  },
)

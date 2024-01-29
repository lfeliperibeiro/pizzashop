import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '10/01', revenue: 1220 },
  { date: '11/01', revenue: 800 },
  { date: '12/01', revenue: 220 },
  { date: '13/01', revenue: 122 },
  { date: '14/01', revenue: 2220 },
  { date: '15/01', revenue: 3020 },
  { date: '16/01', revenue: 220 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey={'date'} tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke={'#888'}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
              width={80}
            />
            <Line
              type={'linear'}
              strokeWidth={2}
              dataKey={'revenue'}
              stroke={colors.violet['500']}
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

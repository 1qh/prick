import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

export function MyBar({ data }: { data: Record<string, number> }) {
  return (
    <ResponsiveContainer minHeight='86vh'>
      <BarChart data={Object.entries(data).sort((a, b) => b[1] - a[1])}>
        <XAxis dataKey='0' />
        <YAxis />
        <Bar dataKey='1' fill='currentColor' radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

"use client"

import { Bar, BarChart, CartesianGrid, XAxis , YAxis,ReferenceLine} from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  CustomReferenceLabel,
  colors,
} from '@/components/chart/component';
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]
type PmByDayChartProps = {
    data: {
      date: string
      avgCO: number
    }[],

    
  }
const chartConfig = {
  avgCO: {
    label: "CO Moyen ",
    color: "#059669",
  },
} satisfies ChartConfig
const WHO_STANDARD_VALUE =4
export function COBar({ data }: PmByDayChartProps) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <ReferenceLine
            y={WHO_STANDARD_VALUE}
            label={CustomReferenceLabel}
            ifOverflow='extendDomain'
            stroke='red'
            strokeOpacity={1}
            strokeDasharray={0}
          />
        <XAxis
          dataKey="date"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 6)}
        />
        <YAxis
          dataKey="avgCO"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value}
      />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="avgCO" fill="var(--color-avgCO)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

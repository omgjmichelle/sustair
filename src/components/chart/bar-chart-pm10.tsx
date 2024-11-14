"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer,CartesianGrid, XAxis,ReferenceLine,YAxis } from "recharts"

import {
  CustomReferenceLabel,
  colors,
} from '@/components/chart/component';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegendContent,
  ChartLegend
} from "@/components/ui/chart"

export const description = "A bar chart"

type PmByDayChartProps = {
  data: {
    date: string
    avgPM10: number
  }[],
}
const chartConfig = {
    avgPM10: {
    label: "PM10 Moyen",
    color: "#059669",
  },
} satisfies ChartConfig
const WHO_STANDARD_VALUE = 45
export function MyBarPm10( { data }: PmByDayChartProps ) {
  return (
        <ResponsiveContainer width={"100%"} height={350}>
          <ChartContainer config={chartConfig}> 
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
                tickFormatter={value => value.toString().slice(0,6)}
              />
              <YAxis
                dataKey="avgPM10"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="avgPM10" fill="var(--color-avgPM10)" radius={8} />
              <ChartLegend content={<ChartLegendContent />} />
            </BarChart>
          </ChartContainer>
          </ResponsiveContainer>
  )
}

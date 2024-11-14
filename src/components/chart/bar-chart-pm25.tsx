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
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart"

export const description = "A bar chart"

type PmByDayChartProps = {
  data: {
    date: string
    avgPM25: number
  }[],
}
const chartConfig = {
  avgPM25: {
    label: "PM2.5 Moyen",
    color: "#059669",
  },
} satisfies ChartConfig
const WHO_STANDARD_VALUE = 15
export function MyBarPm25( { data }: PmByDayChartProps ) {
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
                dataKey="avgPM25"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="avgPM25" fill="var(--color-avgPM25)" radius={8} />
            </BarChart>
          </ChartContainer>
          </ResponsiveContainer>
  )
}

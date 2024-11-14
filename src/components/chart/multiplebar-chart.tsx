"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Line, LineChart,ReferenceLine} from "recharts"
import { Footprints, Waves } from "lucide-react"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  
} from "@/components/ui/chart"
import React  from "react"
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
      avgPM25: number
      avgPM10: number
      normpm : number
    }[],

    
  }
const chartConfig = {
    avgPM25: {
    label: "PM25 Moyen",
    color: "#22c55e",
  },
  avgPM10: {
    label: "PM10 Moyen",
    color: "#059669",
  },
} satisfies ChartConfig
const WHO_STANDARD_VALUE = 15



export function MultipleBar({ data }: PmByDayChartProps) {
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
          tickMargin={8}
          axisLine={true}
          tickFormatter={(value) => value.slice(0, 6)}
          
        />
        <YAxis
          dataKey="avgPM25"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value}
      />
        <ChartTooltip content={<ChartTooltipContent  />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="avgPM25" fill="var(--color-avgPM25)" radius={4} />
        <Bar dataKey="avgPM10" fill="var(--color-avgPM10)" radius={4} />
        <Line
              dataKey="normpm"
              type="monotone"
              stroke="var(--color-avgPM10)"
              strokeWidth={4}
              dot={false}
            />
      </BarChart>
    </ChartContainer>
  )
}

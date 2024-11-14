"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

export const description = "A multiple line chart"

type MeteoByDayChartProps = {
  data: {
    date: string
    avgTemp: number
    avgHumi: number
    avgPres: number
  }[],

  
}

const chartConfig = {
  avgTemp: {
    label: "Temperature Moyenne",
    color: "hsl(var(--chart-3))",
  },
  avgHumi: {
    label: "Humidité Moyenne",
    color: "hsl(var(--chart-2))",
  },
  avgPres: {
    label: "Pression Moyenne",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function LineChartMultiple({ data }: MeteoByDayChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evolution des conditions météorologiques</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 6)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="avgTemp"
              type="monotone"
              stroke="var(--color-avgTemp)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="avgHumi"
              type="monotone"
              stroke="var(--color-avgHumi)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="avgPres"
              type="monotone"
              stroke="var(--color-avgPres)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

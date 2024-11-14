"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis , ReferenceLine, YAxis} from "recharts"
import {
  CustomReferenceLabel,
  colors,
} from '@/components/chart/component';
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

export const description = "An area chart with gradient fill"
const WHO_STANDARD_VALUE = 15
type pm25ByDayChartProps = {
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
export function Areachartpm25({ data }: pm25ByDayChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="p-0 text-muted-foreground text-sm">Evolution du taux de PM2.5 dans le temps</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
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
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0,6)}
            />
            <YAxis
              dataKey="avgPM25"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
           />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-avgPM25)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-avgPM25)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              
            </defs>
            <Area
              dataKey="avgPM25"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-avgPM25)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

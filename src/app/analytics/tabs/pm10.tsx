"use client"
import React from 'react';

import Cardes, { CardProps } from "@/components/cardes";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Area, AreaChart,Bar, BarChart, ResponsiveContainer,CartesianGrid, XAxis,ReferenceLine,YAxis } from "recharts"

import {
  CustomReferenceLabel,
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


const cardDatapm10: CardProps[] = [
    {
      label: "Bon",
      amount: "0µg/m3",
      description: "PM10",
      color: "bg-emerald-600 pb-3 pt-3"
    },
    {
      label: "Modéré",
      amount:"54.1µg/m3",
      description:  "PM10",
      color : "bg-amber-400 pb-3 pt-3"
    },
    {
      label: "Mauvais ",
      amount: "154.1µg/m3",
      description:  "PM10",
      color : "bg-orange-400 pb-3 pt-3"
    },
    {
      label: "Insalubre",
      amount: "254.1µg/m3",
      description:  "PM10",
      color : "bg-red-700 pb-3 pt-3"
    },
    {
      label: "Très mauvais",
      amount: "354.1µg/m3",
      description:  "PM10",
      color : "bg-purple-800 pb-3 pt-3"
    },
    {
      label: "Risqué",
      amount: "454.1µg/m3",
      description: "PM10",
      color : "bg-red-900 pb-3 pt-3"
    },
  ];


export   function Pm10( { data }: PmByDayChartProps, ) {
  
  return (
    <div>
         <section className="grid w-full grid-cols-1 gap-6 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-6 mt-5">
              {cardDatapm10.map((d, i) => (
                <Cardes
                  key={i}
                  amount={d.amount}
                  description={d.description}
                  label={d.label}
                  color={d.color}
                  
                />
              ))}
            </section>
            <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2 mt-5 ">
              <Card className='' >
                <CardHeader>
                  <CardTitle className="p-0 text-muted-foreground text-sm">Evolution du taux de PM10 dans le temps</CardTitle>
                </CardHeader>
                <CardContent>
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
                                content={<ChartTooltipContent  />}
                            />
                            <ChartLegend content={<ChartLegendContent />} />
                            <Bar dataKey="avgPM10" fill="var(--color-avgPM10)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                    </ResponsiveContainer>
                </CardContent>
                
              </Card>
              <Card>
                <CardHeader>
                    <CardTitle className="p-0 text-muted-foreground text-sm">Evolution du taux de PM10 dans le temps</CardTitle>
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
                        dataKey="avgPM10"
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
                            stopColor="var(--color-avgPM10)"
                            stopOpacity={0.8}
                            />
                            <stop
                            offset="95%"
                            stopColor="var(--color-avgPM10)"
                            stopOpacity={0.1}
                            />
                        </linearGradient>
                        
                        </defs>
                        <Area
                        dataKey="avgPM10"
                        type="natural"
                        fill="url(#fillDesktop)"
                        fillOpacity={0.4}
                        stroke="var(--color-avgPM10)"
                        stackId="a"
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
              

              {/*  */}
            </section>
    </div>
    
  );
}


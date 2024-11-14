"use client"
import React from 'react';

import { Calendar } from "@/components/ui/calendar"
import Cardes, { CardProps } from "@/components/cardes";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { subDays } from "date-fns"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ReactNode, useState } from "react"
import { DateRange } from "react-day-picker"
import { date } from "zod"


import { Area, AreaChart,Bar, BarChart, ResponsiveContainer,CartesianGrid, XAxis,ReferenceLine,YAxis ,Cell} from "recharts"

import {
  CustomReferenceLabel,
} from '@/components/chart/component';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle
} from "@/components/ui/chart"
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import { RANGE_OPTIONS } from '@/lib/rangeoption';
import { ChartCard } from './component/chartcard';
import { getUniqPayload } from 'recharts/types/util/payload/getUniqPayload';
import MyComponent from '@/components/realdata';

export const description = "A bar chart"

type PmByDayChartProps = {
  data: {
    date: string
    avgPM25: number
  }[],
}
const chartConfig = {
  avgPM25: {
    
    label: "PM2.5 Moyen: ",
    color: "#059669",
  },
} satisfies ChartConfig
const WHO_STANDARD_VALUE = 15

type CropperProps = {
  // other props
  zoom?: number;
}
const getColor = (avgPM25: number) => {
  if (avgPM25 <9 ){
    return 'emerald-600';
  }else if (avgPM25 < 35.5){
    return 'amber-400'; 
  }else if (avgPM25 < 55.5){
    return 'orange-400'; 
  }else if (avgPM25 < 125.5){
    return 'red-700'; 
  }
  else if (avgPM25 < 225.5){
    return 'purple-800'; 
  }else {
    return 'red-900'; 
}
};

const cardDatapm25: CardProps[] = [
  {
    label: "Bon",
    amount: "0 µg/m3",
    description: "PM2.5",
    color: "bg-emerald-600 pb-3 pt-3"
  },
  {
    label: "Modéré",
    amount: "9 µg/m3",
    description:  "PM2.5",
    color : "bg-amber-400 pb-3 pt-3"
  },
  {
    label: "Mauvais ",
    amount: "35.5µg/m3",
    description:  "PM2.5",
    color : "bg-orange-400 pb-3 pt-3"
  },
  {
    label: "Insalubre",
    amount: "55.5µg/m3",
    description:  "PM2.5",
    color : "bg-red-700 pb-3 pt-3"
  },
  {
    label: "Très mauvais",
    amount: "125.5µg/m3",
    description:  "PM2.5",
    color : "bg-purple-800 pb-3 pt-3"
  },
  {
    label: "Risqué",
    amount: "225.5µg/m3",
    description:  "PM2.5",
    color : "bg-red-900 pb-3 pt-3"
  },
];
  

export   function Pm25( { data }: PmByDayChartProps, ) {
  
  return (
    <div>
         <section className="grid w-full grid-cols-1 gap-6 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-6 mt-5 ">
              {cardDatapm25.map((d, i) => (
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
                  <CardTitle className="p-0 text-muted-foreground text-sm">Evolution du taux de PM2.5 dans le temps</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width={"100%"} height={370}>
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
                                content={<ChartTooltipContent  />}
                            />
                            <ChartLegend content={<ChartLegendContent />} />
                            <Bar dataKey="avgPM25"  fill='var(--color-avgPM25)'  radius={4} >
                              
                            </Bar>
                        </BarChart>
                    </ChartContainer>
                    </ResponsiveContainer>
                </CardContent>
                
              </Card>
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
                        ></Area>
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


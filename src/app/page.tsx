import React from 'react';
import { getDatabase, get , ref, child, onValue} from 'firebase/database';
import { getAuth } from "firebase/auth";
import { useEffect,useState,ReactNode } from 'react';
import firebase from "firebase/app";
import  'firebase/database';
import db from "@/db/db";
import { Prisma } from "@prisma/client";
import {
  differenceInDays,
  differenceInMonths,
  differenceInWeeks,
  eachDayOfInterval,
  eachMonthOfInterval,
  eachWeekOfInterval,
  eachYearOfInterval,
  differenceInHours,
  differenceInMinutes,
  eachHourOfInterval,
  eachMinuteOfInterval,
  startOfHour,
  startOfMinute,

  endOfWeek,
  interval,
  max,
  min,
  startOfDay,
  startOfWeek,
  subDays,
  format,
} from "date-fns"
import { formatDateTime, formatNumber } from "@/lib/formatters";

import { ChartCard } from "@/app/analytics/tabs/component/chartcard"
import {LineChartMultiple} from '@/components/chart/line-chart-multiple';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
 
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { date } from "zod"
import {Pm25} from '@/app/analytics/tabs/pm25'
import {Pm10} from '@/app/analytics/tabs/pm10'
import {CO} from '@/app/analytics/tabs/co'
import { getRangeOption, RANGE_OPTIONS } from '@/lib/rangeoption';

async function getPmData(
  createdAfter: Date | null, 
  createdBefore: Date | null
){
  const createdAtQuery: Prisma.PMWhereInput["timestamp"] = {}
  if (createdAfter) createdAtQuery.gte = createdAfter
  if (createdBefore) createdAtQuery.lte = createdBefore

  const [data, chartData] = await Promise.all([
    db.pM.aggregate({
      _avg: {pm10:true, pm25:true},
    }),
  
    db.pM.findMany({
      select: { timestamp: true , pm10: true, pm25:true},
      where: { timestamp: createdAtQuery },
      orderBy: { timestamp: "asc" }
    })
  ])
  const dayArray = eachDayOfInterval(
    interval(
      createdAfter|| startOfDay(chartData[0].timestamp),
      createdBefore || new Date()
    )
  ).map(date => {
    return{
      date: formatDateTime(date),
      avgPM10 : 0,
      avgPM25 : 0,
      normpm:15
    }
  })

  return {
    chartData: chartData.reduce((data, pM) => {
      const formattedDate = formatDateTime(pM.timestamp)
      const entry = dayArray.find(day => day.date === formattedDate)
      if (entry == null) return data
      entry.avgPM10 += pM.pm10,
      entry.avgPM25 += pM.pm25
      return data
    }, dayArray),
    avgPM10: (data._avg.pm10 || 0),
    avgPM25: (data._avg.pm10 || 0),
  }
}

async function getPm10Data(
  createdAfter: Date | null, 
  createdBefore: Date | null
){
  const createdAtQuery: Prisma.PMWhereInput["timestamp"] = {}
  if (createdAfter) createdAtQuery.gte = createdAfter
  if (createdBefore) createdAtQuery.lte = createdBefore

  const [data, chartData] = await Promise.all([
    db.pM.aggregate({
      _avg: {pm10:true},
      _count: true
    }),
  
    db.pM.findMany({
      select: { timestamp: true , pm10: true},
      where: { timestamp: createdAtQuery },
      orderBy: { timestamp: "asc" }
    })
  ])
  const dayArray = eachDayOfInterval(
    interval(
      createdAfter|| startOfDay(chartData[0].timestamp),
      createdBefore || new Date()
    )
  ).map(date => {
    return{
      date: formatDateTime(date),
      avgPM10 : 0
    }
  })

  return {
    chartData: chartData.reduce((data, pM) => {
      const formattedDate = formatDateTime(pM.timestamp)
      const entry = dayArray.find(day => day.date === formattedDate)
      if (entry == null) return data
      entry.avgPM10 += pM.pm10
      return data
    }, dayArray),
    avgPM10: (data._avg.pm10 || 0),
  }
}

async function getPm25Data(
  createdAfter: Date | null, 
  createdBefore: Date | null
){
  const createdAtQuery: Prisma.PMWhereInput["timestamp"] = {}
  if (createdAfter) createdAtQuery.gte = createdAfter
  if (createdBefore) createdAtQuery.lte = createdBefore

  const [data, chartData] = await Promise.all([
    db.pM.aggregate({
      _avg: {pm25:true},
      _count: true
    }),
  
    db.pM.findMany({
      select: { timestamp: true , pm25: true},
      where: { timestamp: createdAtQuery },
      orderBy: { timestamp: "asc" }
    })
  ])
  const dayArray = eachDayOfInterval(
    interval(
      createdAfter|| startOfDay(chartData[0].timestamp),
      createdBefore || new Date()
    )
  ).map(date => {
    return{
      date: formatDateTime(date),
      avgPM25 : 0
    }
  })

  return {
    chartData: chartData.reduce((data, pM) => {
      const formattedDate = formatDateTime(pM.timestamp)
      const entry = dayArray.find(day => day.date === formattedDate)
      if (entry == null) return data
      entry.avgPM25 += pM.pm25
      return data
    }, dayArray),
    avgPM25: (data._avg.pm25 || 0) 
  }
} 

async function getCOData(
  createdAfter: Date | null, 
  createdBefore: Date | null
){
  const createdAtQuery: Prisma.COWhereInput["timestamp"] = {}
  if (createdAfter) createdAtQuery.gte = createdAfter
  if (createdBefore) createdAtQuery.lte = createdBefore

  const [data, chartData] = await Promise.all([
    db.cO.aggregate({
      _avg: {CO:true},
      _count: true
    }),
  
    db.cO.findMany({
      select: { timestamp: true , CO : true},
      where: { timestamp: createdAtQuery },
      orderBy: { timestamp: "asc" }
    })
  ])
  const dayArray = eachDayOfInterval(
    interval(
      createdAfter|| startOfDay(chartData[0].timestamp),
      createdBefore || new Date()
    )
  ).map(date => {
    return{
      date: formatDateTime(date),
      avgCO : 0
    }
  })

  return {
    chartData: chartData.reduce((data, cO) => {
      const formattedDate = formatDateTime(cO.timestamp)
      const entry = dayArray.find(day => day.date === formattedDate)
      if (entry == null) return data
      entry.avgCO += cO.CO
      return data
    }, dayArray),
    avgCO: (data._avg.CO || 0),
  }
}

async function getCoData(
  createdAfter: Date | null, 
  createdBefore: Date | null
){
  const createdAtQuery: Prisma.COWhereInput["timestamp"] = {}
  if (createdAfter) createdAtQuery.gte = createdAfter
  if (createdBefore) createdAtQuery.lte = createdBefore

  const [data, chartData] = await Promise.all([
    db.cO.aggregate({
      _avg: {CO:true},
    }),
  
    db.cO.findMany({
      select: { timestamp: true , CO: true},
      where: { timestamp: createdAtQuery },
      orderBy: { timestamp: "asc" }
    })
  ])
  const dayArray = eachDayOfInterval(
    interval(
      createdAfter|| startOfDay(chartData[0].timestamp),
      createdBefore || new Date()
    )
  ).map(date => {
    return{
      date: formatDateTime(date),
      avgCO : 0
    }
  })

  return {
    chartData: chartData.reduce((data, cO) => {
      const formattedDate = formatDateTime(cO.timestamp)
      const entry = dayArray.find(day => day.date === formattedDate)
      if (entry == null) return data
      entry.avgCO += cO.CO
      return data
    }, dayArray),
    avgCO: (data._avg.CO || 0) 
  }
} 

async function getMeteoData(
  createdAfter: Date | null, 
  createdBefore: Date | null
){
  const createdAtQuery: Prisma.PMWhereInput["timestamp"] = {}
  if (createdAfter) createdAtQuery.gte = createdAfter
  if (createdBefore) createdAtQuery.lte = createdBefore

  const [data, chartData] = await Promise.all([
    db.pM.aggregate({
      _avg: {temperature:true, pressure:true,humidity:true},
    }),
  
    db.pM.findMany({
      select: { timestamp: true , temperature:true, pressure:true,humidity:true},
      where: { timestamp: createdAtQuery },
      orderBy: { timestamp: "asc" }
    })
  ])
  const dayArray = eachDayOfInterval(
    interval(
      createdAfter|| startOfDay(chartData[0].timestamp),
      createdBefore || new Date()
    )
  ).map(date => {
    return{
      date: formatDateTime(date),
      avgTemp : 0,
      avgHumi : 0,
      avgPres : 0,
    }
  })
  return {
    chartData: chartData.reduce((data, pM) => {
      const formattedDate = formatDateTime(pM.timestamp)
      const entry = dayArray.find(day => day.date === formattedDate)
      if (entry == null) return data
      entry.avgTemp += pM.temperature,
      entry.avgHumi += pM.humidity,
      entry.avgPres += pM.pressure
      return data
    }, dayArray),
    avgTemp: (data._avg.temperature || 0),
    avgHumi: (data._avg.humidity || 0),
    avgPres: (data._avg.pressure || 0),
  }
}


  

export default async function analyticPage({
  searchParams: {
    avgPm10Range,
    avgPm10RangeFrom,
    avgPm10RangeTo,
    avgPm25Range,
    avgPm25RangeFrom,
    avgPm25RangeTo,
    avgCoRange,
    avgCoRangeFrom,
    avgCoRangeTo,
    

  },
}: {
  searchParams: {
    avgPm10Range?: string
    avgPm10RangeFrom?: string
    avgPm10RangeTo?: string
    avgPm25Range?: string
    avgPm25RangeFrom?: string
    avgPm25RangeTo?: string
    avgCoRange?: string
    avgCoRangeFrom?: string
    avgCoRangeTo?: string
  }
}) {
  const avgPm10RangeOption =
    getRangeOption(avgPm10Range, avgPm10RangeFrom, avgPm10RangeTo,) ||
    RANGE_OPTIONS.last_30_days
  const avgPm25RangeOption =
    getRangeOption(
        avgPm25Range,
        avgPm25RangeFrom,
        avgPm25RangeTo,
    ) || RANGE_OPTIONS.last_30_days
  const avgCoRangeOption =
    getRangeOption(
        avgCoRange,
        avgCoRangeFrom,
        avgCoRangeTo,
    ) || RANGE_OPTIONS.last_30_days

  const [pm10Data, pm25Data, pmData,coData, meteoData] = await Promise.all([
    
    getPm10Data( 
        avgPm10RangeOption.startDate,
        avgPm10RangeOption.endDate
    ),
    getPm25Data(
        avgPm25RangeOption.startDate,
        avgPm25RangeOption.endDate
    ),
    getPmData(subDays(new Date() , 30), new Date()),
    getCOData(
        avgCoRangeOption.startDate,
        avgCoRangeOption.endDate),
    getMeteoData(subDays(new Date() , 35), new Date()),
  ])
  return (
      <Tabs defaultValue="pm25" >
      <TabsList>
        <TabsTrigger value="pm25">PM2.5</TabsTrigger>
        <TabsTrigger value="pm10">PM10</TabsTrigger>
        <TabsTrigger value="co">CO</TabsTrigger>
      </TabsList>
      <TabsContent value="pm25" className='-mt-10'>
          <section className=" w-60  transition-all  mt-0  ml-60 ">
            <ChartCard
              queryKey="avgPm25Range"
              selectedRangeLabel={avgPm25RangeOption.label}
            >
            </ChartCard>
            </section>
            <Pm25 data = {pm25Data.chartData}/>
            <section className=" mt-5  gap-4 transition-all lg:grid-cols-2 bg-emerald-50">
              <LineChartMultiple  data={meteoData.chartData } />
                
              
              {/*  */}
            </section>
           
       
      </TabsContent>
        <TabsContent value="pm10"  className='-mt-10' >
          <section className="w-60  transition-all  mt-0  ml-60 ">
            <ChartCard
              queryKey="avgPm10Range"
              selectedRangeLabel={avgPm10RangeOption.label}
            >
            </ChartCard>
          </section>
          <Pm10 data = {pm10Data.chartData}/>
            
            <section className=" mt-5  gap-4 transition-all lg:grid-cols-2 bg-emerald-50">
              <LineChartMultiple  data={meteoData.chartData } />
                
              
              {/*  */}
            </section>
        

        </TabsContent>
        <TabsContent value="co"  className='-mt-10' >
          <section className="w-60  transition-all  mt-0  ml-60 ">
            <ChartCard
              queryKey="avgCoRange"
              selectedRangeLabel={avgCoRangeOption.label}
            >
            </ChartCard>
          </section>
          <CO data ={coData.chartData}/>
            <section className=" mt-5  gap-4 transition-all lg:grid-cols-2 bg-emerald-50">
              <LineChartMultiple  data={meteoData.chartData } />
                
              
              {/*  */}
            </section>

        </TabsContent>
      
      </Tabs>
      
    
  );
}

type DashboardCardProps = {
  title: string
  subtitle: string
  body: string
}

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  )
}

function getChartDateArray(startDate: Date, endDate: Date = new Date()) {
  const days = differenceInDays(endDate, startDate)
  if (days < 30) {
    return {
      array: eachDayOfInterval(interval(startDate, endDate)),
      format: formatDateTime,
    }
  }

  const weeks = differenceInWeeks(endDate, startDate)
  if (weeks < 30) {
    return {
      array: eachWeekOfInterval(interval(startDate, endDate)),
      format: (date: Date) => {
        const start = max([startOfWeek(date), startDate])
        const end = min([endOfWeek(date), endDate])

        return `${formatDateTime(start)} - ${formatDateTime(end)}`
      },
    }
  }

  const months = differenceInMonths(endDate, startDate)
  if (months < 30) {
    return {
      array: eachMonthOfInterval(interval(startDate, endDate)),
      format: new Intl.DateTimeFormat("en", { month: "long", year: "numeric" })
        .format,
    }
  }

  return {
    array: eachYearOfInterval(interval(startDate, endDate)),
    format: new Intl.DateTimeFormat("en", { year: "numeric" }).format,
  }
}


/** @format */

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
type PmByDayChartProps = {
  data: {
    PM25: string
    CO: number
    PM10 : number
  }[],
}
export type CardProps = {
    label: string;
    amount: string;
    description: string;
    color : string
  };
  
  export default function Cardes(props: CardProps) {
    return (
      <CardContent className={props.color} >
        <section className="flex justify-between  " >
          {/* label */}
          <p className=" text-white text-sm font-semibold text-ellipsis">{props.label}</p>
          {/* icon */}
          
        </section>
        <hr></hr>
        <section className="flex justify-between gap-2 ">
            <div className="flex  justify-between gap-2">
              <div className="flex  flex-col text-lg text-white font-bold mt-2">
              {props.description}
              </div>
              <div className="flex  flex-col ml-5 text-sl text-white mt-2">
                {props.amount}
              </div>
            </div>
            <div></div>
            {/* desc */}
            
        </section>
      </CardContent>
    );
  }
  
  export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
      <div
        {...props}
        className={cn(
          "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
          props.className
        )}
      />
    );
  }
  
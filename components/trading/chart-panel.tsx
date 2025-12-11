"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"
import { TrendingUp, Settings2 } from "lucide-react"
import { useState } from "react"

const chartData = [
  { time: "00:00", price: 0.00015, volume: 125 },
  { time: "04:00", price: 0.00018, volume: 198 },
  { time: "08:00", price: 0.00025, volume: 287 },
  { time: "12:00", price: 0.00022, volume: 234 },
  { time: "16:00", price: 0.00035, volume: 412 },
  { time: "20:00", price: 0.00042, volume: 521 },
  { time: "24:00", price: 0.00055, volume: 634 },
]

const timeframes = ["1M", "5M", "15M", "1H", "4H", "1D", "1W"]
const chartTypes = ["Candlestick", "Line", "Area"]

interface ChartPanelProps {
  selectedToken: string
}

export function ChartPanel({ selectedToken }: ChartPanelProps) {
  const [timeframe, setTimeframe] = useState("1H")
  const [chartType, setChartType] = useState("Line")

  return (
    <Card className="flex-1 p-4 bg-background border-border flex flex-col min-h-0">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span className="font-semibold text-sm">Advanced Chart</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1 p-1 bg-card rounded-lg border border-border/50">
            {timeframes.map((tf) => (
              <Button
                key={tf}
                size="sm"
                variant={timeframe === tf ? "default" : "ghost"}
                className={`h-7 px-3 text-xs ${timeframe === tf ? "bg-primary text-primary-foreground" : ""}`}
                onClick={() => setTimeframe(tf)}
              >
                {tf}
              </Button>
            ))}
          </div>
          <Button size="icon" variant="ghost" className="h-9 w-9">
            <Settings2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.5 0.3 280)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="oklch(0.5 0.3 280)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.3 0 0)" />
            <XAxis dataKey="time" stroke="oklch(0.5 0 0)" style={{ fontSize: "12px" }} />
            <YAxis stroke="oklch(0.5 0 0)" style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.18 0 0)",
                border: "1px solid oklch(0.3 0 0)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "oklch(0.95 0 0)" }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="oklch(0.5 0.3 280)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPrice)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

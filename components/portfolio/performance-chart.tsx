"use client"

import { Card } from "@/components/ui/card"
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"
import { TrendingUp } from "lucide-react"

const performanceData = [
  { date: "Jan 1", balance: 5000 },
  { date: "Jan 7", balance: 5850 },
  { date: "Jan 14", balance: 5200 },
  { date: "Jan 21", balance: 7300 },
  { date: "Jan 28", balance: 8900 },
  { date: "Feb 4", balance: 10200 },
  { date: "Feb 11", balance: 12847 },
]

export function PerformanceChart() {
  return (
    <Card className="p-6 bg-background border-border">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-lg">Portfolio Performance</h3>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.5 0.3 280)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="oklch(0.5 0.3 280)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.3 0 0)" />
            <XAxis dataKey="date" stroke="oklch(0.5 0 0)" style={{ fontSize: "12px" }} />
            <YAxis stroke="oklch(0.5 0 0)" style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.18 0 0)",
                border: "1px solid oklch(0.3 0 0)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "oklch(0.95 0 0)" }}
              formatter={(value) => `$${value.toLocaleString()}`}
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="oklch(0.5 0.3 280)"
              strokeWidth={3}
              dot={false}
              fillOpacity={1}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

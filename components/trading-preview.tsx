"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"
import { TrendingUp, ArrowUpRight } from "lucide-react"

const chartData = [
  { time: "00:00", price: 0.00015 },
  { time: "04:00", price: 0.00018 },
  { time: "08:00", price: 0.00025 },
  { time: "12:00", price: 0.00022 },
  { time: "16:00", price: 0.00035 },
  { time: "20:00", price: 0.00042 },
  { time: "24:00", price: 0.00055 },
]

export function TradingPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column - Text */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent">Trading Interface</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">Trade with Professional Tools</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Experience a sleek, intuitive trading interface with real-time price feeds, advanced charting, and instant
              order execution.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Real-time price updates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-sm">Advanced technical analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm">One-click swaps</span>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Open Trading Terminal
            </Button>
          </div>

          {/* Right Column - Chart Preview */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-gradient-to-br from-background to-card border border-primary/20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">MEMELORD/USDC</p>
                  <p className="text-3xl font-bold">$0.00055</p>
                </div>
                <div className="flex items-center gap-2 bg-green-500/20 text-green-600 dark:text-green-400 px-3 py-1 rounded-lg">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-sm font-semibold">+266%</span>
                </div>
              </div>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="oklch(0.5 0.3 280)" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="oklch(0.5 0.3 280)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0 0)" />
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
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="oklch(0.5 0.3 280)"
                      strokeWidth={3}
                      dot={false}
                      fillOpacity={1}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

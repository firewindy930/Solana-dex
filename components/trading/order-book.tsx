"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

const bids = [
  { price: 0.00054, amount: 125.5, total: 67812 },
  { price: 0.00053, amount: 234.2, total: 124126 },
  { price: 0.00052, amount: 89.3, total: 46436 },
  { price: 0.00051, amount: 412.1, total: 210171 },
]

const asks = [
  { price: 0.00056, amount: 234.5, total: 131320 },
  { price: 0.00057, amount: 167.8, total: 95646 },
  { price: 0.00058, amount: 345.2, total: 200236 },
  { price: 0.00059, amount: 123.4, total: 72806 },
]

export function OrderBook() {
  return (
    <Card className="p-4 bg-background border-border flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-primary" />
        <span className="font-semibold text-sm">Order Book</span>
      </div>

      {/* Header */}
      <div className="grid grid-cols-3 gap-2 text-xs font-semibold text-muted-foreground px-2 mb-2">
        <span>Price</span>
        <span className="text-right">Amount</span>
        <span className="text-right">Total</span>
      </div>

      {/* Asks */}
      <div className="space-y-0 mb-3">
        {asks.slice(0, 3).map((ask, i) => (
          <div key={i} className="grid grid-cols-3 gap-2 text-xs px-2 py-1 hover:bg-card rounded cursor-pointer group">
            <span className="text-red-500 font-semibold">${ask.price.toFixed(8)}</span>
            <span className="text-right text-muted-foreground">{ask.amount}</span>
            <span className="text-right text-muted-foreground group-hover:text-foreground">${ask.total}</span>
          </div>
        ))}
      </div>

      {/* Spread */}
      <div className="p-2 bg-card rounded-lg border border-border/50 mb-3">
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Spread</p>
          <p className="text-sm font-bold">0.00002 (3.6%)</p>
        </div>
      </div>

      {/* Bids */}
      <div className="space-y-0">
        {bids.map((bid, i) => (
          <div key={i} className="grid grid-cols-3 gap-2 text-xs px-2 py-1 hover:bg-card rounded cursor-pointer group">
            <span className="text-green-500 font-semibold">${bid.price.toFixed(8)}</span>
            <span className="text-right text-muted-foreground">{bid.amount}</span>
            <span className="text-right text-muted-foreground group-hover:text-foreground">${bid.total}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

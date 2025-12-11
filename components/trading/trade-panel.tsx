"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ArrowRightLeft, Plus } from "lucide-react"

interface TradePanelProps {
  selectedToken: string
}

export function TradePanel({ selectedToken }: TradePanelProps) {
  const [tradeType, setTradeType] = useState<"buy" | "sell">("buy")
  const [amount, setAmount] = useState("")
  const [slippage, setSlippage] = useState("0.5")

  return (
    <Card className="p-5 bg-background border-border flex flex-col">
      {/* Trade Type Tabs */}
      <div className="flex gap-2 mb-6 p-1 bg-card rounded-lg border border-border/50">
        <button
          onClick={() => setTradeType("buy")}
          className={`flex-1 py-2 px-3 rounded-md text-sm font-semibold transition ${
            tradeType === "buy" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setTradeType("sell")}
          className={`flex-1 py-2 px-3 rounded-md text-sm font-semibold transition ${
            tradeType === "sell" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
          }`}
        >
          Sell
        </button>
      </div>

      {/* Input Fields */}
      <div className="space-y-4 mb-6">
        {/* You Pay */}
        <div>
          <label className="text-xs font-semibold text-muted-foreground mb-2 block">You Pay</label>
          <div className="relative">
            <input
              type="text"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 bg-card border border-border/50 rounded-lg text-sm font-semibold focus:outline-none focus:border-primary"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-background px-2 py-1 rounded border border-border/50 text-xs font-semibold">
              SOL
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Balance: 5.234 SOL</p>
        </div>

        {/* Swap Icon */}
        <div className="flex justify-center">
          <button className="p-2 hover:bg-card rounded-lg transition">
            <ArrowRightLeft className="w-5 h-5 text-primary" />
          </button>
        </div>

        {/* You Receive */}
        <div>
          <label className="text-xs font-semibold text-muted-foreground mb-2 block">You Receive (est.)</label>
          <div className="relative">
            <input
              type="text"
              placeholder="0.00"
              value={amount ? (Number.parseFloat(amount) / 0.00055).toFixed(0) : ""}
              readOnly
              className="w-full px-3 py-2 bg-card border border-border/50 rounded-lg text-sm font-semibold focus:outline-none focus:border-primary opacity-75"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-background px-2 py-1 rounded border border-border/50 text-xs font-semibold">
              MEMELORD
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Price impact: 0.12%</p>
        </div>
      </div>

      {/* Settings */}
      <div className="mb-6 p-3 bg-card border border-border/50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold">Slippage Tolerance</span>
          <span className="text-xs font-semibold text-primary">{slippage}%</span>
        </div>
        <div className="flex gap-2">
          {["0.1", "0.5", "1.0"].map((value) => (
            <button
              key={value}
              onClick={() => setSlippage(value)}
              className={`flex-1 py-1 px-2 text-xs rounded transition ${
                slippage === value
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border/50 hover:border-primary"
              }`}
            >
              {value}%
            </button>
          ))}
        </div>
      </div>

      {/* Trade Button */}
      <Button
        size="lg"
        className={`w-full font-semibold ${
          tradeType === "buy"
            ? "bg-green-500/80 hover:bg-green-600 text-white"
            : "bg-red-500/80 hover:bg-red-600 text-white"
        }`}
        onClick={() => {
          if (amount) {
            alert(`${tradeType === "buy" ? "Buying" : "Selling"} ${amount} SOL...`)
          }
        }}
      >
        {tradeType === "buy" ? "Buy MEMELORD" : "Sell MEMELORD"}
      </Button>

      {/* Quick Actions */}
      <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
        <p className="text-xs font-semibold text-muted-foreground">Quick Actions</p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
            <Plus className="w-3 h-3 mr-1" />
            +25%
          </Button>
          <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
            <Plus className="w-3 h-3 mr-1" />
            +50%
          </Button>
          <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
            <Plus className="w-3 h-3 mr-1" />
            Max
          </Button>
        </div>
      </div>
    </Card>
  )
}

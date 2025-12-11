"use client"

import { useState } from "react"
import { ChartPanel } from "./chart-panel"
import { TradePanel } from "./trade-panel"
import { OrderBook } from "./order-book"
import { TradeHistory } from "./trade-history"
import { MarketData } from "./market-data"

export function TradingTerminal() {
  const [selectedToken, setSelectedToken] = useState("MEMELORD/USDC")
  const [activeTab, setActiveTab] = useState<"trades" | "orders">("trades")

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto h-[calc(100vh-64px)]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-full p-4">
          {/* Main Chart Area - Takes 2.5 columns */}
          <div className="lg:col-span-2 flex flex-col gap-4 min-h-0">
            <MarketData selectedToken={selectedToken} />
            <ChartPanel selectedToken={selectedToken} />
          </div>

          {/* Right Sidebar - Trading and Order Book */}
          <div className="lg:col-span-1 flex flex-col gap-4 min-h-0">
            <TradePanel selectedToken={selectedToken} />
            <OrderBook />
          </div>

          {/* Bottom or Right - Trade History */}
          <div className="lg:col-span-1 flex flex-col gap-4 min-h-0">
            <TradeHistory activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </div>
    </div>
  )
}

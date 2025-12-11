"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { History, Clock } from "lucide-react"
import { ArrowUpRight, ArrowDownLeft } from "lucide-react"

const recentTrades = [
  {
    id: 1,
    type: "buy",
    amount: 5000,
    price: 0.00053,
    total: 2.65,
    time: "2 mins ago",
    status: "Completed",
  },
  {
    id: 2,
    type: "sell",
    amount: 2500,
    price: 0.00051,
    total: 1.275,
    time: "15 mins ago",
    status: "Completed",
  },
  {
    id: 3,
    type: "buy",
    amount: 7500,
    price: 0.00048,
    total: 3.6,
    time: "1 hour ago",
    status: "Completed",
  },
  {
    id: 4,
    type: "sell",
    amount: 3000,
    price: 0.00045,
    total: 1.35,
    time: "2 hours ago",
    status: "Completed",
  },
]

const openOrders = [
  {
    id: 101,
    type: "buy",
    amount: 1000,
    price: 0.00049,
    total: 0.49,
    status: "Open",
  },
  {
    id: 102,
    type: "sell",
    amount: 5000,
    price: 0.00061,
    total: 3.05,
    status: "Pending",
  },
]

interface TradeHistoryProps {
  activeTab: "trades" | "orders"
  setActiveTab: (tab: "trades" | "orders") => void
}

export function TradeHistory({ activeTab, setActiveTab }: TradeHistoryProps) {
  return (
    <Card className="p-4 bg-background border-border flex flex-col">
      {/* Tabs */}
      <div className="flex gap-2 mb-4 p-1 bg-card rounded-lg border border-border/50">
        <button
          onClick={() => setActiveTab("trades")}
          className={`flex-1 py-2 px-3 rounded-md text-sm font-semibold transition flex items-center justify-center gap-2 ${
            activeTab === "trades" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
          }`}
        >
          <History className="w-4 h-4" />
          <span>Trades</span>
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`flex-1 py-2 px-3 rounded-md text-sm font-semibold transition flex items-center justify-center gap-2 ${
            activeTab === "orders" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Orders</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "trades" ? (
          <div className="space-y-2">
            {recentTrades.map((trade) => (
              <div
                key={trade.id}
                className="p-3 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${trade.type === "buy" ? "bg-green-500/20" : "bg-red-500/20"}`}>
                      {trade.type === "buy" ? (
                        <ArrowDownLeft
                          className={`w-4 h-4 ${trade.type === "buy" ? "text-green-500" : "text-red-500"}`}
                        />
                      ) : (
                        <ArrowUpRight
                          className={`w-4 h-4 ${trade.type === "buy" ? "text-green-500" : "text-red-500"}`}
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-bold capitalize">{trade.type}</p>
                      <p className="text-xs text-muted-foreground">{trade.time}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {trade.status}
                  </Badge>
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount</span>
                    <span className="font-semibold">{trade.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price</span>
                    <span className="font-semibold">${trade.price.toFixed(8)}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-border/50">
                    <span className="text-muted-foreground">Total</span>
                    <span className="font-bold">{trade.total} SOL</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {openOrders.map((order) => (
              <div
                key={order.id}
                className="p-3 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-xs font-bold capitalize">{order.type} Order</p>
                    <p className="text-xs text-muted-foreground">#{order.id}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      order.status === "Open"
                        ? "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                        : "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                    }`}
                  >
                    {order.status}
                  </Badge>
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount</span>
                    <span className="font-semibold">{order.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price</span>
                    <span className="font-semibold">${order.price.toFixed(8)}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-border/50">
                    <span className="text-muted-foreground">Total</span>
                    <span className="font-bold">{order.total} SOL</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}

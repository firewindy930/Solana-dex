"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownLeft, History } from "lucide-react"

interface Transaction {
  id: string
  type: "buy" | "sell"
  token: string
  amount: number
  price: string
  total: string
  date: string
  status: "confirmed" | "pending"
}

const transactions: Transaction[] = [
  {
    id: "1",
    type: "buy",
    token: "MEMELORD",
    amount: 5000,
    price: "$0.00052",
    total: "$2.60",
    date: "2 hours ago",
    status: "confirmed",
  },
  {
    id: "2",
    type: "sell",
    token: "SPACESHIB",
    amount: 2000,
    price: "$0.00067",
    total: "$1.34",
    date: "1 day ago",
    status: "confirmed",
  },
  {
    id: "3",
    type: "buy",
    token: "SOLDOG",
    amount: 500,
    price: "$0.00088",
    total: "$0.44",
    date: "2 days ago",
    status: "confirmed",
  },
  {
    id: "4",
    type: "sell",
    token: "LUNATIC",
    amount: 1500,
    price: "$0.00030",
    total: "$0.45",
    date: "3 days ago",
    status: "confirmed",
  },
  {
    id: "5",
    type: "buy",
    token: "DEGENAI",
    amount: 3000,
    price: "$0.00041",
    total: "$1.23",
    date: "5 days ago",
    status: "confirmed",
  },
]

export function TransactionHistory() {
  return (
    <Card className="p-6 bg-background border-border">
      <div className="flex items-center gap-2 mb-6">
        <History className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-lg">Recent Transactions</h3>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="p-3 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition text-xs"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${tx.type === "buy" ? "bg-green-500/20" : "bg-red-500/20"}`}>
                  {tx.type === "buy" ? (
                    <ArrowDownLeft className="w-3 h-3 text-green-500" />
                  ) : (
                    <ArrowUpRight className="w-3 h-3 text-red-500" />
                  )}
                </div>
                <div>
                  <p className="font-bold capitalize">
                    {tx.type} {tx.token}
                  </p>
                  <p className="text-muted-foreground">{tx.date}</p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                {tx.status === "confirmed" ? "✓" : "⏳"}
              </Badge>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>{tx.amount} tokens</span>
              <span className="font-semibold text-foreground">{tx.total}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

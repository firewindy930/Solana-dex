"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, Trash2 } from "lucide-react"

interface Holding {
  id: string
  symbol: string
  name: string
  amount: number
  price: string
  value: string
  change24h: string
  isPositive: boolean
  color: string
}

const holdings: Holding[] = [
  {
    id: "1",
    symbol: "MEMELORD",
    name: "MemeLord Token",
    amount: 15000,
    price: "$0.00055",
    value: "$8,250",
    change24h: "+15.2%",
    isPositive: true,
    color: "from-purple-400 to-pink-400",
  },
  {
    id: "2",
    symbol: "SOLDOG",
    name: "Solana Doggo",
    amount: 3500,
    price: "$0.00089",
    value: "$3,115",
    change24h: "+8.4%",
    isPositive: true,
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: "3",
    symbol: "SPACESHIB",
    name: "Space Shiba",
    amount: 5000,
    price: "$0.00067",
    value: "$3,350",
    change24h: "-2.1%",
    isPositive: false,
    color: "from-indigo-400 to-purple-400",
  },
  {
    id: "4",
    symbol: "LUNATIC",
    name: "Lunatic Moon",
    amount: 8000,
    price: "$0.00032",
    value: "$2,560",
    change24h: "+22.3%",
    isPositive: true,
    color: "from-yellow-400 to-orange-400",
  },
  {
    id: "5",
    symbol: "DEGENAI",
    name: "DegenAI",
    amount: 6500,
    price: "$0.00043",
    value: "$2,795",
    change24h: "+5.7%",
    isPositive: true,
    color: "from-green-400 to-emerald-400",
  },
  {
    id: "6",
    symbol: "SOL",
    name: "Solana",
    price: "$185.50",
    amount: 25,
    value: "$4,637.50",
    change24h: "+12.1%",
    isPositive: true,
    color: "from-purple-600 to-indigo-600",
  },
]

export function HoldingsSection() {
  return (
    <Card className="p-6 bg-background border-border">
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-2">Your Holdings</h3>
        <p className="text-sm text-muted-foreground">{holdings.length} tokens in your portfolio</p>
      </div>

      {/* Holdings Table */}
      <div className="space-y-3 overflow-x-auto">
        {holdings.map((holding) => (
          <div
            key={holding.id}
            className="p-4 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition flex items-center gap-4"
          >
            {/* Token Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${holding.color} flex-shrink-0`} />
                <div className="min-w-0">
                  <p className="font-bold text-sm">{holding.symbol}</p>
                  <p className="text-xs text-muted-foreground truncate">{holding.name}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                {holding.amount.toLocaleString()} @ {holding.price}
              </p>
            </div>

            {/* Value */}
            <div className="text-right min-w-0">
              <p className="font-bold">{holding.value}</p>
              <Badge
                variant={holding.isPositive ? "default" : "secondary"}
                className={`gap-1 text-xs ${
                  holding.isPositive
                    ? "bg-green-500/20 text-green-600 dark:text-green-400"
                    : "bg-red-500/20 text-red-600 dark:text-red-400"
                }`}
              >
                {holding.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {holding.change24h}
              </Badge>
            </div>

            {/* Actions */}
            <Button variant="ghost" size="sm" className="h-9 w-9 flex-shrink-0 hover:bg-red-500/10">
              <Trash2 className="w-4 h-4 text-muted-foreground hover:text-red-500" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}

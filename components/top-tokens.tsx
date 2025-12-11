"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

const tokens = [
  {
    symbol: "MEMELORD",
    name: "MemeLord Token",
    price: "$0.00055",
    change: "+266%",
    isPositive: true,
    volume: "$4.2M",
    holders: "12,543",
    color: "from-purple-400 to-pink-400",
  },
  {
    symbol: "SOLDOG",
    name: "Solana Doggo",
    price: "$0.00089",
    change: "+145%",
    isPositive: true,
    volume: "$2.8M",
    holders: "8,234",
    color: "from-blue-400 to-cyan-400",
  },
  {
    symbol: "LUNATIC",
    name: "Lunatic Moon",
    price: "$0.00032",
    change: "+89%",
    isPositive: true,
    volume: "$1.9M",
    holders: "5,891",
    color: "from-yellow-400 to-orange-400",
  },
  {
    symbol: "GORILLAAPE",
    name: "Gorilla Ape Club",
    price: "$0.00012",
    change: "-12%",
    isPositive: false,
    volume: "$1.2M",
    holders: "3,456",
    color: "from-amber-400 to-yellow-400",
  },
  {
    symbol: "SPACESHIB",
    name: "Space Shiba",
    price: "$0.00067",
    change: "+324%",
    isPositive: true,
    volume: "$3.5M",
    holders: "9,876",
    color: "from-indigo-400 to-purple-400",
  },
  {
    symbol: "DEGENAI",
    name: "DegenAI",
    price: "$0.00043",
    change: "+98%",
    isPositive: true,
    volume: "$2.1M",
    holders: "6,234",
    color: "from-green-400 to-emerald-400",
  },
]

export function TopTokens() {
  return (
    <section id="tokens" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trending Meme Coins</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the hottest meme coins trading on Solana right now
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tokens.map((token, index) => (
            <Card
              key={index}
              className="p-6 bg-background border-border hover:border-primary/50 transition cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${token.color}`} />
                  <div>
                    <p className="font-bold text-sm">{token.symbol}</p>
                    <p className="text-xs text-muted-foreground">{token.name}</p>
                  </div>
                </div>
                <Badge
                  variant={token.isPositive ? "default" : "secondary"}
                  className={
                    token.isPositive
                      ? "bg-green-500/20 text-green-600 dark:text-green-400"
                      : "bg-red-500/20 text-red-600 dark:text-red-400"
                  }
                >
                  {token.isPositive ? (
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3 mr-1" />
                  )}
                  {token.change}
                </Badge>
              </div>

              <div className="mb-4 pb-4 border-b border-border">
                <p className="text-2xl font-bold">{token.price}</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">24h Volume</span>
                  <span className="font-semibold">{token.volume}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Holders</span>
                  <span className="font-semibold">{token.holders}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

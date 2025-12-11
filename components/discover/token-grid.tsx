"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react"

interface TokenGridProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  sortBy: string
}

const allTokens = [
  {
    symbol: "MEMELORD",
    name: "MemeLord Token",
    price: "$0.00055",
    change24h: "+266%",
    isPositive: true,
    volume24h: "$4.2M",
    marketCap: "$125M",
    holders: 12543,
    color: "from-purple-400 to-pink-400",
    liquidity: "$850K",
    createdDays: 15,
  },
  {
    symbol: "SOLDOG",
    name: "Solana Doggo",
    price: "$0.00089",
    change24h: "+145%",
    isPositive: true,
    volume24h: "$2.8M",
    marketCap: "$98M",
    holders: 8234,
    color: "from-blue-400 to-cyan-400",
    liquidity: "$620K",
    createdDays: 32,
  },
  {
    symbol: "LUNATIC",
    name: "Lunatic Moon",
    price: "$0.00032",
    change24h: "+89%",
    isPositive: true,
    volume24h: "$1.9M",
    marketCap: "$56M",
    holders: 5891,
    color: "from-yellow-400 to-orange-400",
    liquidity: "$420K",
    createdDays: 8,
  },
  {
    symbol: "GORILLAAPE",
    name: "Gorilla Ape Club",
    price: "$0.00012",
    change24h: "-12%",
    isPositive: false,
    volume24h: "$1.2M",
    marketCap: "$34M",
    holders: 3456,
    color: "from-amber-400 to-yellow-400",
    liquidity: "$310K",
    createdDays: 45,
  },
  {
    symbol: "SPACESHIB",
    name: "Space Shiba",
    price: "$0.00067",
    change24h: "+324%",
    isPositive: true,
    volume24h: "$3.5M",
    marketCap: "$142M",
    holders: 9876,
    color: "from-indigo-400 to-purple-400",
    liquidity: "$950K",
    createdDays: 3,
  },
  {
    symbol: "DEGENAI",
    name: "DegenAI",
    price: "$0.00043",
    change24h: "+98%",
    isPositive: true,
    volume24h: "$2.1M",
    marketCap: "$75M",
    holders: 6234,
    color: "from-green-400 to-emerald-400",
    liquidity: "$580K",
    createdDays: 21,
  },
  {
    symbol: "PEPESOLANA",
    name: "Pepe Solana",
    price: "$0.00095",
    change24h: "+512%",
    isPositive: true,
    volume24h: "$5.8M",
    marketCap: "$187M",
    holders: 15432,
    color: "from-lime-400 to-green-400",
    liquidity: "$1.2M",
    createdDays: 1,
  },
  {
    symbol: "CATMOON",
    name: "Cat to the Moon",
    price: "$0.00018",
    change24h: "+67%",
    isPositive: true,
    volume24h: "$890K",
    marketCap: "$28M",
    holders: 4123,
    color: "from-pink-400 to-rose-400",
    liquidity: "$250K",
    createdDays: 7,
  },
  {
    symbol: "RUGPULL",
    name: "RugPull Detector",
    price: "$0.00074",
    change24h: "-5%",
    isPositive: false,
    volume24h: "$1.5M",
    marketCap: "$89M",
    holders: 7654,
    color: "from-red-400 to-pink-400",
    liquidity: "$520K",
    createdDays: 52,
  },
]

export function TokenGrid({ searchQuery, setSearchQuery, sortBy }: TokenGridProps) {
  const filteredTokens = allTokens.filter(
    (token) =>
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            Tokens
          </h2>
          <Badge variant="secondary" className="text-sm">
            {filteredTokens.length} tokens
          </Badge>
        </div>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search tokens..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 bg-card border border-border/50 rounded-lg focus:outline-none focus:border-primary text-sm"
          />
        </div>
      </div>

      {/* Token Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTokens.map((token) => (
          <Card
            key={token.symbol}
            className="p-6 bg-background border-border hover:border-primary/50 transition group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${token.color}`} />
                <div>
                  <p className="font-bold">{token.symbol}</p>
                  <p className="text-sm text-muted-foreground">{token.name}</p>
                </div>
              </div>
              <Badge
                variant={token.isPositive ? "default" : "secondary"}
                className={
                  token.isPositive
                    ? "bg-green-500/20 text-green-600 dark:text-green-400 gap-1"
                    : "bg-red-500/20 text-red-600 dark:text-red-400 gap-1"
                }
              >
                {token.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {token.change24h}
              </Badge>
            </div>

            <div className="mb-4 pb-4 border-b border-border">
              <p className="text-2xl font-bold mb-1">{token.price}</p>
              <p className="text-xs text-muted-foreground">{token.createdDays} days old</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
              <div>
                <p className="text-muted-foreground mb-1">24h Volume</p>
                <p className="font-semibold">{token.volume24h}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Market Cap</p>
                <p className="font-semibold">{token.marketCap}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Holders</p>
                <p className="font-semibold">{token.holders.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Liquidity</p>
                <p className="font-semibold">{token.liquidity}</p>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-lg group-hover:shadow-primary/20 transition">
              Trade {token.symbol}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

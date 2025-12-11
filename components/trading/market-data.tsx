"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

interface MarketDataProps {
  selectedToken: string
}

export function MarketData({ selectedToken }: MarketDataProps) {
  return (
    <Card className="p-4 bg-background border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary" />
            <div>
              <p className="font-bold text-lg">{selectedToken}</p>
              <p className="text-xs text-muted-foreground">Solana Network</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold">$0.00055</p>
          <Badge className="bg-green-500/20 text-green-600 dark:text-green-400">
            <ArrowUpRight className="w-3 h-3 mr-1" />
            +266% (24h)
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 rounded-lg bg-card border border-border/50">
          <p className="text-xs text-muted-foreground mb-1">24h High</p>
          <p className="font-semibold">$0.00062</p>
        </div>
        <div className="p-3 rounded-lg bg-card border border-border/50">
          <p className="text-xs text-muted-foreground mb-1">24h Low</p>
          <p className="font-semibold">$0.00015</p>
        </div>
        <div className="p-3 rounded-lg bg-card border border-border/50">
          <p className="text-xs text-muted-foreground mb-1">24h Volume</p>
          <p className="font-semibold">$4.2M</p>
        </div>
        <div className="p-3 rounded-lg bg-card border border-border/50">
          <p className="text-xs text-muted-foreground mb-1">Market Cap</p>
          <p className="font-semibold">$125M</p>
        </div>
      </div>
    </Card>
  )
}

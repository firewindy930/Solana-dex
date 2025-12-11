"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

export function PortfolioOverview() {
  return (
    <div className="space-y-6">
      {/* Main Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <p className="text-muted-foreground text-sm font-semibold mb-2">Total Balance</p>
          <p className="text-4xl font-bold mb-4">$12,847.50</p>
          <Badge className="bg-green-500/20 text-green-600 dark:text-green-400 gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +$3,245.75 (34.7%)
          </Badge>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20">
          <p className="text-muted-foreground text-sm font-semibold mb-2">Daily P&L</p>
          <p className="text-4xl font-bold mb-4">+$425.30</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <p className="text-sm text-green-600 dark:text-green-400">+3.4% today</p>
          </div>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card className="p-6 bg-background border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Total Invested</p>
            <p className="text-2xl font-bold">$9,601.75</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Unrealized Gains</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">$3,245.75</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Holdings</p>
            <p className="text-2xl font-bold">12 Tokens</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Wallet Address</p>
            <p className="text-sm font-mono font-bold text-primary">8FqB...kZ9</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

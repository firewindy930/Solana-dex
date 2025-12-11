"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Trophy, Flame, Zap } from "lucide-react"
import { useState } from "react"

interface LeaderboardEntry {
  rank: number
  symbol: string
  name: string
  gain: number
  volume: string
  icon: React.ReactNode
}

const gainersData: LeaderboardEntry[] = [
  { rank: 1, symbol: "PEPESOLANA", name: "Pepe Solana", gain: 512, volume: "$5.8M", icon: "🐸" },
  { rank: 2, symbol: "SPACESHIB", name: "Space Shiba", gain: 324, volume: "$3.5M", icon: "🚀" },
  { rank: 3, symbol: "MEMELORD", name: "MemeLord Token", gain: 266, volume: "$4.2M", icon: "👑" },
  { rank: 4, symbol: "SOLDOG", name: "Solana Doggo", gain: 145, volume: "$2.8M", icon: "🐕" },
  { rank: 5, symbol: "DEGENAI", name: "DegenAI", gain: 98, volume: "$2.1M", icon: "🤖" },
]

const losersData: LeaderboardEntry[] = [
  { rank: 1, symbol: "RUGPULL", name: "RugPull Detector", gain: -5, volume: "$1.5M", icon: "⚠️" },
  { rank: 2, symbol: "GORILLAAPE", name: "Gorilla Ape Club", gain: -12, volume: "$1.2M", icon: "🦍" },
  { rank: 3, symbol: "OLDTOKEN", name: "Old Token", gain: -23, volume: "$780K", icon: "👴" },
  { rank: 4, symbol: "DEADMEM", name: "Dead Meme", gain: -45, volume: "$420K", icon: "💀" },
  { rank: 5, symbol: "FORGOTTEN", name: "Forgotten Coin", gain: -78, volume: "$120K", icon: "👻" },
]

export function Leaderboard() {
  const [activeTab, setActiveTab] = useState<"gainers" | "losers">("gainers")

  const data = activeTab === "gainers" ? gainersData : losersData

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Leaderboards</h2>

        {/* Tabs */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setActiveTab("gainers")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === "gainers"
                ? "bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30"
                : "bg-card border border-border hover:border-primary"
            }`}
          >
            <Flame className="w-5 h-5" />
            Top Gainers
          </button>
          <button
            onClick={() => setActiveTab("losers")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === "losers"
                ? "bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/30"
                : "bg-card border border-border hover:border-primary"
            }`}
          >
            <ArrowUpRight className="w-5 h-5 rotate-180" />
            Top Losers
          </button>
        </div>
      </div>

      {/* Leaderboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {data.map((entry) => (
          <Card
            key={entry.rank}
            className="p-5 bg-background border-border hover:border-primary/50 transition group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                {entry.rank === 1 && <Trophy className="w-5 h-5 text-yellow-500" />}
                {entry.rank === 2 && <Trophy className="w-5 h-5 text-gray-400" />}
                {entry.rank === 3 && <Trophy className="w-5 h-5 text-orange-600" />}
                {entry.rank > 3 && <Zap className="w-5 h-5 text-primary" />}
                <span className="text-2xl font-bold text-muted-foreground">#{entry.rank}</span>
              </div>
              <span className="text-2xl">{entry.icon}</span>
            </div>

            <div className="mb-3">
              <p className="font-bold text-sm">{entry.symbol}</p>
              <p className="text-xs text-muted-foreground">{entry.name}</p>
            </div>

            <div className="mb-3 pb-3 border-b border-border">
              <Badge
                className={`gap-1 ${
                  entry.gain >= 0
                    ? "bg-green-500/20 text-green-600 dark:text-green-400"
                    : "bg-red-500/20 text-red-600 dark:text-red-400"
                }`}
              >
                {entry.gain >= 0 ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowUpRight className="w-3 h-3 rotate-180" />
                )}
                {Math.abs(entry.gain)}%
              </Badge>
            </div>

            <p className="text-xs text-muted-foreground">Vol: {entry.volume}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

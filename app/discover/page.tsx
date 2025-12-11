"use client"

import { Navigation } from "@/components/navigation"
import { DiscoveryHero } from "@/components/discover/discovery-hero"
import { TokenFilters } from "@/components/discover/token-filters"
import { TokenGrid } from "@/components/discover/token-grid"
import { Leaderboard } from "@/components/discover/leaderboard"
import { useState } from "react"

type SortOption = "trending" | "gainers" | "losers" | "volume" | "market-cap" | "new"
type TimeRange = "1h" | "24h" | "7d"

export default function DiscoverPage() {
  const [sortBy, setSortBy] = useState<SortOption>("trending")
  const [timeRange, setTimeRange] = useState<TimeRange>("24h")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <DiscoveryHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <TokenFilters sortBy={sortBy} setSortBy={setSortBy} timeRange={timeRange} setTimeRange={setTimeRange} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <TokenGrid searchQuery={searchQuery} setSearchQuery={setSearchQuery} sortBy={sortBy} />
          </div>
        </div>

        {/* Leaderboard Section */}
        <div className="mt-16">
          <Leaderboard />
        </div>
      </div>
    </main>
  )
}

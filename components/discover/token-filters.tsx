"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TokenFiltersProps {
  sortBy: string
  setSortBy: (sort: string) => void
  timeRange: string
  setTimeRange: (range: string) => void
}

export function TokenFilters({ sortBy, setSortBy, timeRange, setTimeRange }: TokenFiltersProps) {
  const sortOptions = [
    { value: "trending", label: "Trending" },
    { value: "gainers", label: "Top Gainers" },
    { value: "losers", label: "Top Losers" },
    { value: "volume", label: "By Volume" },
    { value: "market-cap", label: "Market Cap" },
    { value: "new", label: "Newest" },
  ]

  const timeRanges = ["1h", "24h", "7d"]

  return (
    <Card className="p-6 bg-background border-border sticky top-20">
      {/* Sort By */}
      <div className="mb-8">
        <h3 className="font-bold text-sm mb-4">Sort By</h3>
        <div className="space-y-2">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSortBy(option.value)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                sortBy === option.value
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "hover:bg-card border border-border/50"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Time Range */}
      <div className="mb-8 pb-8 border-b border-border">
        <h3 className="font-bold text-sm mb-4">Time Range</h3>
        <div className="flex gap-2">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range as "1h" | "24h" | "7d")}
              className={`flex-1 py-2 rounded-lg text-xs font-semibold transition ${
                timeRange === range
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border/50 hover:border-primary"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="font-bold text-sm mb-3">Category</h3>
        <div className="flex flex-wrap gap-2">
          {["Memes", "Gaming", "AI", "Degen", "Shitcoin", "DeFi"].map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}

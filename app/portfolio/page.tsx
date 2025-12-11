"use client"

import { Navigation } from "@/components/navigation"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioOverview } from "@/components/portfolio/portfolio-overview"
import { HoldingsSection } from "@/components/portfolio/holdings-section"
import { PerformanceChart } from "@/components/portfolio/performance-chart"
import { TransactionHistory } from "@/components/portfolio/transaction-history"
import { WalletActions } from "@/components/portfolio/wallet-actions"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PortfolioHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <PortfolioOverview />
            <PerformanceChart />
            <HoldingsSection />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            <WalletActions />
            <TransactionHistory />
          </div>
        </div>
      </div>
    </main>
  )
}

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { TradingPreview } from "@/components/trading-preview"
import { TopTokens } from "@/components/top-tokens"
import { Community } from "@/components/community"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <TradingPreview />
      <TopTokens />
      <Community />
      <CTA />
      <Footer />
    </main>
  )
}

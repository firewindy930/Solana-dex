import { TradingTerminal } from "@/components/trading/terminal"
import { Navigation } from "@/components/navigation"

export default function TradePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <TradingTerminal />
    </main>
  )
}

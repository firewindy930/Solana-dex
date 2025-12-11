import { Wallet } from "lucide-react"

export function PortfolioHero() {
  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Wallet className="w-8 h-8 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">Your Portfolio</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Track your holdings, monitor performance, and manage your wallet all in one place
        </p>
      </div>
    </section>
  )
}

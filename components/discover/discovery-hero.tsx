import { Search } from "lucide-react"

export function DiscoveryHero() {
  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Trending Meme Coins</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Explore the hottest tokens on Solana with advanced filtering and real-time analytics
        </p>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by token name or symbol..."
            className="w-full pl-12 pr-4 py-3 bg-card border-2 border-border rounded-lg focus:outline-none focus:border-primary text-sm"
          />
        </div>
      </div>
    </section>
  )
}

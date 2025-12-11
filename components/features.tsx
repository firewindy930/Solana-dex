"use client"

import { Card } from "@/components/ui/card"
import { Zap, Shield, TrendingUp, Users, Rocket, Sparkles } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built on Solana for sub-second transaction speeds and minimal fees",
    color: "from-primary to-secondary",
  },
  {
    icon: Shield,
    title: "Fully Decentralized",
    description: "Non-custodial trading with complete control over your assets",
    color: "from-secondary to-accent",
  },
  {
    icon: TrendingUp,
    title: "Advanced Charts",
    description: "Real-time candlestick charts and technical analysis tools",
    color: "from-accent to-primary",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Share ideas, strategies, and memes with thousands of traders",
    color: "from-primary to-accent",
  },
  {
    icon: Rocket,
    title: "Launchpad",
    description: "Launch your own meme coin with our easy-to-use creator tools",
    color: "from-secondary to-primary",
  },
  {
    icon: Sparkles,
    title: "Fair & Transparent",
    description: "Transparent pricing, no hidden fees, and community governance",
    color: "from-accent to-secondary",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose SolaMeme?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of decentralized meme trading with cutting-edge features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group p-8 bg-background border-border hover:border-primary/50 transition duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

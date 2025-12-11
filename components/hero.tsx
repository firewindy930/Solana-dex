"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">The Future of Meme Trading</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Trade Meme Coins Like Never Before</h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Welcome to SolaMeme, the vibrant decentralized exchange built for Solana's wildest and most creative meme
          coins. Fast, fun, and designed for memers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
            Start Trading
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-accent hover:bg-accent/10 bg-transparent">
            Launch Meme Coin
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="text-3xl font-bold gradient-text mb-2">$2.4B+</div>
            <p className="text-sm text-muted-foreground">Trading Volume</p>
          </div>
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="text-3xl font-bold gradient-text mb-2">50K+</div>
            <p className="text-sm text-muted-foreground">Active Traders</p>
          </div>
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="text-3xl font-bold gradient-text mb-2">1,234</div>
            <p className="text-sm text-muted-foreground">Meme Coins</p>
          </div>
        </div>
      </div>
    </section>
  )
}

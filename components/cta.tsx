"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Start Trading?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join thousands of traders making incredible returns on Solana's most exciting meme coins. No experience
          necessary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
            Launch SolaMeme Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-accent hover:bg-accent/10 bg-transparent">
            Read Documentation
          </Button>
        </div>
      </div>
    </section>
  )
}

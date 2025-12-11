"use client"

import Link from "next/link"
import { Github, Twitter, MessageCircle, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold">𝚂</span>
              </div>
              <span className="font-bold gradient-text">SolaMeme</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The ultimate Solana meme coin DEX. Trade, discover, and launch with style.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Trading Terminal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Token Launchpad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Leaderboards
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className="font-bold mb-4">Developers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Smart Contracts
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Telegram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">2025 SolaMeme. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

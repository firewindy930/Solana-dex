"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">𝚂</span>
            </div>
            <span className="font-bold text-xl hidden sm:block gradient-text">SolaMeme</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm hover:text-primary transition">
              Features
            </Link>
            <Link href="#tokens" className="text-sm hover:text-primary transition">
              Top Tokens
            </Link>
            <Link href="#community" className="text-sm hover:text-primary transition">
              Community
            </Link>
            <Link href="#docs" className="text-sm hover:text-primary transition">
              Docs
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm">
              Connect Wallet
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Launch App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="#features"
              className="block text-sm hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#tokens"
              className="block text-sm hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Top Tokens
            </Link>
            <Link
              href="#community"
              className="block text-sm hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Community
            </Link>
            <div className="pt-2 space-y-2">
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Connect Wallet
              </Button>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                Launch App
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

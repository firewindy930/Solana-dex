"use client"

import { Navigation } from "@/components/navigation"
import { CommunityHero } from "@/components/community/community-hero"
import { FeedWithSidebar } from "@/components/community/feed-with-sidebar"

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <CommunityHero />
      <FeedWithSidebar />
    </main>
  )
}

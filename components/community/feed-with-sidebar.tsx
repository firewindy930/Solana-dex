"use client"

import { CommunityFeed } from "./community-feed"
import { CommunitySidebar } from "./community-sidebar"

export function FeedWithSidebar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Feed - Takes 2 columns */}
        <div className="lg:col-span-2">
          <CommunityFeed />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <CommunitySidebar />
        </div>
      </div>
    </div>
  )
}

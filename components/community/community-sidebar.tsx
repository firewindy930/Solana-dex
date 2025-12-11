"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Flame, Users, MessageCircle } from "lucide-react"

interface TrendingTopic {
  name: string
  posts: number
  trend: "up" | "down"
  icon?: string
}

interface TopMember {
  name: string
  avatar: string
  posts: number
  followers: number
}

const trendingTopics: TrendingTopic[] = [
  { name: "#MEMELORD", posts: 12543, trend: "up", icon: "👑" },
  { name: "#Trading", posts: 8934, trend: "up", icon: "📈" },
  { name: "#SPACESHIB", posts: 7821, trend: "up", icon: "🚀" },
  { name: "#Giveaway", posts: 6543, trend: "up", icon: "🎁" },
  { name: "#Analysis", posts: 5234, trend: "down", icon: "🔍" },
  { name: "#Launchpad", posts: 4123, trend: "up", icon: "🚀" },
]

const topMembers: TopMember[] = [
  { name: "MemeKing42", avatar: "👑", posts: 523, followers: 12543 },
  { name: "SolanaDegen", avatar: "🚀", posts: 478, followers: 9876 },
  { name: "CryptoMeme", avatar: "🎨", posts: 412, followers: 8234 },
  { name: "DegenAI", avatar: "🤖", posts: 391, followers: 7654 },
  { name: "LunaticMoon", avatar: "🌙", posts: 356, followers: 6543 },
]

export function CommunitySidebar() {
  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <Card className="p-6 bg-background border-border">
        <div className="flex items-center gap-2 mb-6">
          <Flame className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-lg">Trending Topics</h3>
        </div>

        <div className="space-y-3">
          {trendingTopics.map((topic) => (
            <button
              key={topic.name}
              className="w-full text-left p-3 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  {topic.icon && <span className="text-lg">{topic.icon}</span>}
                  <p className="font-semibold text-sm">{topic.name}</p>
                </div>
                {topic.trend === "up" ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingUp className="w-4 h-4 rotate-180 text-red-500" />
                )}
              </div>
              <p className="text-xs text-muted-foreground">{topic.posts.toLocaleString()} posts</p>
            </button>
          ))}
        </div>
      </Card>

      {/* Top Community Members */}
      <Card className="p-6 bg-background border-border">
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-5 h-5 text-secondary" />
          <h3 className="font-bold text-lg">Top Members</h3>
        </div>

        <div className="space-y-3">
          {topMembers.map((member, index) => (
            <div
              key={member.name}
              className="flex items-center justify-between p-3 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="relative">
                  <span className="text-2xl">{member.avatar}</span>
                  {index < 3 && (
                    <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs">
                      {index + 1}
                    </Badge>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.followers.toLocaleString()} followers</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="bg-transparent text-xs flex-shrink-0">
                Follow
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Community Rules */}
      <Card className="p-6 bg-background border-border">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-primary" />
          Community Guidelines
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span>✓</span>
            <span>Be respectful and constructive</span>
          </li>
          <li className="flex gap-2">
            <span>✓</span>
            <span>No spam or self-promotion</span>
          </li>
          <li className="flex gap-2">
            <span>✓</span>
            <span>DYOR - Do Your Own Research</span>
          </li>
          <li className="flex gap-2">
            <span>✓</span>
            <span>No financial advice</span>
          </li>
          <li className="flex gap-2">
            <span>✓</span>
            <span>Report suspicious activity</span>
          </li>
        </ul>
      </Card>
    </div>
  )
}

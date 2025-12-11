"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Heart, Share2, MoreHorizontal, ImageIcon, Send } from "lucide-react"

interface Post {
  id: string
  author: string
  avatar: string
  role?: string
  content: string
  image?: string
  timestamp: string
  likes: number
  replies: number
  shares: number
  liked: boolean
  tags?: string[]
}

const communityPosts: Post[] = [
  {
    id: "1",
    author: "MemeKing42",
    avatar: "👑",
    role: "Diamond Trader",
    content:
      "Just hit $50K in profits this month! MEMELORD has been absolutely insane. The chart patterns are so clean on this one. Diamond hands only.",
    timestamp: "2 hours ago",
    likes: 2543,
    replies: 89,
    shares: 156,
    liked: false,
    tags: ["MEMELORD", "Trading", "Wins"],
  },
  {
    id: "2",
    author: "SolanaDegen",
    avatar: "🚀",
    role: "Community Moderator",
    content:
      "The trading interface on SolaMeme is genuinely the best I've used. Real-time updates, zero lag, and the order book is ultra responsive. Props to the dev team!",
    timestamp: "4 hours ago",
    likes: 1876,
    replies: 145,
    shares: 203,
    liked: true,
    tags: ["SolaMeme", "Platform", "Feedback"],
  },
  {
    id: "3",
    author: "CryptoMeme",
    avatar: "🎨",
    content:
      "Alpha alert: SPACESHIB showing a classic cup and handle formation. If it breaks above 0.0007, we're looking at a 5x minimum. Enter now while it's still under the radar.",
    timestamp: "6 hours ago",
    likes: 3421,
    replies: 267,
    shares: 512,
    liked: false,
    tags: ["SPACESHIB", "Analysis", "Trading"],
  },
  {
    id: "4",
    author: "DegenAI",
    avatar: "🤖",
    role: "Dev",
    content:
      "New launchpad feature dropping next week. You'll be able to create a meme coin in literally 2 clicks. No technical knowledge required. Get ready to make the next viral coin!",
    timestamp: "8 hours ago",
    likes: 4267,
    replies: 534,
    shares: 892,
    liked: false,
    tags: ["Launchpad", "Feature", "Upcoming"],
  },
  {
    id: "5",
    author: "LunaticMoon",
    avatar: "🌙",
    content:
      "Someone is accumulating LUNATIC hard right now. Wallet just bought 5M tokens in the last hour. This is how early investors get rich. DYOR though.",
    timestamp: "10 hours ago",
    likes: 2198,
    replies: 178,
    shares: 298,
    liked: true,
    tags: ["LUNATIC", "Signals", "Analysis"],
  },
]

export function CommunityFeed() {
  const [posts, setPosts] = useState(communityPosts)
  const [newPost, setNewPost] = useState("")

  const toggleLike = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
          }
        }
        return post
      }),
    )
  }

  return (
    <div className="space-y-6">
      {/* Create Post */}
      <Card className="p-6 bg-background border-border">
        <div className="flex gap-4">
          <div className="text-2xl">💬</div>
          <div className="flex-1">
            <textarea
              placeholder="Share your thoughts, analysis, or wins with the community..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="w-full bg-card border border-border/50 rounded-lg p-3 text-sm resize-none focus:outline-none focus:border-primary min-h-24"
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="gap-2">
                  <ImageIcon className="w-4 h-4" />
                  Image
                </Button>
              </div>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 gap-2"
                onClick={() => {
                  if (newPost.trim()) {
                    const post: Post = {
                      id: Math.random().toString(),
                      author: "You",
                      avatar: "🎭",
                      content: newPost,
                      timestamp: "now",
                      likes: 0,
                      replies: 0,
                      shares: 0,
                      liked: false,
                    }
                    setPosts([post, ...posts])
                    setNewPost("")
                  }
                }}
              >
                <Send className="w-4 h-4" />
                Post
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Feed Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-6 bg-background border-border hover:border-primary/50 transition">
            {/* Post Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex gap-3">
                <div className="text-3xl">{post.avatar}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold">{post.author}</p>
                    {post.role && (
                      <Badge variant="secondary" className="text-xs">
                        {post.role}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                </div>
              </div>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
              </Button>
            </div>

            {/* Post Content */}
            <p className="text-sm mb-4 leading-relaxed">{post.content}</p>

            {/* Tags */}
            {post.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-border text-sm text-muted-foreground">
              <button className="flex items-center gap-2 hover:text-primary transition group">
                <MessageCircle className="w-4 h-4 group-hover:bg-primary/10 rounded-full p-1 w-6 h-6" />
                <span>{post.replies}</span>
              </button>
              <button
                onClick={() => toggleLike(post.id)}
                className="flex items-center gap-2 hover:text-primary transition group"
              >
                <Heart
                  className={`w-4 h-4 group-hover:bg-red-500/10 rounded-full p-1 w-6 h-6 ${post.liked ? "fill-red-500 text-red-500" : ""}`}
                />
                <span className={post.liked ? "text-red-500" : ""}>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-primary transition group">
                <Share2 className="w-4 h-4 group-hover:bg-primary/10 rounded-full p-1 w-6 h-6" />
                <span>{post.shares}</span>
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

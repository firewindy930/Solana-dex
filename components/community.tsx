"use client"

import { Card } from "@/components/ui/card"
import { MessageCircle, Users, Heart, Share2 } from "lucide-react"

const posts = [
  {
    author: "MemeKing42",
    avatar: "👑",
    content: "Just turned $10 into $500 on MEMELORD! This DEX is absolutely insane!",
    likes: 2543,
    replies: 89,
    shares: 156,
  },
  {
    author: "SolanaDegen",
    avatar: "🚀",
    content: "The charts on SolaMeme are cleaner than anything I've used before. Revolutionary!",
    likes: 1876,
    replies: 145,
    shares: 203,
  },
  {
    author: "CryptoMeme",
    avatar: "🎨",
    content: "About to launch my own meme coin using the SolaMeme Launchpad. No code needed!",
    likes: 3421,
    replies: 267,
    shares: 512,
  },
]

export function Community() {
  return (
    <section id="community" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with thousands of meme enthusiasts and traders
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Stats */}
          <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <Users className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="text-4xl font-bold mb-2">125K+</p>
            <p className="text-muted-foreground">Active Community Members</p>
          </Card>
          <Card className="p-8 text-center bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20">
            <MessageCircle className="w-8 h-8 text-secondary mx-auto mb-4" />
            <p className="text-4xl font-bold mb-2">500K+</p>
            <p className="text-muted-foreground">Daily Messages</p>
          </Card>
          <Card className="p-8 text-center bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
            <Heart className="w-8 h-8 text-accent mx-auto mb-4" />
            <p className="text-4xl font-bold mb-2">1M+</p>
            <p className="text-muted-foreground">Shares & Reactions</p>
          </Card>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Latest Community Posts</h3>
          {posts.map((post, index) => (
            <Card key={index} className="p-6 bg-background border-border hover:border-primary/50 transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{post.avatar}</div>
                <div>
                  <p className="font-bold">{post.author}</p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <p className="text-base mb-4">{post.content}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border text-sm text-muted-foreground">
                <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.replies}</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition">
                  <Heart className="w-4 h-4" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition">
                  <Share2 className="w-4 h-4" />
                  <span>{post.shares}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { MessageCircle, Users, Flame } from "lucide-react"

export function CommunityHero() {
  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MessageCircle className="w-8 h-8 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">Community Hub</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Share ideas, discuss strategies, and connect with traders worldwide
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-10 max-w-xl mx-auto">
          <div className="p-4 rounded-lg bg-card border border-border">
            <Users className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="font-bold text-sm">125K+ Members</p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <MessageCircle className="w-5 h-5 text-secondary mx-auto mb-2" />
            <p className="font-bold text-sm">500K+ Posts</p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <Flame className="w-5 h-5 text-accent mx-auto mb-2" />
            <p className="font-bold text-sm">Trending Now</p>
          </div>
        </div>
      </div>
    </section>
  )
}

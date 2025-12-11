"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, ExternalLink, Download, Upload, Settings } from "lucide-react"

export function WalletActions() {
  return (
    <Card className="p-6 bg-background border-border">
      <h3 className="font-bold text-lg mb-6">Wallet Actions</h3>

      {/* Wallet Address Display */}
      <div className="p-4 bg-card border border-border/50 rounded-lg mb-6">
        <p className="text-xs text-muted-foreground mb-2">Your Wallet Address</p>
        <p className="font-mono text-sm font-bold break-all mb-3">8FqB...kZ9p7q2...r5mN2Kk</p>
        <Button
          size="sm"
          variant="outline"
          className="w-full bg-transparent gap-2"
          onClick={() => navigator.clipboard.writeText("8FqBkZ9p7q2r5mN2Kk")}
        >
          <Copy className="w-4 h-4" />
          Copy Address
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 mb-6">
        <Button size="sm" className="w-full bg-primary hover:bg-primary/90 gap-2">
          <Upload className="w-4 h-4" />
          Deposit SOL
        </Button>
        <Button size="sm" variant="outline" className="w-full bg-transparent gap-2">
          <Download className="w-4 h-4" />
          Withdraw
        </Button>
        <Button size="sm" variant="outline" className="w-full bg-transparent gap-2">
          <ExternalLink className="w-4 h-4" />
          View on Explorer
        </Button>
      </div>

      {/* Security Settings */}
      <div className="pt-6 border-t border-border">
        <h4 className="font-semibold text-sm mb-4">Security</h4>
        <Button size="sm" variant="outline" className="w-full bg-transparent gap-2 text-xs">
          <Settings className="w-4 h-4" />
          Manage Permissions
        </Button>
      </div>
    </Card>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WalletIcon } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-[#333333] sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#00FFFF]">
          NFT Gallery
        </Link>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="border-[#333333] text-[#00FFFF] hover:bg-[#00FFFF]/10 transition-all duration-300"
          >
            <WalletIcon className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  )
}


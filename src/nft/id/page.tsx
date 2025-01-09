"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Heart, Share2, Eye } from 'lucide-react'
import Image from "next/image"
import { Header } from "@/components/header"
import { NFT, nfts as initialNFTs } from "@/lib/data"

export default function NFTPage({ params }: { params: { id: string } }) {
  const [nft, setNft] = useState<NFT | null>(null)

  useEffect(() => {
    const storedNFTs = localStorage.getItem('nfts')
    let nftsToUse: NFT[]

    if (storedNFTs) {
      nftsToUse = JSON.parse(storedNFTs)
    } else {
      nftsToUse = initialNFTs
      localStorage.setItem('nfts', JSON.stringify(initialNFTs))
    }

    const foundNft = nftsToUse.find((n: NFT) => n.id === parseInt(params.id))
    if (foundNft) {
      const updatedNft = { ...foundNft, views: foundNft.views + 1 }
      setNft(updatedNft)
      const updatedNFTs = nftsToUse.map((n: NFT) => 
        n.id === updatedNft.id ? updatedNft : n
      )
      localStorage.setItem('nfts', JSON.stringify(updatedNFTs))
    }
  }, [params.id])

  if (!nft) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0]">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="glow-effect rounded-lg overflow-hidden">
            <Image
              src={nft.image}
              alt={nft.title}
              width={600}
              height={600}
              className="w-full"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-[#00FFFF]">{nft.title}</h1>
              <div className="flex items-center gap-2 mt-4">
                <p className="text-[#888888]">From collection:</p>
                <Badge variant="outline" className="font-semibold border-[#333333] text-[#00FFFF]">
                  {nft.collection}
                </Badge>
              </div>
            </div>
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#888888]">Current price</p>
                    <p className="text-2xl font-bold text-[#00FFFF]">
                      {nft.price} {nft.currency}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline" className="border-[#333333] hover:bg-[#00FFFF]/10">
                      <Heart className="h-4 w-4 text-[#00FFFF]" />
                    </Button>
                    <Button size="icon" variant="outline" className="border-[#333333] hover:bg-[#00FFFF]/10">
                      <Share2 className="h-4 w-4 text-[#00FFFF]" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-[#00FFFF] text-[#0A0A0A] hover:bg-[#00FFFF]/90 transition-colors"
                >
                  Make offer
                </Button>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <h2 className="text-xl font-semibold text-[#00FFFF]">Details</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[#888888]">Contract Address</p>
                    <p className="text-[#E0E0E0]">{nft.contractAddress}</p>
                  </div>
                  <div>
                    <p className="text-[#888888]">Token ID</p>
                    <p className="text-[#E0E0E0]">{nft.tokenId}</p>
                  </div>
                  <div>
                    <p className="text-[#888888]">Token Standard</p>
                    <p className="text-[#E0E0E0]">{nft.tokenStandard}</p>
                  </div>
                  <div>
                    <p className="text-[#888888]">Chain</p>
                    <p className="text-[#E0E0E0]">{nft.chain}</p>
                  </div>
                  <div>
                    <p className="text-[#888888]">Last Updated</p>
                    <p className="text-[#E0E0E0]">{nft.lastUpdated}</p>
                  </div>
                  <div>
                    <p className="text-[#888888]">Creator Earnings</p>
                    <p className="text-[#E0E0E0]">{nft.creatorEarnings}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-[#888888]" />
                  <span className="text-[#E0E0E0]">{nft.views} views</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-[#00FFFF]">Description</h3>
                  <p className="text-[#888888] leading-relaxed">
                    {nft.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}


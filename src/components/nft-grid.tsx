"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Eye } from 'lucide-react'
import { NFT } from "@/lib/data"

interface NFTGridProps {
  nfts: NFT[]
}

export function NFTGrid({ nfts }: NFTGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {nfts.map((nft) => (
        <Link key={nft.id} href={`/nft/${nft.id}`}>
          <Card className="overflow-hidden glass-card group hover:scale-[1.02] transition-all duration-300">
            <CardContent className="p-0 relative">
              <Image
                src={nft.image}
                alt={nft.title}
                width={400}
                height={400}
                className="aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">{nft.title}</p>
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <div className="w-full">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-[#00FFFF]">{nft.collection}</h3>
                    {nft.verified && <CheckCircle className="h-4 w-4 text-[#00FFFF]" />}
                  </div>
                  <Badge variant="outline" className="border-[#333333] text-[#00FFFF]">
                    {nft.price} {nft.currency}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-[#888888]">
                  <Eye className="h-4 w-4" />
                  <span>{nft.views} views</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}


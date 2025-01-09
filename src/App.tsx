"use client"

import { useState, useEffect } from "react"
import { Search } from "@/components/search"
import { Categories } from "@/components/categories"
import { NFTGrid } from "@/components/nft-grid"
import { Header } from "@/components/header"
import { nfts as initialNFTs, NFT } from "@/lib/data"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortedNFTs, setSortedNFTs] = useState<NFT[]>([])

  useEffect(() => {
    const storedNFTs = localStorage.getItem('nfts')
    let nftsToUse: NFT[]

    if (storedNFTs) {
      nftsToUse = JSON.parse(storedNFTs)
    } else {
      nftsToUse = initialNFTs
      localStorage.setItem('nfts', JSON.stringify(initialNFTs))
    }

    setSortedNFTs(nftsToUse.sort((a: NFT, b: NFT) => a.views - b.views))
  }, [])

  useEffect(() => {
    if (sortedNFTs.length > 0) {
      localStorage.setItem('nfts', JSON.stringify(sortedNFTs))
    }
  }, [sortedNFTs])

  const filteredNFTs = sortedNFTs.filter((nft) => {
    const matchesSearch = nft.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          nft.collection.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || nft.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Search onSearch={setSearchTerm} />
          <Categories onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} />
        </div>
        <NFTGrid nfts={filteredNFTs} />
      </main>
    </div>
  )
}


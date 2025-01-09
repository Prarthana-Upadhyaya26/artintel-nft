"use client"

import { Input } from "@/components/ui/input"
import { SearchIcon } from 'lucide-react'

interface SearchProps {
  onSearch: (term: string) => void
}

export function Search({ onSearch }: SearchProps) {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-[#888888]" />
      <Input
        className="pl-10 bg-[#1A1A1A] border-[#333333] text-[#E0E0E0] placeholder:text-[#888888] focus-visible:ring-[#00FFFF]/50 transition-all duration-300"
        placeholder="Search items, collections, and accounts"
        type="search"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}


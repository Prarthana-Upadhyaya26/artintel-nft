"use client"

import { Button } from "@/components/ui/button"

const categories = ["All", "Art", "Photography", "Sculptures"]

interface CategoriesProps {
  onCategorySelect: (category: string) => void
  selectedCategory: string
}

export function Categories({ onCategorySelect, selectedCategory }: CategoriesProps) {
  return (
    <div className="flex gap-2 overflow-x-auto py-6 scrollbar-hide">
      {categories.map((category) => (
        <Button 
          key={category} 
          variant="outline" 
          className={`whitespace-nowrap border-[#333333] text-[#00FFFF] hover:bg-[#00FFFF]/10 transition-all duration-300 ${
            selectedCategory === category ? 'bg-[#00FFFF]/10' : ''
          }`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}


'use client'

import { useState } from 'react'
import { Filter, Search } from 'lucide-react'
import { CreatePostModal } from '@/components/create-post-modal'
import { PostCard } from '@/components/post'
import { Sidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Post } from '@/types/post'

// Sample initial posts data
const initialPosts: Post[] = [
  {
    id: 1,
    author: "Sarah Chen",
    type: "Gallery Owner",
    title: "New Exhibition Opening - Modern Abstracts",
    content: "Excited to announce our new exhibition featuring emerging artists in the abstract space. Opening night is next Friday!",
    likes: 45,
    comments: 12,
    image: "/placeholder.svg?height=300&width=400",
    timestamp: "2025-01-07T10:00:00Z"
  },
  {
    id: 2,
    author: "Marcus Rivera",
    type: "Artist",
    title: "Looking for Gallery Representation",
    content: "Contemporary sculptor specializing in sustainable materials. Portfolio available upon request.",
    likes: 28,
    comments: 8,
    image: "/placeholder.svg?height=300&width=400",
    timestamp: "2025-01-07T09:30:00Z"
  }
]

export default function ArtCommunityPage() {
  const [activeTab, setActiveTab] = useState('feed')
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [posts, setPosts] = useState<Post[]>(initialPosts)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-4">
          <h1 className="text-4xl font-bold mb-4">ArtConnect Community</h1>
          
          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts, events, or members..."
                className="pl-9"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          {/* Navigation Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              {['feed', 'events', 'galleries', 'artists'].map((tab) => (
                <TabsTrigger key={tab} value={tab} className="capitalize">
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Feed and Posts */}
          <div className="space-y-6 md:col-span-2">
            <Button
              size="lg"
              className="w-full text-lg"
              onClick={() => setShowCreatePost(true)}
            >
              Create New Post
            </Button>

            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="hidden md:block">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      <CreatePostModal 
        open={showCreatePost}
        onOpenChange={setShowCreatePost}
      />
    </div>
  )
}


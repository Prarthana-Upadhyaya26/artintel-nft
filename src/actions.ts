'use server'

import { Post } from '@/types/post'

export async function createPost(formData: FormData): Promise<Post> {
  // In a real app, you'd upload the image to a storage service
  // and save the post to a database
  
  const post: Post = {
    id: Date.now(),
    author: "Current User",
    type: "Art Enthusiast",
    title: formData.get('title') as string,
    content: formData.get('content') as string,
    image: "/placeholder.svg?height=300&width=400",
    likes: 0,
    comments: 0,
    timestamp: new Date().toISOString()
  }

  return post
}


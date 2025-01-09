export interface Post {
  id: number
  author: string
  type: string
  title: string
  content: string
  likes: number
  comments: number
  image: string
  timestamp: string
}

export interface NewPost {
  title: string
  content: string
  image: File | null
  imagePreview: string | null
}


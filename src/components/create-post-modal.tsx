'use client'

import { useState } from 'react'
import { Image, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { createPost } from '@/app/actions'
import { NewPost } from '@/types/post'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface CreatePostModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreatePostModal({ open, onOpenChange }: CreatePostModalProps) {
  const router = useRouter()
  const [newPost, setNewPost] = useState<NewPost>({
    title: '',
    content: '',
    image: null,
    imagePreview: null
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setNewPost({
        ...newPost,
        image: file,
        imagePreview: URL.createObjectURL(file)
      })
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    await createPost(formData)
    
    setNewPost({ title: '', content: '', image: null, imagePreview: null })
    onOpenChange(false)
    router.refresh()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Title</label>
            <Input
              name="title"
              value={newPost.title}
              onChange={(e) => setNewPost({...newPost, title: e.target.value})}
              required
              placeholder="Enter your post title"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Content</label>
            <Textarea
              name="content"
              value={newPost.content}
              onChange={(e) => setNewPost({...newPost, content: e.target.value})}
              className="h-32 resize-none"
              required
              placeholder="Share your thoughts..."
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Image</label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer">
                <Button type="button" variant="outline">
                  <Image className="mr-2 h-4 w-4" />
                  Upload Image
                </Button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              {newPost.imagePreview && (
                <div className="relative">
                  <img
                    src={newPost.imagePreview}
                    alt="Preview"
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white p-1 shadow"
                    onClick={() => setNewPost({...newPost, image: null, imagePreview: null})}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              Post
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}


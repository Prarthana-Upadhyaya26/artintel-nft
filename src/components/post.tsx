import { Heart, MessageSquare, Share2 } from 'lucide-react'
import { Post } from '@/types/post'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface PostProps {
  post: Post
}

export function PostCard({ post }: PostProps) {
  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{post.title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.type}</span>
              <span>•</span>
              <span>{formatTimestamp(post.timestamp)}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <img
          src={post.image}
          alt="Post"
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="mb-4">{post.content}</p>
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
            <Heart className="w-5 h-5 mr-1" />
            {post.likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
            <MessageSquare className="w-5 h-5 mr-1" />
            {post.comments}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
            <Share2 className="w-5 h-5 mr-1" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}


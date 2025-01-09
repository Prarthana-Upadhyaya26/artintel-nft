import { Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Sidebar() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <p className="font-medium">Modern Art Exhibition</p>
                <p className="text-sm text-muted-foreground">Jan 15, 2024</p>
              </div>
              <Button variant="outline" size="sm">RSVP</Button>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="font-medium">Artist Workshop</p>
                <p className="text-sm text-muted-foreground">Jan 20, 2024</p>
              </div>
              <Button variant="outline" size="sm">RSVP</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Community Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p>🎨 2,456 Artists</p>
            <p>🏛️ 342 Galleries</p>
            <p>💼 189 Dealers</p>
            <p>👥 5,678 Art Enthusiasts</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


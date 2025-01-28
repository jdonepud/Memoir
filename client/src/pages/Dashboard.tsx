import { useEffect, useState } from "react"
import { format } from "date-fns"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, Pencil, Trash2 } from "lucide-react"
import { getJournals, deleteJournal } from "@/api/journals"
import { useToast } from "@/hooks/useToast"

type Journal = {
  _id: string
  title: string
  content: string
  mood: string
  images: string[]
  createdAt: string
}

export function Dashboard() {
  const [journals, setJournals] = useState<Journal[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    loadJournals()
  }, [])

  const loadJournals = async () => {
    try {
      const response = await getJournals()
      setJournals(response.journals)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteJournal(id)
      setJournals(journals.filter(journal => journal._id !== id))
      toast({
        title: "Success",
        description: "Journal entry deleted successfully",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      })
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Journal Entries</h1>
        <Button asChild>
          <Link to="/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Entry
          </Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {journals.map((journal) => (
          <Card key={journal._id} className="overflow-hidden transition-all hover:shadow-lg">
            {journal.images[0] && (
              <img
                src={journal.images[0]}
                alt=""
                className="h-48 w-full object-cover"
              />
            )}
            <CardHeader>
              <CardTitle>{journal.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {format(new Date(journal.createdAt), "MMMM d, yyyy")}
              </p>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{journal.content}</p>
              <div className="mt-4 flex justify-end space-x-2">
                <Button size="sm" variant="ghost">
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDelete(journal._id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
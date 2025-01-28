import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { createJournal } from "@/api/journals"
import { useToast } from "@/hooks/useToast"
import { SaveAll } from "lucide-react"

type JournalForm = {
  title: string
  content: string
  mood: string
  images: string[]
}

export function NewJournal() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<JournalForm>()

  const onSubmit = async (data: JournalForm) => {
    try {
      setLoading(true)
      await createJournal(data)
      toast({
        title: "Success",
        description: "Journal entry created successfully",
      })
      navigate("/")
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

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>New Journal Entry</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Give your entry a title"
                {...register("title", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Write your thoughts..."
                className="min-h-[200px]"
                {...register("content", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mood">Mood</Label>
              <Input
                id="mood"
                placeholder="How are you feeling?"
                {...register("mood", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="images">Image URL</Label>
              <Input
                id="images"
                placeholder="Add an image URL"
                {...register("images")}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                "Saving..."
              ) : (
                <>
                  <SaveAll className="mr-2 h-4 w-4" />
                  Save Entry
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
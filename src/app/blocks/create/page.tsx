/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mcoZ7N5u85l
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-center">Create Note</h1>
          <p className="mt-2 text-center text-muted-foreground">Add a new note to your collection.</p>
        </div>
        <form className="space-y-6">
          <div>
            <Label htmlFor="title">Note Title</Label>
            <Input id="title" type="text" placeholder="Enter a title for your note" className="mt-1 block w-full" />
          </div>
          <div>
            <Label htmlFor="content">Note Contents</Label>
            <Textarea
              id="content"
              rows={5}
              placeholder="Write the contents of your note here..."
              className="mt-1 block w-full"
            />
          </div>
          <div className="flex justify-between">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit">Create Note</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
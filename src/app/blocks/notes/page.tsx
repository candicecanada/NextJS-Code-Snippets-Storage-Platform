/**
 * v0 by Vercel.
 * @see https://v0.dev/t/54Hksa6fTtt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function Component() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Shopping List",
      content: "Milk, eggs, bread, apples",
    },
    {
      id: 2,
      title: "Weekend Plans",
      content: "Saturday: Hike in the park, Sunday: Dinner with friends",
    },
    {
      id: 3,
      title: "Coding Project Ideas",
      content: "Build a to-do app, create a weather dashboard, design a portfolio website",
    },
  ])
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-center">All Notes</h1>
          <p className="mt-2 text-center text-muted-foreground">View and manage your notes.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <Card key={note.id}>
              <CardHeader>
                <CardTitle>{note.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-2">{note.content}</p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-primary hover:underline" prefetch={false}>
                  View Note
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Create New Note
          </Link>
        </div>
      </div>
    </div>
  )
}
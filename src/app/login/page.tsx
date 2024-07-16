/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lmM4NHk2SJa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Welcome</CardTitle>
          </div>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username or Email</Label>
            <Input id="username" type="text" placeholder="Enter your username or email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" required />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember-me" />
              <Label htmlFor="remember-me" className="text-sm">
                Remember me
              </Label>
            </div>
            <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
              Forgot Password?
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-between gap-2">
          <Button type="submit" className="w-full">
            Sign In
          </Button>
          <div className="text-sm text-primary hover:underline">
            <Link href="#" prefetch={false}>
              Register
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
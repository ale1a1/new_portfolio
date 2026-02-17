"use client"

import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Send } from "lucide-react"

interface EmailSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EmailSheet({ open, onOpenChange }: EmailSheetProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Portfolio Contact from ${formData.firstName} ${formData.lastName}`
    const body = `${formData.message}\n\nFrom: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}`
    window.open(
      `mailto:ale1a184@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    )
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md bg-card border-border overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-mono text-primary">
            Email Me
          </SheetTitle>
          <SheetDescription className="text-muted-foreground">
            Send me a message and I will get back to you
          </SheetDescription>
        </SheetHeader>
        <Separator className="bg-border" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-4 pb-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="firstName" className="text-xs uppercase tracking-wider text-muted-foreground">
                First name
              </Label>
              <Input
                id="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="lastName" className="text-xs uppercase tracking-wider text-muted-foreground">
                Last name
              </Label>
              <Input
                id="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Write a message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="min-h-[160px] bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
          >
            <Send className="size-4" />
            Send Message
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  )
}

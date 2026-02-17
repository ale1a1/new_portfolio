"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { MapPin, Navigation, Phone, Mail } from "lucide-react"

interface ContactDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const contactInfo = [
  {
    icon: MapPin,
    label: "City",
    value: "Liverpool",
  },
  {
    icon: Navigation,
    label: "Street",
    value: "Front End Developers St.",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+447481184619",
    href: "tel:+447481184619",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ale1a184@gmail.com",
    href: "mailto:ale1a184@gmail.com",
  },
]

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono text-primary">
            Contact
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Get in touch with me
          </DialogDescription>
        </DialogHeader>
        <Separator className="bg-border" />
        <div className="flex flex-col gap-4 py-2">
          {contactInfo.map((item) => (
            <div key={item.label} className="flex items-center gap-4 group">
              <div className="flex items-center justify-center size-10 rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm text-foreground">{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

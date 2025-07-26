import React from 'react'
import { Linkedin, Mail, Instagram } from 'lucide-react'

export const socialLinksData = [
  { 
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/david-hanegraaf/",
    label: "LinkedIn",
    name: "LinkedIn"
  },
  { 
    Icon: Mail,
    href: "mailto:David.hanegraaf@hec.ca",
    label: "Email",
    name: "Email"
  },
  { 
    Icon: Instagram,
    href: "https://www.instagram.com/dave_hanegraaf999/profilecard/?igsh=NGxtMGYxYnBmZTNy",
    label: "Instagram",
    name: "Instagram"
  }
]

export const getSocialLinks = (iconClassName: string = "w-6 h-6") => {
  return socialLinksData.map(link => ({
    ...link,
    icon: <link.Icon className={iconClassName} />
  }))
}
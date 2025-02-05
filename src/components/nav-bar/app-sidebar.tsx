import { UserPen, FileText, Mountain, Smile, PersonStanding } from "lucide-react"
import { ModeToggle } from "@/components/nav-bar/theme-mode"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Mountain,
  },
  {
    title: "About",
    url: "/about",
    icon: PersonStanding,
  },
  {
    title: "Resume",
    url: "/resume",
    icon: FileText,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: UserPen,
  },
  {
    title: "Fun",
    url: "/fun",
    icon: Smile,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>Connor McColl</SidebarHeader>
      <SidebarContent>

        <SidebarGroup>
          {/* <SidebarGroupLabel>Connor McColl</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <ModeToggle />
      </SidebarContent>
    </Sidebar>
  )
}
import { UserPen, FileText, Mountain, Smile, PersonStanding } from "lucide-react"
import { ModeToggle } from "@/components/nav-bar/theme-mode"
import { Button } from "@/components/ui/button"

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
import Contact from "@/app/contact/page"

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
  // {
  //   title: "Fun",
  //   url: "/fun",
  //   icon: Smile,
  // }
]

export function AppSidebar() {
  return (
    <Sidebar className="flex flex-col h-screen ">
      <SidebarHeader><h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
        Connor McColl
      </h3>
      </SidebarHeader>
      <SidebarContent className="flex-grow">

        <SidebarGroup>
          {/* <SidebarGroupLabel>Connor McColl</SidebarGroupLabel> */}
          <SidebarGroupContent >
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center space-x-2">
                      <item.icon />
                      <h2 className="scroll-m-20 border-b text-xl font-semibold tracking-tight first:mt-0">
                        {item.title}
                      </h2>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>


        </SidebarGroup>

      </SidebarContent>
      <div className="mt-auto p-2">
        <span className="p-1"><ModeToggle /></span>
        <span className="p-1"><Contact /></span>
      </div>

    </Sidebar>
  )
}
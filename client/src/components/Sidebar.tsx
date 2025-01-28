import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, PlusCircle, Calendar, Settings } from "lucide-react"

export function Sidebar() {
  const location = useLocation()

  const routes = [
    {
      path: "/",
      icon: Home,
      label: "Dashboard",
    },
    {
      path: "/new",
      icon: PlusCircle,
      label: "New Entry",
    },
    {
      path: "/calendar",
      icon: Calendar,
      label: "Calendar",
    },
    {
      path: "/settings",
      icon: Settings,
      label: "Settings",
    },
  ]

  return (
    <div className="hidden border-r bg-background/60 backdrop-blur-lg md:block w-64">
      <ScrollArea className="h-full py-6">
        <div className="px-3 py-2">
          <h2 className="mb-6 px-4 text-lg font-semibold">Memoir</h2>
          <div className="space-y-1">
            {routes.map((route) => (
              <Button
                key={route.path}
                variant={location.pathname === route.path ? "secondary" : "ghost"}
                className={cn("w-full justify-start")}
                asChild
              >
                <Link to={route.path}>
                  <route.icon className="mr-2 h-4 w-4" />
                  {route.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
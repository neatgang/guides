import Link from "next/link"

import { ArrowLeft } from "lucide-react"
import { SidebarRoutes } from "./SidebarRoutes"

export const GroupToolsDashboardSidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-6">
        <Link href="/">
            {/* <Logo /> */}
            <p>Group Tools</p>
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  )
}
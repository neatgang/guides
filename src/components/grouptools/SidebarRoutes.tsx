"use client"

import { BarChart, Compass, Layout, List } from "lucide-react"

import { usePathname } from "next/navigation";
import { SidebarItem } from "./SidebarItem";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/grouptools"
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/grouptools/search"
    }
];

const teacherRoutes = [
    {
        icon: List,
        label: "Courses",
        href: "/academy/dashboard/teacher/courses"
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/academy/dashboard/teacher/analytics"
    }
]

export const SidebarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.includes("/courses/teacher");

    const routes = isTeacherPage ? teacherRoutes : guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem 
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}
'use client'

import { Collapsible, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'

export function NavMain({
    title,
    items,
}: {
    title: string
    items: {
        name: string
        url: string
        icon: any
    }[]
}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="font-bold">{title}</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                            tooltip={item.name}
                            asChild
                            className="py-2.5 h-fit"
                        >
                            <a href={item.url}>
                                {item.icon && <item.icon />}
                                <span className="font-medium">{item.name}</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}

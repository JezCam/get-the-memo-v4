import { Trophy, Zap } from 'lucide-react'
import React from 'react'
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '../ui/sidebar'

export default function Streak() {
    return (
        <SidebarGroup className="p-0 mb-6 ">
            <SidebarMenu className="gap-3 group-data-[collapsible=icon]:gap-2">
                <SidebarGroupLabel className="font-bold px-0 h-fit group-data-[collapsible=icon]:pointer-events-none">
                    Daily streak
                </SidebarGroupLabel>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        className="group-data-[collapsible=icon]:!py-1 group-data-[collapsible=icon]:!h-fit"
                        tooltip="Daily streak"
                        asChild
                    >
                        <a
                            href="/stats"
                            className="flex bg-background rounded-lg p-1.5 pr-0 w-full h-full group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:gap-1 items-center"
                        >
                            <div className="bg-yellow-400/10 flex items-center justify-center h-full aspect-square w-auto rounded-sm group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6">
                                <Zap className="w-5 h-5 text-yellow-400 group-data-[collapsible=icon]:h-4 group-data-[collapsible=icon]:w-4" />
                            </div>
                            <div className="flex flex-col w-full items-center py-1">
                                <span className="font-semibold text-2xl leading-6 group-data-[collapsible=icon]:text-xl group-data-[collapsible=icon]:leading-4 group-data-[collapsible=icon]:font-medium">
                                    54
                                </span>
                                <span className="text-foreground/70 text-sm group-data-[collapsible=icon]:hidden">
                                    Days
                                </span>
                            </div>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarGroupLabel className="font-bold px-0 h-fit group-data-[collapsible=icon]:pointer-events-none">
                    Best streak
                </SidebarGroupLabel>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        className="group-data-[collapsible=icon]:!py-1 group-data-[collapsible=icon]:!h-fit"
                        tooltip="Best streak"
                        asChild
                    >
                        <a
                            href="/stats"
                            className="flex bg-background rounded-lg p-1.5 pr-0 w-full h-full group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:gap-1 items-center"
                        >
                            <div className="bg-orange-400/10 flex items-center justify-center h-full aspect-square w-auto rounded-sm group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6">
                                <Trophy className="w-5 h-5 text-orange-400 group-data-[collapsible=icon]:h-4 group-data-[collapsible=icon]:w-4" />
                            </div>
                            <div className="flex flex-col w-full items-center py-1">
                                <span className="font-semibold text-2xl leading-6 group-data-[collapsible=icon]:text-xl group-data-[collapsible=icon]:leading-4 group-data-[collapsible=icon]:font-medium">
                                    54
                                </span>
                                <span className="text-foreground/70 text-sm group-data-[collapsible=icon]:hidden">
                                    Days
                                </span>
                            </div>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
    )
}

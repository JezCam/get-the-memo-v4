'use client'

import * as React from 'react'
import { Box, ChartNoAxesColumn, Mail } from 'lucide-react'
import {
    DiscordLogoIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon,
} from '@radix-ui/react-icons'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from '@/components/ui/sidebar'
import { NavMain } from './nav'
import { LogoLinks } from './logo-links'
import { NavUser } from './nav-user'
import Streak from './streak'

// This is sample data.
const data = {
    user: {
        name: 'Jeremy Cameron',
        email: 'jeremy@cameron.com',
        avatar: '/avatars/shadcn.jpg',
    },
    links: [
        {
            name: 'GitHub',
            logo: GitHubLogoIcon,
        },
        {
            name: 'Twitter',
            logo: TwitterLogoIcon,
        },
        {
            name: 'LinkedIn',
            logo: LinkedInLogoIcon,
        },
        {
            name: 'Email me',
            logo: Mail,
        },
    ],
    practice: {
        title: 'Practice',
        items: [
            {
                name: 'Memo',
                url: '/memo',
                icon: Box,
            },
            {
                name: 'Your Stats',
                url: '/stats',
                icon: ChartNoAxesColumn,
            },
        ],
    },
    community: {
        title: 'Community',
        items: [
            {
                name: 'Discord',
                url: '#',
                icon: DiscordLogoIcon,
            },
        ],
    },
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" collapsible="icon" {...props}>
            <SidebarHeader>
                <LogoLinks links={data.links} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain
                    title={data.practice.title}
                    items={data.practice.items}
                />
                <NavMain
                    title={data.community.title}
                    items={data.community.items}
                />
            </SidebarContent>
            <SidebarFooter className="overflow-hidden">
                <Streak />
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}

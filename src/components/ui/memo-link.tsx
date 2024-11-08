import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function MemoLink(props: { text: string; href: string }) {
    return (
        <a
            href={props.href}
            className="text-xs font-medium flex items-center gap-1 group hover:cursor-pointer hover:opacity-60"
        >
            {props.text}
            <ArrowRight className="w-4 h-4 transition-all group-hover:translate-x-1" />
        </a>
    )
}

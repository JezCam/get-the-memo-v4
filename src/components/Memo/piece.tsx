import React from 'react'
import { useTheme } from 'next-themes'
import EdgeDark from './pieces/edge-dark'
import EdgeLight from './pieces/edge-light'
import CornerDark from './pieces/corner-dark'
import CornerLight from './pieces/corner-light'

export default function Piece(props: { type: string; colours: string[] }) {
    const { resolvedTheme } = useTheme()

    switch (props.type) {
        case 'corner':
            return resolvedTheme == 'light' ? (
                <div className="h-fit xl:h-full flex">
                    <CornerLight
                        a={props.colours[0]}
                        b={props.colours[1]}
                        c={props.colours[2]}
                    />
                </div>
            ) : (
                <div className="h-fit xl:h-full flex">
                    <CornerDark
                        a={props.colours[0]}
                        b={props.colours[1]}
                        c={props.colours[2]}
                    />
                </div>
            )

        case 'edge':
            return resolvedTheme == 'light' ? (
                <div className="h-full flex">
                    <EdgeLight a={props.colours[0]} b={props.colours[1]} />
                </div>
            ) : (
                <div className="h-full flex">
                    <EdgeDark a={props.colours[0]} b={props.colours[1]} />
                </div>
            )
    }
}

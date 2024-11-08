export type StickerType = {
    colour: number
    letter: number
}

export type PieceType = {
    type: string
    stickers: StickerType[]
}

export enum Selection {
    Corners,
    Edges,
    Both,
}

export enum ChallengeState {
    Stopped,
    Countdown,
    Challenge,
    Finished,
}

export const placeholderCornerPiece = {
    type: 'corner',
    stickers: [
        { colour: 5, letter: 0 },
        { colour: 5, letter: 0 },
        { colour: 5, letter: 0 },
    ],
}
export const placeholderEdgePiece = {
    type: 'edge',
    stickers: [
        { colour: 5, letter: 0 },
        { colour: 5, letter: 0 },
    ],
}

export const corners: PieceType[] = [
    {
        // Red, Blue, Yellow
        type: 'corner',
        stickers: [
            { colour: 0, letter: 28 },
            { colour: 4, letter: 38 },
            { colour: 2, letter: 44 },
        ],
    },
    {
        // Red, Yellow, Green
        type: 'corner',
        stickers: [
            { colour: 0, letter: 30 },
            { colour: 2, letter: 42 },
            { colour: 3, letter: 20 },
        ],
    },
    {
        // Orange, Yellow, Blue
        type: 'corner',
        stickers: [
            { colour: 1, letter: 14 },
            { colour: 2, letter: 46 },
            { colour: 4, letter: 36 },
        ],
    },
    {
        // Orange, Green, Yellow
        type: 'corner',
        stickers: [
            { colour: 1, letter: 12 },
            { colour: 3, letter: 22 },
            { colour: 2, letter: 40 },
        ],
    },
    {
        // Red, White, Blue
        type: 'corner',
        stickers: [
            { colour: 0, letter: 26 },
            { colour: 5, letter: 2 },
            { colour: 4, letter: 32 },
        ],
    },
    {
        // Red, Green, White
        type: 'corner',
        stickers: [
            { colour: 0, letter: 24 },
            { colour: 3, letter: 18 },
            { colour: 5, letter: 4 },
        ],
    },
    {
        // Orange, Blue, White
        type: 'corner',
        stickers: [
            { colour: 1, letter: 8 },
            { colour: 4, letter: 34 },
            { colour: 5, letter: 0 },
        ],
    },
    {
        // Orange, White, Green
        type: 'corner',
        stickers: [
            { colour: 1, letter: 10 },
            { colour: 5, letter: 6 },
            { colour: 3, letter: 16 },
        ],
    },
]

export const edges: PieceType[] = [
    {
        // Red, Yellow
        type: 'edge',
        stickers: [
            { colour: 0, letter: 29 },
            { colour: 2, letter: 43 },
        ],
    },
    {
        // Blue, Yellow
        type: 'edge',
        stickers: [
            { colour: 4, letter: 37 },
            { colour: 2, letter: 45 },
        ],
    },
    {
        // Orange, Yellow
        type: 'edge',
        stickers: [
            { colour: 1, letter: 13 },
            { colour: 2, letter: 47 },
        ],
    },
    {
        // Green, Yellow
        type: 'edge',
        stickers: [
            { colour: 3, letter: 21 },
            { colour: 2, letter: 41 },
        ],
    },
    {
        // Red, Blue
        type: 'edge',
        stickers: [
            { colour: 0, letter: 27 },
            { colour: 4, letter: 39 },
        ],
    },
    {
        // Orange, Blue
        type: 'edge',
        stickers: [
            { colour: 1, letter: 15 },
            { colour: 4, letter: 35 },
        ],
    },
    {
        // Red, Green
        type: 'edge',
        stickers: [
            { colour: 0, letter: 31 },
            { colour: 3, letter: 19 },
        ],
    },
    {
        // Orange, Green
        type: 'edge',
        stickers: [
            { colour: 1, letter: 11 },
            { colour: 3, letter: 23 },
        ],
    },
    {
        // Red, White
        type: 'edge',
        stickers: [
            { colour: 0, letter: 25 },
            { colour: 5, letter: 3 },
        ],
    },
    {
        // Orange, White
        type: 'edge',
        stickers: [
            { colour: 1, letter: 9 },
            { colour: 5, letter: 7 },
        ],
    },
    {
        // Blue, White
        type: 'edge',
        stickers: [
            { colour: 4, letter: 33 },
            { colour: 5, letter: 1 },
        ],
    },
    {
        // Green, White
        type: 'edge',
        stickers: [
            { colour: 3, letter: 17 },
            { colour: 5, letter: 5 },
        ],
    },
]
export const defaultColours: string[] = [
    '#EF402F',
    '#F9A12A',
    '#E5E537',
    '#70C059',
    '#077CFC',
    '#FFFFFF',
]

export const defaultLetters: string[] = [
    'A',
    'A',
    'B',
    'B',
    'C',
    'C',
    'D',
    'D',
    'E',
    'E',
    'F',
    'F',
    'G',
    'G',
    'H',
    'H',
    'I',
    'I',
    'J',
    'J',
    'K',
    'K',
    'L',
    'L',
    'M',
    'M',
    'N',
    'N',
    'O',
    'O',
    'P',
    'P',
    'Q',
    'Q',
    'R',
    'R',
    'S',
    'S',
    'T',
    'T',
    'U',
    'U',
    'V',
    'V',
    'W',
    'W',
    'X',
    'X',
]

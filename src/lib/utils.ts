import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getRandom<T>(...args: T[][]): T {
    const flat = args.flat()
    return flat[Math.floor(Math.random() * flat.length)]
}

export function titleCase(str: string) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return word.replace(word[0], word[0].toUpperCase())
        })
        .join(' ')
}

function rotateArray(arr: any[], rotateBy: number) {
    const n = arr.length
    rotateBy %= n

    return arr.slice(rotateBy).concat(arr.slice(0, rotateBy))
}

export function randomRotate(arr: any[]) {
    const random = Math.floor(Math.random() * arr.length)
    return rotateArray(arr, random)
}

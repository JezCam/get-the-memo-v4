import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function titleCase(word: string) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
}

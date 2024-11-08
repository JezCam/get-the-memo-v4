import React, { useEffect, useState } from 'react'
import { Card } from '../ui/card'
import { Settings, RefreshCw } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import MemoLink from '../ui/memo-link'
import { Input } from '../ui/input'

import { Selection } from '@/lib/definitions'

export default function Configure(props: {
    onUpdateSelection: (selection: string) => void
    selection: Selection
    onUpdateLetters: (letters: string[]) => void
    letters: string[]
    onUpdateColours: (letters: string[]) => void
    colours: string[]
    onResetLetters: () => void
    onResetColours: () => void
}) {
    const [selection, setSelection] = useState<Selection>(props.selection)
    const [colours, setColours] = useState<string[]>(props.colours)
    const [letters, setLetters] = useState<string[]>(props.letters)

    const [colour, setColour] = useState<number>(0)

    const letterRemap: number[] = [0, 1, 2, 7, -1, 3, 6, 5, 4]
    const colourRemap: number[] = [3, 1, 5, 2, 4, 0]
    const bordersRemap: number[][] = [
        [5, 2, 4, 3],
        [5, 2, 3, 4],
        [3, 4, 0, 1],
        [5, 2, 0, 1],
        [5, 2, 1, 0],
        [4, 3, 0, 1],
    ]

    const changeColour = (index: number) => {
        setColour(index)
    }

    const updateLetters = (index: number, letter: string) => {
        // update letters
        const _letters = [...letters]
        _letters[colourRemap[colour] * 8 + letterRemap[index]] = letter
        props.onUpdateLetters(_letters)
    }

    useEffect(() => {
        setLetters(props.letters)
        setColours(props.colours)
        setSelection(props.selection)
    }, [props.letters, props.colours, props.selection])

    return (
        <Card className="p-3 bg-card flex flex-col gap-6 h-full">
            <div className="flex gap-1.5 items-center">
                <Settings className="text-foreground w-4 h-4" />
                <h4>Configure Memo </h4>
            </div>
            <div className="flex flex-col gap-3">
                <p className="font-bold">Piece Selection</p>
                <RadioGroup
                    onValueChange={(value) => {
                        props.onUpdateSelection(value)
                    }}
                    className="flex bg-primary/10 rounded-sm p-3 gap-1.5"
                    defaultValue="both"
                >
                    <Label
                        htmlFor="r1"
                        className={`hover:cursor-pointer bg-primary/10 rounded-sm py-2 flex-1 flex justify-center border-[1px] ${
                            selection === Selection.Corners && 'border-primary'
                        }`}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="corners" id="r1" />
                            <h4>Corners</h4>
                        </div>
                    </Label>
                    <Label
                        htmlFor="r2"
                        className={`hover:cursor-pointer bg-primary/10 rounded-sm py-2 flex-1 flex justify-center border-[1px] ${
                            selection === Selection.Edges &&
                            'border-primary border-[1px]'
                        }`}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                className="child"
                                value="edges"
                                id="r2"
                            />
                            <h4>Edges</h4>
                        </div>
                    </Label>
                    <Label
                        htmlFor="r3"
                        className={`hover:cursor-pointer bg-primary/10 rounded-sm py-2 flex-1 flex justify-center border-[1px] ${
                            selection === Selection.Both &&
                            'border-primary border-[1px]'
                        }`}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="both" id="r3" />
                            <h4>Both</h4>
                        </div>
                    </Label>
                </RadioGroup>
            </div>
            {/* Colour and Letter Scheme */}
            <div className="flex flex-col gap-3 h-fit">
                <div className="flex justify-between">
                    <p className="font-bold">Colour and Letter Scheme</p>
                    {/* <MemoLink text="View Trending Colours" href="/colours" /> */}
                </div>
                <div className="flex bg-primary/10 rounded-sm p-3 gap-3 h-fit">
                    {[0, 0, 0, 0, 0, 0].map((_, index) => (
                        <div
                            onClick={() => changeColour(index)}
                            style={{ background: props.colours[index] }}
                            className="border-primary border-2 w-9 h-9 hover:opacity-60 rounded-sm hover:cursor-pointer"
                        />
                    ))}

                    <div className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 w-9 h-9 hover:bg-primary/20 rounded-sm hover:cursor-pointer">
                        <RefreshCw className="w-4 h-4 text-primary" />
                    </div>
                </div>
                <div className="flex bg-primary/10 rounded-sm p-8 gap-3 w-fit h-fit relative">
                    {/* Lines */}
                    <div className="absolute top-3 left-0 w-full px-8 h-2">
                        <div
                            style={{
                                backgroundColor:
                                    colours[bordersRemap[colour][0]],
                            }}
                            className="rounded-full w-full h-full"
                        ></div>
                    </div>
                    <div className="absolute bottom-3 left-0 w-full px-8 h-2">
                        <div
                            style={{
                                backgroundColor:
                                    colours[bordersRemap[colour][1]],
                            }}
                            className="rounded-full w-full h-full"
                        ></div>
                    </div>
                    <div className="absolute top-0 right-3 h-full py-8 w-2">
                        <div
                            style={{
                                backgroundColor:
                                    colours[bordersRemap[colour][2]],
                            }}
                            className="rounded-full w-full h-full"
                        ></div>
                    </div>
                    <div className="absolute top-0 left-3 h-full py-8 w-2">
                        <div
                            style={{
                                backgroundColor:
                                    colours[bordersRemap[colour][3]],
                            }}
                            className="rounded-full w-full h-full"
                        ></div>
                    </div>
                    {/* Squares */}
                    <div className="grid grid-cols-3 gap-3 w-fit h-fit">
                        {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, index) =>
                            index != 4 ? (
                                <div
                                    style={{
                                        backgroundColor: props.colours[colour],
                                        color: colour === 5 ? 'black' : 'white',
                                    }}
                                    className="border-primary border-2 w-fit flex items-center justify-center p-6 rounded-sm"
                                >
                                    <Input
                                        value={
                                            letters[
                                                colourRemap[colour] * 8 +
                                                    letterRemap[index]
                                            ]
                                        }
                                        onChange={(e) =>
                                            updateLetters(
                                                index,
                                                e.target.value.slice(0, 1)
                                            )
                                        }
                                        className="w-10 h-full text-2xl text-center text-foreground"
                                    />
                                </div>
                            ) : (
                                <div
                                    style={{
                                        backgroundColor: props.colours[colour],
                                        color: colour === 5 ? 'black' : 'white',
                                    }}
                                    className="border-primary border-2 w-fit h-fit flex items-center justify-center p-6 rounded-sm"
                                >
                                    <div
                                        onClick={props.onResetLetters}
                                        className={
                                            colour === 5
                                                ? 'bg-gradient-to-b from-black/10 to-black/0 flex items-center justify-center border-black/50 border-2 w-10 h-10 hover:bg-black/20 rounded-sm hover:cursor-pointer'
                                                : 'bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 w-10 h-10 hover:bg-primary/20 rounded-sm hover:cursor-pointer'
                                        }
                                    >
                                        <RefreshCw
                                            className={
                                                colour === 5
                                                    ? 'w-6 h-6 text-black'
                                                    : 'w-6 h-6 text-primary'
                                            }
                                        />
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </Card>
    )
}

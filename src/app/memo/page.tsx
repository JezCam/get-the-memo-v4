'use client'

import React, { useState } from 'react'

import {
    defaultColours,
    defaultLetters,
    Selection,
    ChallengeState,
} from '../../lib/definitions'
import Play from '../../components/Memo/play'
import Configure from '../../components/Memo/configure'
import TimeChallenges from '../../components/Memo/time-challenges'
import Stats from '../../components/Memo/stats'

export default function Board() {
    const [selection, setSelection] = useState<Selection>(Selection.Both)
    const [colours, setColours] = useState<string[]>(defaultColours)
    const [letters, setLetters] = useState<string[]>(defaultLetters)
    const [correct, setCorrect] = useState<number>(0)
    const [incorrect, setIncorrect] = useState<number>(0)
    const [challengeState, setChallengeState] = useState<ChallengeState>(
        ChallengeState.Countdown
    )

    const [timeChallengeScore, setTimeChallengeScore] = useState<number>(0)
    const [timeChallengeBests, setTimeChallengeBests] = useState<string[]>([
        '0',
        '0',
        'N/A',
        '0',
    ])

    const handleUpdateChallengeState = (newChallengeState: ChallengeState) => {
        if (newChallengeState === ChallengeState.Countdown) {
            setTimeChallengeScore(0)
        }
        setChallengeState(newChallengeState)
    }

    const handleUpdateChallengeBest =
        (challengeIndex: number) => (newBest: string) => {
            console.log(newBest)
            setTimeChallengeBests((bests) =>
                bests.map((best, index) =>
                    index === challengeIndex ? newBest : best
                )
            )
        }

    const handleUpdateSelection = (selection: string) => {
        switch (selection) {
            case 'corners':
                setSelection(Selection.Corners)
                break
            case 'edges':
                setSelection(Selection.Edges)
                break
            case 'both':
                setSelection(Selection.Both)
                break
        }
    }

    const handleUpdateLetters = (letters: string[]) => {
        setLetters(letters)
    }

    const handleUpdateColours = (colours: string[]) => {
        setColours(colours)
    }

    const handleCorrect = () => {
        if (challengeState === ChallengeState.Challenge) {
            setTimeChallengeScore(
                (timeChallengeScore) => timeChallengeScore + 1
            )
        }
        setCorrect((correct) => correct + 1)
    }
    const handleIncorrect = () => {
        setIncorrect((incorrect) => incorrect + 1)
    }

    return (
        <div className="h-full flex gap-3 p-4">
            {/* Left */}
            <div className="flex flex-col gap-6 w-full">
                <TimeChallenges
                    score={timeChallengeScore}
                    bests={timeChallengeBests}
                    updateChallengeBest={handleUpdateChallengeBest}
                    updateChallengeState={handleUpdateChallengeState}
                />
                <Play
                    colours={colours}
                    letters={letters}
                    selection={selection}
                    onCorrect={handleCorrect}
                    onIncorrect={handleIncorrect}
                />
            </div>
            {/* Right */}
            <div className="flex flex-col gap-6">
                <Stats correct={correct} incorrect={incorrect} />
                <Configure
                    onUpdateSelection={handleUpdateSelection}
                    selection={selection}
                    onUpdateLetters={handleUpdateLetters}
                    letters={letters}
                    onUpdateColours={handleUpdateColours}
                    colours={colours}
                    onResetLetters={() => setLetters(defaultLetters)}
                    onResetColours={() => setColours(defaultColours)}
                />
            </div>
        </div>
    )
}

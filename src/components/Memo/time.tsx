import React, { useEffect, useState } from 'react'
import { Play, X, RefreshCw } from 'lucide-react'

import { ChallengeState } from '@/lib/definitions'

export default function Time(props: {
    challenge: string
    best: number | string
    direction: number
    time: number
    score: number
    updateChallengeBest: (newBest: string) => void
    updateChallengeState: (challengeState: ChallengeState) => void
}) {
    // state to store time
    const [countdownTime, setCountdownTime] = useState<number>(3)
    const [challengeTime, setChallengeTime] = useState<number>(props.time)
    const [challengeState, setChallengeState] = useState<ChallengeState>(
        ChallengeState.Stopped
    )

    useEffect(() => {
        let countdownInterval: any
        let challengeInterval: any
        if (challengeState === ChallengeState.Countdown) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            countdownInterval = setInterval(
                () =>
                    setCountdownTime((prevTime) => {
                        if (prevTime <= 1) {
                            // start challenge timer
                            props.updateChallengeState(ChallengeState.Challenge)
                            setChallengeState(ChallengeState.Challenge)
                            return 0
                        } else {
                            return prevTime - 1
                        }
                    }),
                1000
            )
        }
        if (challengeState === ChallengeState.Challenge) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            challengeInterval = setInterval(
                () =>
                    setChallengeTime((prevTime) => {
                        if (props.direction === -1 && prevTime <= 0.1) {
                            if (props.score > (props.best as number)) {
                                props.updateChallengeBest(
                                    props.score.toString()
                                )
                            }
                            props.updateChallengeState(ChallengeState.Finished)
                            setChallengeState(ChallengeState.Finished)
                            return 0
                        } else if (
                            props.direction === 1 &&
                            props.score === 10
                        ) {
                            if (
                                props.best === 'N/A' ||
                                challengeTime < (props.best as number)
                            ) {
                                props.updateChallengeBest(
                                    challengeTime.toFixed(1)
                                )
                            }
                            props.updateChallengeState(ChallengeState.Finished)
                            setChallengeState(ChallengeState.Finished)
                            return 0
                        } else {
                            return prevTime + 0.1 * props.direction
                        }
                    }),
                100
            )
        }
        return () => {
            clearInterval(challengeInterval)
            clearInterval(countdownInterval)
        }
    }, [challengeState, countdownTime, challengeTime])

    const onStop = () => {
        props.updateChallengeState(ChallengeState.Stopped)
        setChallengeState(ChallengeState.Stopped)
        resetTimes()
    }

    const onRestart = () => {
        props.updateChallengeState(ChallengeState.Countdown)
        resetTimes()
        onStart()
    }

    // Method to start the timer
    const onStart = () => {
        props.updateChallengeState(ChallengeState.Countdown)
        setChallengeState(ChallengeState.Countdown)
    }

    const resetTimes = () => {
        setCountdownTime(3)
        setChallengeTime(props.time)
    }

    return challengeState === ChallengeState.Stopped ? (
        <div className="flex border-2 bg-primary/10 rounded-sm p-1.5 pr-3 gap-1.5 w-full min-w-fit h-fit">
            <div
                onClick={onRestart}
                className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 h-full aspect-square w-auto hover:bg-primary/20 rounded-sm hover:cursor-pointer"
            >
                <Play className="w-4 h-4 text-primary" />
            </div>

            <div className={'flex w-full justify-center items-center'}>
                <div className="flex-[1] flex flex-col items-center transition-all duration-500">
                    <p>Best</p>
                    <h3 className="leading-6 pb-1">{props.best}</h3>
                </div>
            </div>
        </div>
    ) : (
        <div className="absolute p-3 inset-0 bg-card flex flex-col gap-3">
            {/* Buttons */}
            <div className="flex justify-between items-center">
                <div
                    onClick={onRestart}
                    className="flex items-center justify-center w-11 h-11 border-[1px] rounded-sm hover:bg-primary/10 hover:cursor-pointer"
                >
                    <RefreshCw className="w-4 h-4 text-foreground" />
                </div>
                {props.challenge}
                <div
                    onClick={onStop}
                    className="flex items-center justify-center w-11 h-11 border-[1px] rounded-sm hover:bg-primary/10 hover:cursor-pointer"
                >
                    <X className="w-5 h-5 text-foreground" />
                </div>
            </div>
            {/* Time and Scores */}
            <div className="w-full h-full relative">
                {challengeState === ChallengeState.Countdown && (
                    <div className="flex absolute inset-0 items-center justify-center z-10">
                        <div className="text-6xl font-bold">
                            {countdownTime}
                        </div>
                    </div>
                )}
                <div
                    className={`${
                        challengeState === ChallengeState.Countdown
                            ? 'opacity-30 blur-sm'
                            : ''
                    } flex gap-3 w-full h-full`}
                >
                    {/* Time */}
                    <div className="flex flex-col gap-3 w-full items-center">
                        <p className="font-bold">Time</p>
                        <div className="bg-background flex items-center justify-center w-full h-full rounded-sm text-4xl font-semibold">
                            <div>
                                {props.direction === -1
                                    ? challengeState === ChallengeState.Finished
                                        ? 0
                                        : challengeTime.toFixed(1)
                                    : challengeTime.toFixed(1)}
                            </div>
                        </div>
                    </div>
                    {/* Score */}
                    <div className="flex flex-col gap-3 w-full items-center">
                        <p className="font-bold">Score</p>
                        <div className="bg-background flex items-center justify-center w-full h-full rounded-sm text-4xl font-semibold">
                            <div>{props.score}</div>
                        </div>
                    </div>
                    {/* Best Score */}
                    <div className="flex flex-col gap-3 w-full items-center">
                        <p className="font-bold">
                            {props.direction === -1
                                ? 'Best Score'
                                : 'Best Time'}
                        </p>
                        <div className="bg-background flex items-center justify-center w-full h-full rounded-sm text-4xl font-semibold">
                            <div>{props.best}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

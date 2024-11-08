import React from 'react'
import { Card } from '../ui/card'

import { Timer } from 'lucide-react'
import Time from './time'
import { ChallengeState } from '@/lib/definitions'

export default function TimeChallenges(props: {
    score: number
    bests: (number | string)[]
    updateChallengeBest: (challengeIndex: number) => (newBest: string) => void
    updateChallengeState: (newChallengeState: ChallengeState) => void
}) {
    const challengeConfig = [
        { name: '30 Second Rush', time: 30, direction: -1 },
        { name: '1 Minute Rush', time: 60, direction: -1 },
        { name: '10 Correct Sprint', time: 0, direction: 1 },
        { name: '30 Second Blind', time: 30, direction: -1 },
    ]

    return (
        <Card className="flex flex-col min-h-fit gap-8 p-3 bg-card justify-between relative overflow-hidden">
            <div className="flex gap-1.5 items-center">
                <Timer className="text-foreground w-4 h-4" />
                <h4>Time Challenges</h4>
            </div>
            <div className="flex gap-3 w-full h-[4.5rem] items-start justify-center font-semibold text-foreground/50">
                Coming soon...
                {/* {challengeConfig.map((challenge, index) => (
                    <div className="flex w-full flex-col gap-3 min-w-fit transition-all duration-500">
                        <p className="font-bold">{challenge.name}</p>
                        <Time
                            challenge={challenge.name}
                            direction={challenge.direction}
                            best={props.bests[index]}
                            time={challenge.time}
                            score={props.score}
                            updateChallengeBest={props.updateChallengeBest(
                                index
                            )}
                            updateChallengeState={props.updateChallengeState}
                        />
                    </div>
                ))} */}
            </div>
        </Card>
    )
}

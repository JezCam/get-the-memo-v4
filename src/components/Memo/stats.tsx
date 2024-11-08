import React from 'react'
import { Card } from '../ui/card'
import { ChartNoAxesColumn, Check, X, Target } from 'lucide-react'
import MemoLink from '../ui/memo-link'

export default function Stats(props: { correct: number; incorrect: number }) {
    return (
        <Card className="flex flex-col min-h-fit gap-8 p-3 bg-card justify-between">
            <div className="flex justify-between">
                <div className="flex gap-1.5 items-center">
                    <ChartNoAxesColumn className="text-foreground w-4 h-4" />
                    <h4>Today's Stats</h4>
                </div>
                <MemoLink href="/stats" text="View All-Time Stats" />
            </div>
            <div className="grid grid-cols-3 gap-3 h-min w-full">
                <div className="flex flex-col gap-3 w-full">
                    <p className="font-bold">Correct Memo</p>
                    <div className="flex bg-primary/10 rounded-sm p-1.5 pr-0 w-full h-fit items-center">
                        <div className="bg-memoGreen/10 flex items-center justify-center h-full aspect-square w-auto rounded-sm">
                            <Check className="w-5 h-5 text-memoGreen" />
                        </div>
                        <h3 className="text-center w-full">{props.correct}</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <p className="font-bold">Incorrect Memo</p>
                    <div className="flex bg-primary/10 rounded-sm p-1.5 pr-0 w-full h-fit items-center">
                        <div className="bg-memoRed/10 flex items-center justify-center h-full aspect-square w-auto rounded-sm">
                            <X className="w-5 h-5 text-memoRed" />
                        </div>
                        <h3 className="text-center w-full">
                            {props.incorrect}
                        </h3>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <p className="font-bold">Accuracy</p>
                    <div className="flex bg-primary/10 rounded-sm p-1.5 pr-0 w-full h-fit items-center">
                        <div className="bg-primary/10 flex items-center justify-center h-full aspect-square w-auto rounded-sm">
                            <Target className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="text-center w-full">
                            {props.correct + props.incorrect != 0
                                ? (
                                      (props.correct /
                                          (props.correct + props.incorrect)) *
                                      100
                                  ).toFixed(0) + '%'
                                : 'N/A'}
                        </h3>
                    </div>
                </div>
            </div>
        </Card>
    )
}

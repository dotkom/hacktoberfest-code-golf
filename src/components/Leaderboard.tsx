import React from 'react'
import { LeaderboardEntry } from '../App'

export interface LeaderboardProps {
  entries: LeaderboardEntry[],
  onDelete: (index: number) => void
}

export default function Leaderboard({ entries, onDelete }: LeaderboardProps) {
  return (
    <div>
      {entries.map(({ name, bytes, language }, index) => (
        <div key={name}
             className="flex flex-row justify-between w-full text-4xl">
          <h2 className="font-bold text-white font-sans">
            <span className="text-6xl text-secondary cursor-pointer"
                  onClick={() => onDelete(index)}>#{index + 1}</span>
            <span>&nbsp;{name}</span>
          </h2>
          <span className="font-sans text-white text-6xl">
            <span className="text-4xl">{language} &mdash;&nbsp;</span>
            <span className="text-secondary font-bold">{bytes}</span>
            <span>&nbsp;bytes</span>
          </span>
        </div>
      ))}
    </div>
  )
}
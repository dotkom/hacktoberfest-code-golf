import React, { useEffect, useState } from 'react'
import OnlineLogo from './logo.svg'
import Form from './components/Form'
import Leaderboard from './components/Leaderboard'
import { setState } from './storage'

export interface LeaderboardEntry {
  name: string,
  bytes: number,
  language: string
}

export interface AppProps {
  initialState: LeaderboardEntry[]
}

export default function App({ initialState }: AppProps) {
  const [isFormVisible, setFormVisible] = useState(false)
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(initialState)

  useEffect(() => {
    setState(leaderboard)
  }, [leaderboard])

  const onSubmit = (entry: LeaderboardEntry) => {
    setLeaderboard((prev) => [...prev, entry].sort((x, y) => x.bytes - y.bytes))
    setFormVisible(false)
  }

  const onDelete = (index: number) => {
    setLeaderboard((prev) => prev.filter((_, i) => index != i))
  }

  return (
    <main className="min-h-screen bg-primary">
      <section className="max-w-screen-md mx-auto py-16 space-y-8r">
        <div onClick={() => setFormVisible((prev) => !prev)}
             className="cursor-pointer">
          <img src={OnlineLogo} alt="Online Logo" />
          <h1 className="text-6xl font-bold font-sans text-white">Code Golf
            Leaderboard</h1>
        </div>
        <div>
          {isFormVisible && <Form onSubmit={onSubmit} />}
        </div>
        <div className="pb-16">
          <Leaderboard entries={leaderboard} onDelete={onDelete} />
        </div>
      </section>
    </main>
  )
}

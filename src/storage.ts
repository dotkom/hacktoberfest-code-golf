import { LeaderboardEntry } from './App'

export const getState = (): LeaderboardEntry[] => {
  try {
    const data = localStorage.getItem('leaderboard')
    if (data) {
      return JSON.parse(data)
    }
  } catch {}

  return []
}

export const setState = (leaderboard: LeaderboardEntry[]) => {
  localStorage.setItem('leaderboard', JSON.stringify(leaderboard))
}

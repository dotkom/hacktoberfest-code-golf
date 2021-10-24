import React, { createRef } from 'react'
import { LeaderboardEntry } from '../App'

export interface FormProps {
  onSubmit: (records: LeaderboardEntry) => void
}

export default function Form({ onSubmit }: FormProps) {
  const username = createRef<HTMLInputElement>()
  const bytes = createRef<HTMLInputElement>()
  const language = createRef<HTMLInputElement>()

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit({
      name: username.current?.value ?? '',
      language: language.current?.value ?? '',
      bytes: parseInt(bytes.current?.value ?? '0'),
    })
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}
          className="flex flex-col space-y-2">
      <label className="font-sans text-lg text-white font-bold">Navn</label>
      <input ref={username} className="rounded p-1" type="text"
             placeholder="Karl Johan" required />

      <label className="font-sans text-lg text-white font-bold">Antall
        bytes</label>
      <input ref={bytes} className="rounded p-1" type="number" placeholder="127"
             required />

      <label
        className="font-sans text-lg text-white font-bold">Programmeringsspråk</label>
      <input ref={language} className="rounded p-1" type="text"
             placeholder="Rust" required />

      <button className="p-2 rounded w-32 bg-secondary" type="submit">
        <p className="font-sans">Legg til bruker</p>
      </button>
    </form>
  )
}

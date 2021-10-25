import { SetStateAction, Dispatch, useEffect, useState } from 'react'

const getLocalStorageState = <T>(key: string, orElse: T): T => {
  try {
    const data = localStorage.getItem(key)
    if (data) {
      return JSON.parse(data)
    }
  } catch {}
  return orElse
}

const setLocalStorageState = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export function useLocalStorage<T>(key: string, orElse: T): [T, Dispatch<SetStateAction<T>>] {
  const initialState = getLocalStorageState<T>(key, orElse)
  const [value, setValue] = useState<T>(initialState)

  useEffect(() => {
    setLocalStorageState(key, value)
  }, [key, orElse, value])

  return [value, setValue]
}

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { getState } from './storage'

const initialState = getState()

ReactDOM.render(
  <React.StrictMode>
    <App initialState={initialState} />
  </React.StrictMode>,
  document.getElementById('root')
)

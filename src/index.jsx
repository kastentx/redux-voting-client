import React from 'react'
import ReactDOM from 'react-dom'
import Voting from './components/Voting'

const pair = ['Hackers', 'Fast & Furious']

ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('app')
)

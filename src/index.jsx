import React from 'react'
import ReactDOM from 'react-dom'
import Voting from './components/Voting'

const pair = ['Hackers', 'Fast & Furious']

const routes = <Route component={App}>
  <Route path='/' component={Voting} />
  </Route>
ReactDOM.render(
  <Voting pair={pair} winner='Hackers' />,
  document.getElementById('app')
)

import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils'
import {expect} from 'chai'
import {List} from 'immutable'
import {Voting} from '../src/components/Voting'

describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={['Hackers', 'Fast & Furious']} />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(2)
    expect(buttons[0].textContent).to.equal('Hackers')
    expect(buttons[1].textContent).to.equal('Fast & Furious')
  })
  
  it('invokes callback when a button is clicked', () => {
    let votedWith
    function vote(entry) {votedWith = entry}

    const component = renderIntoDocument(
      <Voting pair={['Hackers', 'Fast & Furious']}
              vote={vote}/>
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    Simulate.click(buttons[0])

    expect(votedWith).to.equal('Hackers')
  })

  it('disables buttons when user has voted', () => {
    const component = renderIntoDocument(
      <Voting pair={['Hackers', 'Star Wars']}
              hasVoted='Hackers' />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(2)
    expect(buttons[0].hasAttribute('disabled')).to.equal(true)
    expect(buttons[1].hasAttribute('disabled')).to.equal(true)
  })

  it('adds label to the voted entry', () => {
    const component = renderIntoDocument(
      <Voting pair={['Hackers', 'Star Wars']}
              hasVoted='Hackers' />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons[0].textContent).to.contain('Voted')
  })

  it('renders just the winner when there is one', () => {
    const component = renderIntoDocument(
      <Voting winner='Hackers' />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(0)

    const winner = ReactDOM.findDOMNode(component.refs.winner)
    expect(winner).to.be.ok
    expect(winner.textContent).to.contain('Hackers')
  })

  it('renders as a pure component', () => {
    const pair = ['Hackers', '28 Days Later']
    const container = document.createElement('div')
    let component = ReactDOM.render(
      <Voting pair={pair} />,
      container
    )

    let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0]
    expect(firstButton.textContent).to.equal('Hackers')

    pair[0] = 'Star Wars'
    component = ReactDOM.render(
      <Voting pair={pair} />,
      container
    )
    firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0]
    expect(firstButton.textContent).to.equal('Hackers')
  })
})

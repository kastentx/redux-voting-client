import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils'
import {expect} from 'chai'
import Voting from '../src/components/Voting'

describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={['Hackers', 'Fast & Furious']} />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2)
    expect(buttons[0].textContent).to.equal('Hackers')
    expect(buttons[1].textContent).to.equal('Fast & Furious')
  })
  
})

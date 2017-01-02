import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  Simulate
} from 'react-addons-test-utils'
import {List, Map} from 'immutable'
import {expect} from 'chai'
import Results from '../src/components/Results'

describe('Results', () => {
  
  it('renders entries with vote counts or zero', () => {
    const pair = List.of('Hackers', '28 Days Later')
    const tally = Map({'Hackers': 3})
    const component = renderIntoDocument(
      <Results pair={pair} tally={tally} />
    )
    const entries = scryRenderedDOMComponentsWithClass(component, 'entry')
    const [hack, days] = entries.map(e => e.textContent)

    expect(entries.length).to.equal(2)
    expect(hack).to.contain('Hackers')
    expect(hack).to.contain('3')
    expect(days).to.contain('28 Days Later')
    expect(days).to.contain('0')
  })

  it('invokes the next callback when next button is clicked', () => {
    let nextInvoked = false;
    function next() {nextInvoked = true}

    const pair = List.of('Hackers', '28 Days Later')
    const component = renderIntoDocument(
      <Results pair={pair}
               tally={Map()}
               next={next}/>
    )
    Simulate.click(ReactDOM.findDOMNode(component.refs.next))

    expect(nextInvoked).to.equal(true)
  })

})

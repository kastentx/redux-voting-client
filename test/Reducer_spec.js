import {List, Map, fromJS} from 'immutable'
import {expect} from 'chai'

import reducer from '../src/reducer'

describe('reducer', () => {
  
  it('handles SET_STATE', () => {
    const initialState = Map()
    const action = {
      type: 'SET_STATE',
      state: Map({
        vote: Map({
          pair: List.of('Hackers', '28 Days Later'),
          tally: Map({Hackers : 1})
        })
      })
    }
    const nextState = reducer(state, action)

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Hackers', '28 Days Later'],
        tally: {Hackers : 1}
      }
    }))
  })

  it('it handles SET_STATE with plain JS payload', () => {
    const initialState = Map()
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Hackers', '28 Days Later'],
          tally: {Hackers : 1}
        }
      }
    }
    const nextState = reducer(state, action)

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Hackers', '28 Days Later'],
        tally: {Hackers : 1}
      }
    }))
  })

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Hackers', '28 Days Later'],
          tally: {Hackers : 1}
        }
      }
    }
    const nextState = reducer(undefined, action)

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Hackers', '28 Days Later'],
        tally: {Hackers : 1}
      }
    }))
  })

})

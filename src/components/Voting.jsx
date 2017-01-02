import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import Winner from './Winner'
import Vote from './Vote'

export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="voting">
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>
  }
})

function mapPropsToState(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  }
}

export const VotingContainer = connect(mapPropsToState)(Voting)

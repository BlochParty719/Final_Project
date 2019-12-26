import React, {Component} from 'react';

class Activities extends Component {
  render () {
    return (
      <div>
      <h1>The Board of Boredom</h1>
      <h2>You should: {this.props.activity}</h2>
      <h2>Type: {this.props.activity.type}</h2>
      <h2>Number of people required: {this.props.participants}</h2>
      <button onClick={this.getActivity}>Random</button>
      </div>
    )
  }
}

export default Activities

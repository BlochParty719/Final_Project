import React from 'react'

class Activity extends React.Component {
  render() {
    return(
      <div className='table'>
      <table>
      <h1>The Board of Boredom</h1>
      <h2>You should: {this.state.activity}</h2>
      <h2>Type: {this.state.type}</h2>
      <h2>Number of people required: {this.state.participants}</h2>
      <button onClick={this.getActivity}>Random</button>
      </table>
      </div>
    )
  }
}

export default Activity

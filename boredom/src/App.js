import React from 'react';
import Activities from './Components/Activities.js'
//import Activity from './Components/Activity.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activity: '',
      type: '',
      participants: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({[event.target.id] : event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.query + this.state.activity
    }, () => {
      fetch(this.searchURL)
      .then(response => {
        return response.json()
      })
      .then(json => this.setState({
        activity: '',
        type: '',
        participants: '',
      }),
      error => console.log(error)
    )
  })
}
render () {
  return(
    <div>
      <header>
        <h1>Home</h1>
      </header>
      <body>
      <div className='table'>
      <table>
      <h1>The Board of Boredom</h1>
      <h2>You should: {this.state.activity}</h2>
      <h2>Type: {this.state.type}</h2>
      <h2>Number of people required: {this.state.participants}</h2>
      <button>Random</button>
      </table>
      </div>
    <div class='side-nav'>
    <h3>Categories</h3>
      <ul>
        <li>BusyWork</li>
        <li>Cooking</li>
        <li>DIY</li>
        <li>Educational</li>
        <li>Music</li>
        <li>Recreational</li>
        <li>Social</li>
        </ul>
        </div>
      </body>
      <footer>
        <div class='socials'>

        </div>
      </footer>
    </div>
    )
  }
}
export default App;

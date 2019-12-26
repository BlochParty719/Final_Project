import React from 'react';
//import Activities from './Components/Activities'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: 'http://www.boredapi.com/api/activity',
      query: '&t=',
      activity: '',
      type: '',
      participants: '',
      searchURL: ''
    }
    // this.getActivity = this.getActivity.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({[event.target.id] : event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.query + this.state.activity + this.state.type + this.state.participants
    }, () => {
  //getActivity(){
    fetch('http://www.boredapi.com/api/activity')
    .then(response => {
    return response.json()
    }).then(json => this.setState({
      activity: json,
      activity: '',
      type: '',
      participants: ''
    }), error => console.log(error))
  })
}
render () {
  return(
    <>
    <header>
      <h1>Home</h1>
      </header>
    <body>
      <form>
      <h1>The Board of Boredom</h1>
      <div className='container'>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor='activity'> You Should: {this.state.activity}</label>

      <h2>Type: {this.state.type}</h2>
      <h2>Number of people required: {this.state.participants}</h2>
    </form>
    <button onClick={this.getActivity}>Random</button>
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
    </form>
    </body>
    <footer>
      <div class='socials'>

      </div>
    </footer>
      </>
     )
   }
 }
export default App

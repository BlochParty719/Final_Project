import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: 'http://www.boredapi.com/api/activity',
      query: '&t=',
      activity: '',
      type: '',
      participants: '',
    }
    this.getActivity = this.getActivity.bind(this)
  }
  getActivity(){
    fetch('http://www.boredapi.com/api/activity')
    .then(response => {
    return response.json()
    }).then(json => this.setState({
      activity: json,
      activity: json.activity,
      type: json.type,
      participants: json.participants
    }),
    error => console.log(error)
    )
  }

render () {
  return(
    <>
    <header>
      <h1>Home</h1>
      </header>
    <body>
    <div className='container'>
      <h1>The Board of Boredom</h1>
    <div className='info'>
      <h2> You Should: {this.state.activity}</h2>
      <h2>Type: {this.state.type}</h2>
      <h2>Number of people required: {this.state.participants}</h2>
    <button onClick={this.getActivity} type='button'>Random</button>
    </div>
    </div>
    <div class='side-nav'>
      <h3>Categories</h3>
        <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
    </div>
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

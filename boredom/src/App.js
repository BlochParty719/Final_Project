import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import {BrowserRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

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
    <h1><a href='/'>Home</a></h1>
    <br>
    </br>
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
    <br>
    </br>
    <div class='side-nav'>
      <h3>Categories</h3>
        <p><a href=''>Charity</a></p>
        <p><a href=''>Cooking</a></p>
        <p><a href=''>Education</a></p>
        <p><a href=''>Music</a></p>
        <p><a href=''>Recreational</a></p>
        <p><a href=''>Relaxation</a></p>
        <p><a href=''>Social</a></p>
    </div>
    <br>
    </br>
    <div>
    <h2>Need Some Thing to do this Holiday Season?</h2>
    <br>
    </br>
      <div class='grid'>
      <p><a href='https://www.wikihow.com/Wrap-a-Present'>Wrap Presents</a></p>
      <p><a href='https://www.wikihow.com/Decorate-a-Christmas-Tree'>Decorate the Christmas Tree</a></p>
      <p><a href='https://www.wikihow.com/Light-a-Chanukah-Menorah'>Light the Menorah</a></p>
      <p><a href='https://www.wikihow.com/Play-Dreidel'>Play Dreidel</a></p>
      <p><a href='https://www.wikihow.com/Decorate-a-Gingerbread-House'>Decorate a Gingerbread House</a></p>
      <br>
      </br>
      <br>
      </br>
      </div>
    </div>
    </body>
    <footer>
    <div class='socials'>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
      <SocialIcon url="https://twitter.com/Daniel_Bloch95"/>
      <SocialIcon url="https://github.com/BlochParty719"/>
      <SocialIcon url="https://linkedin.com/in/daniel-bloch-Da3a79119"/>
    </div>
    </footer>
    </>
    )
  }
}
export default App

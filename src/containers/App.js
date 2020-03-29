import React, { Component } from 'react';
import NametagList from '../components/NametagList';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    const getPeople = async () => {
      const peopleData = await fetch('https://swapi.co/api/people/');
      const peeps = await peopleData.json();
      this.setState({ people: peeps.results });
    }
    getPeople();
  }
  
  render() {
    const people = this.state.people;
    return (
      <div className='tc box'>
        <h1 className='f-headline ma0 white'><img alt='Star Wars' src='https://lh3.googleusercontent.com/proxy/DkdJG9eRgRZLgFfh-YtFtLbXko2ESI4CEvkVpH65tKa3xCbkztXV4Y4CjghNhAaGDuG6kBZy3PAkYMhcMRYyJNeH3O5J95phuDtdoeJKh5UUnAc-q3uJGfdIrWot' height='300px' /></h1>
        <div>
          <NametagList people={people}/>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import NametagList from "../components/NametagList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    const getPeople = async () => {
      const peopleData = await fetch("https://swapi.co/api/people/");
      const peeps = await peopleData.json();
      this.setState({ people: peeps.results });
    };
    getPeople();
  }

  render() {
    const people = this.state.people;
    return (
      <div className="tc box">
        <h1 className="f-headline ma0 white">
          <img
            alt="Star Wars"
            src="http://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo-300x300.png"
            height="300px"
          />
        </h1>
        <div>
          <NametagList people={people} />
        </div>
      </div>
    );
  }
}

export default App;

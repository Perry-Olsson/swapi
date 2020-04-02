import React, { Component } from "react";
import NametagList from "../components/NametagList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
    this.handleExit = this.handleExit.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }
  componentDidMount() {
    const getPeople = async () => {
      const getHomeWorld = async () => {
        const people = await Promise.all(
          this.state.people.map(async person => {
            const homeWorldData = await fetch(person.homeworld);
            const homeWorld = await homeWorldData.json();
            person.homeworld = homeWorld.name;
            return person;
          })
        );
        this.state.people.forEach((person, i) => {
          if (person.isHovering === true) {
            people[i].isHovering = true;
          }
        });
        this.setState({ people });
      };
      const getRemainingData = async () => {
        const people = await Promise.all(
          this.state.people.map(async person => {
            const [films, species, vehicles, starships] = [
              await Promise.all(
                person.films.map(
                  async film =>
                    await fetch(film)
                      .then(r => r.json())
                      .then(r => r.title)
                )
              ),
              await fetch(person.species)
                .then(result => result.json())
                .then(result => result.name),
              await Promise.all(
                person.vehicles.map(
                  async vehicle =>
                    await fetch(vehicle)
                      .then(result => result.json())
                      .then(r => r.name)
                )
              ),
              await Promise.all(
                person.starships.map(
                  async starship =>
                    await fetch(starship)
                      .then(result => result.json())
                      .then(r => r.name)
                )
              )
            ];
            person.films = films;
            person.species = species;
            person.vehicles = vehicles;
            person.starships = starships;
            return person;
          })
        );
        this.setState({ people });
      };
      const peopleData = await fetch("https://swapi.co/api/people/");
      const peeps = await peopleData.json();
      this.setState({
        people: peeps.results.map(person => {
          person.isHovering = false;
          return person;
        })
      });
      getHomeWorld();
      getRemainingData();
    };
    getPeople();
  }

  handleStart(event, id) {
    const nametag = event.target;
    const people = [...this.state.people];
    people[id] = { ...people[id] };
    setTimeout(() => {
      people[id].isHovering = true;
      this.setState({ people });
    }, 150);
    setTimeout(() => {
      if (nametag.offsetHeight < 250) {
        people[id].isHovering = false;
        this.setState({ people });
      }
    }, 151);
  }

  handleExit(id) {
    const people = [...this.state.people];
    setTimeout(() => {
      people[id].isHovering = false;
      this.setState({ people });
    }, 10);
  }

  render() {
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
          <NametagList
            onAnimationStart={this.handleStart}
            onMouseLeave={this.handleExit}
            people={this.state.people}
          />
        </div>
        <div className="mv6">
          <img
            alt="C-3P0"
            src="https://www.thewrap.com/wp-content/uploads/2019/12/the-worst-parts-of-star-wars-the-rise-of-skywalker-episode-ix.jpg"
          />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class Nametag extends Component {
  constructor({ person }) {
    super({ person });
    this.state = {
      isHovering: false,
      name: person.name,
      height: person.height,
      mass: person.mass,
      gender: person.gender
    };

    this.handleExit = this.handleExit.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  handleStart(event) {
    const nametag = event.target;
    setTimeout(() => {
      this.setState({ isHovering: true });
    }, 150);
    setTimeout(() => {
      if (nametag.offsetHeight < 250) {
        this.setState({ isHovering: false });
      }
    }, 151);
  }

  handleExit() {
    setTimeout(() => {
      this.setState({ isHovering: false });
      console.log(2);
    }, 10);
  }

  render() {
    const { name, height, mass, gender } = this.state;
    return (
      <div
        id="nametag"
        className="hover flex flex-column justify-center items-center box ba b--yellow white br4 ph4 mv3 f3"
        onAnimationStart={this.handleStart}
        onMouseLeave={this.handleExit}
      >
        <h3>{name}</h3>
        {this.state.isHovering && (
          <div className="hover extendedInfo">
            <p>height: {height}</p>
            <p>mass: {mass}</p>
            <p>gender: {gender}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Nametag;

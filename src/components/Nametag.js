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
    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  async handleEnter(event) {
    const hoveredNametag = event.target;
    const getHeight = () => {
      return hoveredNametag.offsetHeight;
    };
    setTimeout(() => {
      if (getHeight() > 280) {
        this.setState(this.toggleHoverState);
      }
    }, 150);

    //}
  }

  handleExit() {
    setTimeout(() => {
      this.setState({ isHovering: false });
    }, 10);
  }

  render() {
    const { name, height, mass, gender } = this.state;
    return (
      <div
        id="nametag"
        className="hover flex flex-column justify-center items-center box ba b--yellow white br4 ph4 mv3 f3"
        onMouseEnter={this.handleEnter}
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

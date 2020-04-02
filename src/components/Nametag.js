import React, { Component } from "react";

class Nametag extends Component {
  componentWillUnmount() {
    console.log("hello");
  }
  render() {
    const { person, onAnimationStart, onMouseLeave, id } = this.props;
    return (
      <div
        className="nametag flex flex-column justify-center items-center box ba b--yellow white br4 ph4 mv3 f3"
        onAnimationStart={event => {
          return onAnimationStart(event, id);
        }}
        onMouseLeave={() => {
          return onMouseLeave(id);
        }}
      >
        <h3>{person.name}</h3>
        {person.isHovering && (
          <div className="">
            <p>height: {person.height}</p>
            <p>mass: {person.mass}</p>
            <p>gender: {person.gender}</p>
            <p>
              homeworld:{" "}
              {person.homeworld.includes("https")
                ? "loading..."
                : person.homeworld}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Nametag;

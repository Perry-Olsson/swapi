import React from "react";
import Nametag from "./Nametag";

const NametagList = ({
  onAnimationStart,
  onMouseLeave,
  people,
  getHomeWorld
}) => {
  return (
    <div className="flex flex-wrap mh3 justify-around">
      {people.map((person, i) => {
        return (
          <Nametag
            key={person.name}
            onAnimationStart={onAnimationStart}
            onMouseLeave={onMouseLeave}
            person={person}
            id={i}
          />
        );
      })}
    </div>
  );
};

export default NametagList;

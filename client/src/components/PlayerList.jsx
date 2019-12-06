import React from "react";
import PlayerCard from "./PlayerCard";

export default function PlayerList({ playersData }) {
  return (
    <div>
      {playersData.map(player => {
        return (
          <PlayerCard
            name={player.name}
            country={player.country}
            searches={player.searches}
          />
        );
      })}
    </div>
  );
}

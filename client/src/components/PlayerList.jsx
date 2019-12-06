import React from "react";
import PlayerCard from "./PlayerCard";

export default function PlayerList({ playersData }) {
  return (
    <div className="mt-4">
      {playersData.map(player => {
        return (
          <PlayerCard
            key={player.id}
            name={player.name}
            country={player.country}
            searches={player.searches}
          />
        );
      })}
    </div>
  );
}

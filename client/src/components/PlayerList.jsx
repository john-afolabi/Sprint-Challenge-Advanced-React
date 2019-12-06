import React from "react";

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

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function Chart({ playersData }) {

    const top10players = playersData.slice(0, 10)
  return (
    <div>
      <BarChart
        width= {900}
        height={500}
        data={top10players}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={45}/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="searches" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

import React from 'react';

import {
  LineChart as CommonLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { SearchResult } from 'store/common';


type LineChartProps = {
    data: SearchResult,
};

const LineChart = ({ data } : LineChartProps) : JSX.Element  => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <CommonLineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="impressions" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
      </CommonLineChart>
    </ResponsiveContainer>
  )
}

export default LineChart;
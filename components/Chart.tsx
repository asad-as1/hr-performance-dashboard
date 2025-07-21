'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface Props {
  labels: string[];
  data: number[];
  title?: string;
}

const Chart = ({ labels, data, title }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow w-full max-w-lg">
      <h2 className="text-center text-lg font-bold mb-2">{title}</h2>
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: 'Average Rating',
              data,
              backgroundColor: 'rgba(59, 130, 246, 0.6)',
              borderRadius: 6,
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;

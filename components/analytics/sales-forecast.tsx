"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Simulated forecast data
const forecastData = Array.from({ length: 12 }).map((_, i) => {
  const month = new Date(2024, i, 1).toLocaleString('default', { month: 'short' });
  const actual = Math.floor(Math.random() * 5000) + 3000;
  const forecast = actual * (1 + (Math.random() * 0.3));
  
  return {
    month,
    actual,
    forecast: Math.floor(forecast),
  };
});

export function SalesForecast() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Sales Forecast</h3>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={forecastData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="actual" 
            stroke="#8884d8" 
            name="Actual Sales"
          />
          <Line 
            type="monotone" 
            dataKey="forecast" 
            stroke="#82ca9d" 
            name="Forecasted Sales" 
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
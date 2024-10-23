"use client";

import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const hourlyData = Array.from({ length: 24 }).map((_, hour) => ({
  hour: `${hour}:00`,
  visits: Math.floor(Math.random() * 100) + 20,
  purchases: Math.floor(Math.random() * 30) + 5,
}));

export function CustomerBehavior() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Customer Activity by Hour</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={hourlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="visits" fill="#8884d8" name="Store Visits" />
          <Bar dataKey="purchases" fill="#82ca9d" name="Purchases" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
"use client";

import { Card } from "@/components/ui/card";
import { products } from "@/lib/db";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function PopularProducts() {
  const sortedProducts = [...products]
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 5)
    .map(product => ({
      name: product.name,
      sold: product.sold,
      revenue: product.sold * product.price
    }));

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Popular Products</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={sortedProducts}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="sold" fill="#8884d8" name="Units Sold" />
          <Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" name="Revenue ($)" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
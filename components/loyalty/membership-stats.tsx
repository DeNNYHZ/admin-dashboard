"use client";

import { Card } from "@/components/ui/card";
import { customers, loyaltyTiers } from "@/lib/db";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const COLORS = {
  bronze: "#CD7F32",
  silver: "#C0C0C0",
  gold: "#FFD700",
  platinum: "#E5E4E2",
};

export function MembershipStats() {
  const membershipData = Object.entries(
    customers.reduce((acc, customer) => {
      acc[customer.tier] = (acc[customer.tier] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).map(([tier, count]) => ({
    tier,
    count,
    percentage: (count / customers.length) * 100,
  }));

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Membership Distribution</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={membershipData}
                dataKey="count"
                nameKey="tier"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {membershipData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[entry.tier as keyof typeof COLORS]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-4">
          {Object.entries(loyaltyTiers).map(([tier, config]) => (
            <div key={tier} className="flex justify-between items-center">
              <div>
                <h4 className="font-medium capitalize">{tier}</h4>
                <p className="text-sm text-muted-foreground">
                  Min. Spent: ${config.minSpent}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  {config.pointsMultiplier}x Points
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
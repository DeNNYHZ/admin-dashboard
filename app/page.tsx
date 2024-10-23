import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DollarSign,
  Users,
  ShoppingBag,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
} from "lucide-react";
import { RecentSales } from "@/components/recent-sales";
import { Overview } from "@/components/overview";
import { PopularProducts } from "@/components/analytics/popular-products";
import { ProductManagement } from "@/components/inventory/product-management";
import { MembershipStats } from "@/components/loyalty/membership-stats";
import { SalesForecast } from "@/components/analytics/sales-forecast";
import { CustomerBehavior } from "@/components/analytics/customer-behavior";

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <button className="relative p-2 rounded-full hover:bg-accent">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
        </button>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="loyalty">Loyalty Program</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">Total Revenue</p>
                    <p className="text-2xl font-bold">$45,231.89</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-sm">+20.1%</span>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">Active Users</p>
                    <p className="text-2xl font-bold">+2350</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-sm">+12.3%</span>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <ShoppingBag className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">Sales</p>
                    <p className="text-2xl font-bold">+12,234</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-sm">+8.4%</span>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">Active Products</p>
                    <p className="text-2xl font-bold">+573</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-rose-500">
                  <ArrowDownRight className="h-4 w-4" />
                  <span className="text-sm">-2.5%</span>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Overview</h4>
                </div>
                <Overview />
              </div>
            </Card>
            <Card className="col-span-3">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Recent Sales</h4>
                </div>
                <RecentSales />
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            <PopularProducts />
            <SalesForecast />
            <CustomerBehavior />
          </div>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <ProductManagement />
        </TabsContent>

        <TabsContent value="loyalty" className="space-y-4">
          <MembershipStats />
        </TabsContent>
      </Tabs>
    </div>
  );
}
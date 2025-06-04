import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Settings2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const generateComplexChartData = (numPoints: number) => {
  const data = [];
  let val1 = 500 + Math.random() * 200;
  let val2 = 400 + Math.random() * 200;
  for (let i = 0; i < numPoints; i++) {
    const date = new Date(2022, 4, 1 + i); // Start from May 1, 2022
    const formattedDate = `${String(date.getDate()).padStart(2, '0')} ${date.toLocaleString('default', { month: 'short' })}`;
    val1 += (Math.random() - 0.5) * 200 * (1 + Math.sin(i/5)); // Sinusoidal variation
    val2 += (Math.random() - 0.5) * 150 * (1 + Math.cos(i/3)); // Cosine variation
    data.push({
      name: formattedDate,
      currentPeriod: Math.max(100, Math.round(val1)),
      previousPeriod: Math.max(80, Math.round(val2)),
    });
  }
  return data;
};

const chartDataThirtyDays = generateComplexChartData(30);
const chartDataNinetyDays = generateComplexChartData(90);
const chartDataYear = generateComplexChartData(365);

interface LineChartProps {
  className?: string;
}

const LineChartComponent: React.FC<LineChartProps> = ({ className }) => {
  const [timeRange, setTimeRange] = React.useState<'30d' | '90d' | '365d'>('30d');

  const dataMap = {
    '30d': chartDataThirtyDays,
    '90d': chartDataNinetyDays,
    '365d': chartDataYear,
  };

  const activeData = dataMap[timeRange];

  const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border bg-background p-2 shadow-sm">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <span className="text-[0.70rem] uppercase text-muted-foreground">
                Current Period
              </span>
              <span className="font-bold text-primary">
                {payload[0].value}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.70rem] uppercase text-muted-foreground">
                Previous Period
              </span>
              <span className="font-bold text-accent-foreground">
                {payload[1].value}
              </span>
            </div>
          </div>
           <p className="text-xs text-muted-foreground pt-1">{label}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className={cn("col-span-4", className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Total Sells</CardTitle>
          <CardDescription>Payment received across all channels</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={timeRange} onValueChange={(value: '30d' | '90d' | '365d') => setTimeRange(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30d">Last 30 Days</SelectItem>
              <SelectItem value="90d">Last 90 Days</SelectItem>
              <SelectItem value="365d">Last Year</SelectItem>
            </SelectContent>
          </Select>
          {/* This is the settings button described from image, near 'CUSTOMIZE' panel */}
          <Button variant="outline" size="icon">
            <Settings2 className="h-4 w-4" />
            <span className="sr-only">Chart Settings</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart 
            data={activeData}
            margin={{ top: 5, right: 20, left: -25, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false}
              tickFormatter={(value, index) => {
                if (activeData.length > 30 && index % Math.floor(activeData.length / 10) !== 0) return ''; // Show fewer labels for long ranges
                return value;
              }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '3 3' }} />
            <Legend iconSize={10} wrapperStyle={{paddingTop: '20px'}}/>
            <Line 
              type="monotone" 
              dataKey="currentPeriod" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2} 
              dot={false} 
              activeDot={{ r: 6, strokeWidth: 0, fill: 'hsl(var(--primary))'}}
              name="Current Period"
            />
            <Line 
              type="monotone" 
              dataKey="previousPeriod" 
              stroke="hsl(var(--accent-foreground))" 
              strokeWidth={2} 
              strokeDasharray="5 5" 
              dot={false}
              activeDot={{ r: 6, strokeWidth: 0, fill: 'hsl(var(--accent-foreground))' }}
              name="Previous Period"
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartComponent;

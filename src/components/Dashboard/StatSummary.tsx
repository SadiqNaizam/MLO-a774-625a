import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface StatSummaryItemProps {
  title: string;
  period: string;
  percentage: number;
  value?: string;
  className?: string;
}

const StatSummaryItem: React.FC<StatSummaryItemProps> = ({ title, period, percentage, value, className }) => {
  const isPositive = percentage >= 0;
  return (
    <div className={cn("flex-1", className)}>
      <div className="flex items-center space-x-2 mb-1">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <Badge variant={isPositive ? 'default' : 'destructive'} 
               className={cn(isPositive ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300')}>
          {isPositive ? '+' : ''}{percentage.toFixed(1)}%
        </Badge>
      </div>
      {value && <p className="text-3xl font-bold text-foreground">{value}</p>}
      <p className="text-xs text-muted-foreground">{period}</p>
    </div>
  );
};

const StatSummary: React.FC = () => {
  return (
    <Card className="col-span-4">
      <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
        <StatSummaryItem 
          title="Total orders"
          period="Last 7 days"
          percentage={-6.8}
        />
        <div className="text-center md:px-8 my-4 md:my-0">
          <p className="text-5xl font-bold text-foreground">16,247</p>
          {/* This could be 'Total Sales Value' or similar, context dependent */} 
        </div>
        <StatSummaryItem 
          title="New customers"
          period="Last 7 days"
          percentage={26.5}
          className="md:text-right"
        />
      </CardContent>
    </Card>
  );
};

export default StatSummary;

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, PauseCircle, XCircle } from 'lucide-react';

interface StatCardData {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
  bgColor: string;
}

const statsData: StatCardData[] = [
  {
    id: 'newOrders',
    title: '57 new orders',
    value: '57',
    description: 'Awaiting processing',
    icon: Star,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-100 dark:bg-green-900/50',
  },
  {
    id: 'onHold',
    title: '5 orders',
    value: '5',
    description: 'On hold',
    icon: PauseCircle,
    iconColor: 'text-yellow-500',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/50',
  },
  {
    id: 'outOfStock',
    title: '15 products',
    value: '15',
    description: 'Out of stock',
    icon: XCircle,
    iconColor: 'text-red-500',
    bgColor: 'bg-red-100 dark:bg-red-900/50',
  },
];

interface StatCardProps {
  data: StatCardData;
}

const StatCard: React.FC<StatCardProps> = ({ data }) => {
  const IconComponent = data.icon;
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold text-card-foreground">{data.title}</CardTitle>
        <div className={cn('flex h-10 w-10 items-center justify-center rounded-full p-2', data.bgColor, data.iconColor)}>
          <IconComponent size={24} />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">{data.description}</p>
      </CardContent>
    </Card>
  );
};

const StatsCards: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {statsData.map((stat) => (
        <StatCard key={stat.id} data={stat} />
      ))}
    </div>
  );
};

export default StatsCards;

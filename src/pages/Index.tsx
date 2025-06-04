import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import StatsCards from '@/components/Dashboard/StatsCards';
import LineChartComponent from '@/components/Dashboard/LineChart';
import StatSummary from '@/components/Dashboard/StatSummary';
import ChatBox from '@/components/Dashboard/ChatBox';

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* Container to apply max-width and centering for the main content area 
          as per Layout Requirements: mainContent.container = "max-w-screen-xl mx-auto" */}
      <div className="max-w-screen-xl mx-auto">
        {/* Page Header Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Ecommerce Dashboard
          </h1>
          <p className="text-muted-foreground">
            Here's what's going on at your business right now
          </p>
        </div>

        {/* Main Dashboard Grid Content 
            as per Layout Requirements: mainContent.layout = "grid grid-cols-4 gap-6"
        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* StatsCards: This wrapper ensures StatsCards spans all 4 columns of the main grid.
              Internally, StatsCards component uses its own grid (e.g., md:grid-cols-3) for its content. */}
          <div className="md:col-span-4">
            <StatsCards />
          </div>

          {/* LineChartComponent: The component itself is designed to be col-span-4 (its root Card has col-span-4). */}
          <LineChartComponent />

          {/* StatSummary: The component itself is designed to be col-span-4 (its root Card has col-span-4). */}
          <StatSummary />
        </div>
      </div>

      {/* ChatBox: This is a floating component. Its positioning is handled within the ChatBox component itself. */}
      <ChatBox />
    </MainAppLayout>
  );
};

export default IndexPage;

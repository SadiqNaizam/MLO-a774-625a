import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="bg-background text-foreground">
      <Sidebar />
      <Header />
      <main 
        className="ml-16 pt-16 overflow-y-auto"
        style={{ height: '100vh' }} // Ensures main area takes full viewport height for scrolling context
      >
        {/* Padding for the content area within main. 
            Layout Requirements (mainContent) suggested: "pt-6 px-8". 
            Using py-6 px-8 for balanced padding. */}
        <div className="px-8 py-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;

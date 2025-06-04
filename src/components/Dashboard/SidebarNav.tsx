import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Bird,
  Home,
  Package,
  ShoppingCart,
  Users,
  BarChart2,
  Settings,
  LifeBuoy,
} from 'lucide-react';

interface NavItem {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
}

const mainNavItems: NavItem[] = [
  { href: '#', icon: Home, label: 'Dashboard', isActive: true },
  { href: '#', icon: Package, label: 'Products' },
  { href: '#', icon: ShoppingCart, label: 'Orders' },
  { href: '#', icon: Users, label: 'Customers' },
  { href: '#', icon: BarChart2, label: 'Analytics' },
];

const bottomNavItems: NavItem[] = [
  { href: '#', icon: LifeBuoy, label: 'Support' },
  { href: '#', icon: Settings, label: 'Settings' },
];

const SidebarNav: React.FC = () => {
  return (
    <TooltipProvider delayDuration={0}>
      <aside className="fixed top-0 left-0 z-20 flex h-full w-16 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
        <div className="flex h-16 items-center justify-center border-b border-sidebar-border">
          <a href="#" className="text-sidebar-primary">
            <Bird size={28} />
          </a>
        </div>
        <nav className="flex flex-1 flex-col items-center justify-between py-4">
          <ul className="flex flex-col items-center space-y-2">
            {mainNavItems.map((item) => (
              <li key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        'h-10 w-10 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                        item.isActive && 'bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 hover:text-sidebar-primary-foreground'
                      )}
                      aria-label={item.label}
                    >
                      <item.icon size={20} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-900">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-center space-y-2">
            {bottomNavItems.map((item) => (
              <li key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      aria-label={item.label}
                    >
                      <item.icon size={20} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-900">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </TooltipProvider>
  );
};

export default SidebarNav;

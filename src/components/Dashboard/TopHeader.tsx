import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Bell,
  Grid,
  HelpCircle,
  Home,
  LayoutGrid as AppWindowIcon, // Renamed to avoid conflict
  BookOpen,
  FileText,
  Search,
  Sun,
  UserCircle,
  Settings,
  LogOut
} from 'lucide-react';

interface NavLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon: Icon, label, isActive }) => (
  <a
    href={href}
    className={cn(
      'flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground',
      isActive && 'text-primary bg-accent'
    )}
  >
    <Icon size={16} />
    <span>{label}</span>
  </a>
);

const TopHeader: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const navLinks: NavLinkProps[] = [
    { href: '#', icon: Home, label: 'Home', isActive: true },
    { href: '#', icon: AppWindowIcon, label: 'Apps' },
    { href: '#', icon: FileText, label: 'Pages' },
    { href: '#', icon: BookOpen, label: 'Modules' },
    { href: '#', icon: HelpCircle, label: 'Documentation' },
  ];

  return (
    <header className="fixed top-0 left-16 right-0 z-10 flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="flex items-center">
        {/* Phoenix logo text based on image */} 
        {/* The actual logo for Phoenix is a Bird icon in SidebarNav */} 
        {/* In TopHeader, only nav links are visible from the reference image, no logo apart from what's in SidebarNav */} 
        {/* Adding a simple search or title area instead if needed */} 
        <div className="hidden lg:flex items-center space-x-2 mr-6">
          {navLinks.map(link => <NavLink key={link.label} {...link} />)}
        </div>
        {/* Mobile nav toggle (example, not fully implemented) */} 
        <Button variant="ghost" size="icon" className="lg:hidden mr-2">
          <Grid size={20} /> 
        </Button>
        {isSearchOpen && (
          <Input 
            type="search" 
            placeholder="Search..." 
            className="w-64 hidden md:block"
          />
        )}
      </div>

      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} className="md:hidden">
          <Search size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="hidden md:inline-flex">
          <Search size={20} />
        </Button>
        <Button variant="ghost" size="icon">
          <Sun size={20} />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell size={20} />
           <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Grid size={20} /> 
           <span className="sr-only">App Launcher</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">
                  john.doe@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserCircle className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;

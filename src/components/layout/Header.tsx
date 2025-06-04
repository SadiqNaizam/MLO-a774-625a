import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Bell,
  Menu as MenuIcon, // Changed from Grid to MenuIcon for mobile nav toggle, common practice
  HelpCircle,
  Home,
  LayoutGrid as AppWindowIcon,
  BookOpen,
  FileText,
  Search,
  Sun,
  UserCircle,
  Settings,
  LogOut,
  Settings2 // Used for Chart Settings in LineChart, can be Grid or other icon for App Launcher
} from 'lucide-react';

interface NavLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon: Icon, label, isActive }) => (
  // In a real app, this could be a Link from react-router-dom
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

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false); // Example state for mobile menu

  const navLinks: NavLinkProps[] = [
    { href: '#', icon: Home, label: 'Home', isActive: true },
    { href: '#', icon: AppWindowIcon, label: 'Apps' },
    { href: '#', icon: FileText, label: 'Pages' },
    { href: '#', icon: BookOpen, label: 'Modules' },
    { href: '#', icon: HelpCircle, label: 'Documentation' },
  ];

  return (
    <header className="fixed top-0 left-16 right-0 z-10 flex h-16 items-center justify-between border-b bg-background p-4">
      <div className="flex items-center">
        <div className="hidden lg:flex items-center space-x-1 mr-4">
          {navLinks.map(link => <NavLink key={link.label} {...link} />)}
        </div>
        {/* Mobile nav toggle (example) */}
        <Button variant="ghost" size="icon" className="lg:hidden mr-2">
          <MenuIcon size={20} />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        {/* Search input, conditionally rendered or styled based on isSearchOpen for mobile */} 
        {isSearchOpen && (
          <Input 
            type="search" 
            placeholder="Search..." 
            className="w-full md:w-64 lg:static absolute left-0 top-16 p-4 h-auto bg-background md:bg-transparent border-0 md:border rounded-none md:rounded-md shadow-md md:shadow-none"
          />
        )}
      </div>

      <div className={cn("flex items-center space-x-2 md:space-x-3", isSearchOpen && "hidden md:flex")}>
        <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} className="md:hidden">
          <Search size={20} />
          <span className="sr-only">Toggle Search</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="hidden md:inline-flex">
          <Search size={20} />
          <span className="sr-only">Search</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Sun size={20} />
           <span className="sr-only">Toggle Theme</span>
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
           <span className="sr-only">Notifications</span>
           {/* Example notification badge */}
           <span className="absolute top-1 right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
        </Button>
        <Button variant="ghost" size="icon">
          <AppWindowIcon size={20} /> 
           <span className="sr-only">App Launcher</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full p-0">
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

export default Header;

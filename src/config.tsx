import { usePathname } from 'next/navigation';

import { BarChart, Bell, Briefcase, Circle, Earth, Home, LayoutDashboard, Settings, User } from 'lucide-react';

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Home',
      href: '/',
      icon: <Home size={20} />,
      active: pathname === '/',
      position: 'top',
    },
    {
      name: 'analytics',
      href: '/analytics',
      icon: <LayoutDashboard size={20} />,
      active: isNavItemActive(pathname, '/analytics'),
      position: 'top',
    },
    {
      name: 'map',
      href: '/map',
      icon: <Earth size={20} />,
      active: isNavItemActive(pathname, '/map'),
      position: 'top',
    },
    
    {
      name: 'Settings',
      href: '/settings',
      icon: <Settings size={20} />,
      active: isNavItemActive(pathname, '/settings'),
      position: 'bottom',
    },
  ];
};

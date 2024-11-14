'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { NavItems } from '@/config';
import { Menu } from 'lucide-react';
export default function Header() {
  const navItems = NavItems();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center h-16  border-b shrink-0  justify-between ">
      <div
      
        className="flex items-center gap-2 text-lg font-bold md:text-base "
      
      >
        <Image src="/sustairLogo.png" width={120} height={100} alt="SustairLogo" className='mx-0 px-0'/>
        <span className='text-emerald-600 font-bold text-2xl'>Dashboard</span>
      </div>

      <div className="ml-4 flex items-center gap-3">
        
      </div>
    </header>
  );
}

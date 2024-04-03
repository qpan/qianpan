'use client';

import React from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Avatar,
} from '@nextui-org/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['Home', 'Tech Stack', 'Projects', 'Resume', 'Contact'];

  const avatar = (
    <Avatar
      isBordered
      as="button"
      className="transition-transform"
      color="secondary"
      name="Jason Hughes"
      size="sm"
      src="/avatar.png"
    />
  );

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start" className="md:hidden">
        {avatar}
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="max-md:hidden">{avatar}</div>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link color="foreground" href="#" size="lg" className="font-bold">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex"></NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={'foreground'}
              href="#"
              size="lg"
              className="font-bold w-full justify-center"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

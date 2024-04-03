'use client';

import React from 'react';
import { map } from 'lodash';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
  Avatar,
} from '@nextui-org/react';
import { Menu } from '@/types';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navbarItems = map(Menu, (item, index) => (
    <NavbarItem key={`${item}-${index}`}>
      <Link
        onClick={() => setIsMenuOpen(false)}
        color="foreground"
        href={
          item === Menu.Home
            ? '#'
            : item === Menu.Resume
              ? 'Qian_Pan_Resume.pdf'
              : `#${item}`
        }
        size="lg"
        className="font-bold"
      >
        {item}
      </Link>
    </NavbarItem>
  ));

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
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
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
        {navbarItems}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex"></NavbarContent>
      <NavbarMenu className="text-right">{navbarItems}</NavbarMenu>
    </Navbar>
  );
}

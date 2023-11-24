import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';

export default function NavBar() {
  return (
    <Navbar isBordered isBlurred={false}>
      <NavbarBrand>
        <p className='font-bold text-inherit'>Scheduled News</p>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login (will be implemented)</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';

export default function NavBar() {
  return (
    <Navbar className='bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200' isBordered isBlurred={false}>
      <NavbarBrand>
        <p className='font-bold font-serif text-2xl'>Scheduled News</p>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link className='ext-lg leading-7' href='#'>Login (will be implemented)</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

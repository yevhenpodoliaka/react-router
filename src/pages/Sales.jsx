import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const navItems = [
  { href: 'analytics', text: 'Analytics' },
  { href: 'invoices', text: 'Invoices' },
  { href: 'deposits', text: 'Deposits' },
];

const NavItem = styled(NavLink)`
  padding: 8px;
  color: black;
  text-decoration: none;
  &.active {
    color: blue;
  }
`;

const Sales = () => {
  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      <header style={{ borderBottom: '1px solid black', padding: 8 }}>
        <ul style={{ display: 'flex' }}>
          {navItems.map(({ href, text }) => (
            <NavItem key={href} to={href}>
              {text}
            </NavItem>
          ))}
        </ul>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default Sales;

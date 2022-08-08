import styled from 'styled-components';
import {
  BsStack,
  BsWalletFill,
  BsBriefcaseFill,
  BsChatLeftTextFill,
  BsPersonLinesFill,
} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';


const navItems = [
  { href: 'dashboard', text: 'Dashboard', icon: BsStack },
  { href: 'sales', text: 'Sales', icon: BsWalletFill },
  { href: 'reports', text: 'Reports', icon: BsBriefcaseFill },
  { href: 'feedback', text: 'Feedback', icon: BsChatLeftTextFill },
  { href: 'customers', text: 'Customers', icon: BsPersonLinesFill },
];

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  &.active {
    background-color: blue;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color:blue;
  }
`;

export const AppBar = () => {
  return (
    <header
      style={{ padding: 12, height: '100vh', borderRight: '1px solid black' }}
    >
      <nav style={{ display: 'flex', flexDirection: 'column' }}>
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem to={href} key={href}>
            <Icon size="16" />
            {text}
          </NavItem>
        ))}
      </nav>
    </header>
  );
};

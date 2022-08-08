import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getInvoices } from '../../fakeApi';
import { NavLink, Outlet } from 'react-router-dom';

const NavItem = styled(NavLink)`
  padding: 12px;
  text-decoration: none;
  color: black;
  border-radius: 8px;
  &.active {
    background-color: blue;
    color: white;
  }
  :hover:not(.active) {
    color: blue;
  }
`;

 const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices().then(setInvoices);
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <aside
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 12,
          borderRight: '1px solid black',
        }}
      >
        {invoices.map(({ id }) => (
          <NavItem key={id} to={`${id}`}>
            {id}
          </NavItem>
        ))}
      </aside>
      <Outlet />
    </div>
  );
};

export default Invoices;
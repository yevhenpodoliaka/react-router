import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import InvoiceDetails from './Invoices/InvoiceDetails';
import CustomerDetails from 'pages/CustomerDetails';

const Sales = lazy(() => import('pages/Sales'));
const Invoices = lazy(() => import('./Invoices/Invoices'));
const Customers = lazy(() => import('pages/Customers'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="sales" />} />
          <Route path="dashboard" element={<div>dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Sales index route</div>} />
            <Route path="analytics" element={<div>analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<div>Invoices index route</div>} />
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="deposits" element={<div>deposits</div>} />
          </Route>
          <Route path="reports" element={<div>reports</div>} />
          <Route path="feedback" element={<div>feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomerDetails />} />
        </Route>
      </Routes>
    </>
  );
};

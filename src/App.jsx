import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import CompanyDetailsPage from './pages/CompanyDetailsPage';
import AdditionalCompanyDetailsPage from './pages/AdditionalCompanyDetailsPage';
import ProductsPage from './pages/ProductsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
        <Route path="company-details" element={<CompanyDetailsPage />} />
          <Route path="additional-details" element={<AdditionalCompanyDetailsPage />} />
          <Route path="products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </Router>
   
  )
}

export default App

// app/routes/[$locale].portfolio.jsx
import React from 'react';
import Layout from '../../components/Layout';
import PortfolioPage from '../../components/Portfolio/PortfolioPage';

export default function Portfolio() {
  return (
    <Layout>
      <PortfolioPage />
    </Layout>
  );
}

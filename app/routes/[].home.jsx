// app/routes/[$locale].home.jsx
import React from 'react';
import Layout from '../../components/Layout';
import HomePage from '../../components/Home/HomePage';

export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

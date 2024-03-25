// app/routes/[$locale].about.jsx
import React from 'react';
import Layout from '../../components/Layout';
import AboutPage from '../../components/About/AboutPage';

export default function About() {
  return (
    <Layout>
      <AboutPage />
    </Layout>
  );
}

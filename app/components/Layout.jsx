import React from 'react';
import Header from './Header'; // Ensure these paths are correct
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <Header />
      <NavigationBar />
      <main className="container">
        {/* The Outlet component is used here to render the matched nested route component */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

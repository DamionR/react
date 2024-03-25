// src/pages/BlogPage.jsx
import React from 'react';
import BlogListing from '../components/Blog/BlogListing';
// Assume BlogPost is rendered as a separate route for individual posts

export default function BlogPage() {
  return (
    <BlogListing />
    // If you have other components specific to the blog page, insert them here
  );
}

import React from 'react';

function BlogListing({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>No blog posts found.</p>;
  }

  return (
    <section className="blog-listing bg-gray-100 px-4 py-8 rounded shadow-md">
      <h2>Latest Blog Posts</h2>
      <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <BlogListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}

function BlogListItem({ post }) {
  return (
    <li className="blog-list-item bg-white p-4 rounded shadow-md hover:shadow-lg">
      <a href={post.url} className="text-primary font-bold block mb-2">
        {post.title}
      </a>
      <p className="text-gray-700 text-base leading-relaxed">{post.excerpt}</p>
    </li>
  );
}

export default BlogListing;

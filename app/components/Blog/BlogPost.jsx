import React from 'react';

function BlogPost({ post }) {
  if (!post) {
    return <p>Loading blog post...</p>;
  }

  return (
    <article className="blog-post bg-gray-100 px-4 py-8 rounded shadow-md">
      <header className="blog-post-header mb-4">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-gray-700 text-base">Published on {post.publishDate}</p>
      </header>
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

export default BlogPost;

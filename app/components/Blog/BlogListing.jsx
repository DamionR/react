function BlogListing() {
    const posts = [
      { title: 'Understanding React Hooks', excerpt: 'An introduction to React Hooks...' },
      // Add more posts here.
    ];
    
    return (
      <div>
        {posts.map(post => (
          <div key={post.title}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    );
  }
  
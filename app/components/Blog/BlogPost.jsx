function BlogPost({ post }) {
    return (
      <article>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        {/* Render post.content safely, considering XSS protection */}
      </article>
    );
  }
  
  export default BlogPost;
  
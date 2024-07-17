import React from "react";

const BlogPostComponent = ({ params }) => {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
};

export default BlogPostComponent;

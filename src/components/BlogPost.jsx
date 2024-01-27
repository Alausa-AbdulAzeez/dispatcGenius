// BlogPost.js

import React from "react";

const BlogPost = ({ title, content, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-[700px] border-l-[5px] border-l-main-blue">
      <img
        src={image}
        cn
        alt={title}
        className="mb-4 rounded-lg w-[700px] h-[500px]"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default BlogPost;

// BlogPage.js

import React, { useState } from "react";
import BlogPost from "../components/BlogPost";
import BackToTop from "../components/BackToTop";
import Navbar from "../components/Navbar";
import { insights } from "../utils/constants";
import { useLocation } from "react-router-dom";

const truncateText = (text, maxLength) => {
  return text.length > maxLength
    ? text.substring(0, maxLength - 3) + "..."
    : text;
};

const BlogPage = ({ isVisible, scrollToTop }) => {
  const blogPosts = insights;
  const { state } = useLocation();
  console.log(state);
  console.log(state?.index);

  const [currentPostIndex, setCurrentPostIndex] = useState(state?.index - 1);

  const goToNextPost = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
  };

  const goToPreviousPost = () => {
    setCurrentPostIndex(
      (prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length
    );
  };

  const currentPost = blogPosts[currentPostIndex];

  return (
    <div className="bg-[#F5F6FF]">
      {isVisible && <BackToTop scrollToTop={scrollToTop} />}
      <Navbar isVisible={isVisible} pageType={"subPage"} />

      <div className="container pl-[86px] mx-auto pt-[150px] pb-[60px]">
        <h1 className="text-3xl font-bold pb-[50px]">Latest Blog Posts</h1>

        <BlogPost
          title={currentPost.title}
          content={currentPost.content}
          image={currentPost.imgUrl}
        />

        <div className="flex justify-between mt-8">
          <button
            onClick={goToPreviousPost}
            className="bg-gray-300 px-4 py-2 rounded-md"
            disabled={currentPostIndex === 0}
          >
            Previous:{" "}
            {truncateText(
              blogPosts[
                (currentPostIndex - 1 + blogPosts.length) % blogPosts.length
              ].title,
              25
            )}
          </button>
          <button
            onClick={goToNextPost}
            className="bg-gray-300 px-4 py-2 rounded-md"
            disabled={currentPostIndex === blogPosts.length - 1}
          >
            Next:{" "}
            {truncateText(
              blogPosts[(currentPostIndex + 1) % blogPosts.length].title,
              25
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

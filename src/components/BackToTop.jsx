import React from "react";

const BackToTop = ({ scrollToTop }) => {
  return (
    <button
      className="fixed bottom-4 right-4 bg-main-blue text-white px-4 py-2 rounded"
      onClick={scrollToTop}
    >
      Scroll to Top
    </button>
  );
};

export default BackToTop;

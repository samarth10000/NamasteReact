import Header from "./Header";

import React from "react";

const ShimmerUI = () => {
  return (
    <div className="shimmer-container">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="shimmer-card">
          <div className="shimmer-image"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-animation"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUI;

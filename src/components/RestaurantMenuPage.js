import React from "react";
import "../style.css";

const RestaurantMenuPage = () => {
  // Hardcoded data for now
  return (
    <div className="card text-center">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
      <div className="card-footer text-body-secondary">2 days ago</div>
    </div>
  );
};

export default RestaurantMenuPage;

import React from "react";
import { useState } from "react";
import S_Data from "../Components/Flex/S_Data";
import SeriesCard from "../Components/Flex/SeriesCard";
import HeroCarousel from "../Components/HeroSection/HeroClosur.jsx"; // Import Carousel

export default function WebSeries() {
  const [filter, setFilter] = useState("All");
  const filterData =
    filter === "All" ? S_Data : S_Data.filter((web) => web.subtitle === filter);

  return (
    <div className="page-wrapper">
      <HeroCarousel /> {}
      <div className="container">
        <h2 className="text-center mt-3">🎬 Web Series Collection</h2>
        <div style={{ marginBottom: "20px", fontweight:"500",borderRadius:"20px",minWidth:"140px"}}>
          <button className="btn-grp" onClick={() => setFilter("All")}>
            All
          </button>
          <button className="btn-grp" onClick={() => setFilter("Netflix")}>
            NetFlix
          </button>
          <button className="btn-grp" onClick={() => setFilter("Amazon Prime")}>
            Amazon Prime
          </button>
          
          <button className="btn-grp" onClick={() => setFilter("Jio Cenima")}>
            JioCinema
          </button>
          <button className="btn-grp" onClick={() => setFilter("zee five")}>
            ZeeTV
          </button>
          
        </div>

        <div className="row">
          {filterData.map((web) => (
            <SeriesCard key={web.id} web={web} />
          ))}
        </div>
      </div>
    </div>
  );
}
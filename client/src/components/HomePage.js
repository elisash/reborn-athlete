import React from "react";
import CarouselSlides from "./CarouselSlides";
import HomeNav from "./ HomeNav";
import HomeCard1 from "./HomeCard1";
import LoginModal from "./LoginModal";
import HomeCard2 from "./HomeCard2";
import HomeCard3 from "./HomeCard3";
import HomeVenue from "../HomeVenue";
import Background from "./Background";
import Home from "./Home";

export default function HomePage({ setUser }) {
  return (
    <div className="home-page">
      {/* <Background /> */}

      <HomeNav />
      <LoginModal setUser={setUser} />
      <div className="home-home">
        <Home />
        {/* <div className="cards">
  
        <HomeCard1 />

        <HomeCard2 />
        <HomeCard3 />
      </div> */}
        {/* <div className="home-venue">
        <HomeVenue />
      </div> */}
        {/* <CarouselSlides /> */}
      </div>
    </div>
  );
}

{
  /* <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/neww">
        neww
      </NavLink> */
}

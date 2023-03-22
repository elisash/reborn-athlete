import React from "react";
import Intro from "./Intro";
import HomeCard1 from "./HomeCard1";
import HomeCard2 from "./HomeCard2";
import HomeCard3 from "./HomeCard3";
export default function Home() {
  return (
    <div className="home">
      <Intro />
      <div className="cards">
        <HomeCard1 />
        <HomeCard2 />
        <HomeCard3 />
      </div>
    </div>
  );
}

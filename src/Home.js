import React from "react";
// import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  let web = "https://picsum.photos/400/500.jpg";
  return (
    <React.Fragment>
      <Common
        name="  Grow your  business with "
        imgsrc={web}
        visit="/service"
        btnname="Get Started"
      />
    </React.Fragment>
  );
};

export default Home;

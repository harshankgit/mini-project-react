import React from "react";
// import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  let web = "https://picsum.photos/400/501.jpg";

  return (
    <React.Fragment>
      <Common
        name="  Grow your About page"
        imgsrc={web}
        visit="/contact"
        btnname="Contact Now"
      />
    </React.Fragment>
  );
};

export default About;

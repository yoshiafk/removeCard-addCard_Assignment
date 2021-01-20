import React from "react";
import "../../App.css";
import IntSection from "../IntSection";
import Cards from "../Cards";
// import Footer from "../Footer";

class Home extends React.Component {
  render() {
    return (
      <>
        <IntSection />
        <Cards />
        {/* <Footer /> */}
      </>
    );
  }
}

export default Home;

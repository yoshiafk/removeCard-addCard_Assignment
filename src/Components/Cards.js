import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

class Cards extends React.Component {
  render() {
    return (
      <div className="cards">
        <h1>ITZY Members</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="https://pbs.twimg.com/media/ErcbBLYXAAA5pz0?format=jpg&name=large"
                text="Shin Ryu-jin"
                path="/"
              />
              <CardItem
                src="https://pbs.twimg.com/media/EqVVwyvW8AI_0e_?format=jpg&name=large"
                text="Lee Chae-ryeong"
                path="/"
              />
              <CardItem
                src="https://pbs.twimg.com/media/ErXpcKmVcAQ2N91?format=jpg&name=large"
                text="Hwang Ye-ji"
                path="/"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="https://pbs.twimg.com/media/EoyCHSfXIAAxTJa?format=jpg&name=large"
                text="Shin Yu-na"
                path="/yuna"
              />
              <CardItem
                src="https://pbs.twimg.com/media/Eo758AbXUAA3UXw?format=jpg&name=medium"
                text="Choi Ji-su"
                path="/"
              />
            </ul>
          </div>
        </div>
      </div>
      // <div className="cards">
      //   <h1>THE MEMBERS</h1>
      //   <div className="cards__container">
      //     <div className="cards__wrapper">

      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Cards;

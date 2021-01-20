import React from "react";
import { Link } from "react-router-dom";

class CardItem extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "cards__item",
    };
  }
  changeColor = () => {
    this.setState({
      isClick: false,
      color: this.isClick ? "cards__item" : "cards__item cards_pink",
    });
  };
  render() {
    return (
      <>
        <li
          onClick={() => this.changeColor((this.isClick = !this.isClick))}
          className={this.state.color}
        >
          <Link className="cards__item_link" to={this.props.path}>
            <figure className="cards__item__pic-wrap">
              <img
                className="cards__item__img"
                alt="itzy"
                src={this.props.src}
              />
            </figure>
            <div className="cards__item__info">
              <h5 className="cards__item__text">{this.props.text}</h5>
            </div>
          </Link>
        </li>
      </>
    );
  }
}

export default CardItem;

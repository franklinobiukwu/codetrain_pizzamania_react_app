import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="flex-col border-slate-50 border-2 mb-28 pb-10 max-w-min rounded-xl overflow-hidden">
        <div className="pizzaTypeImageWrapper w-72 m-auto mb-2">
          <img src={this.props.imgSrc} alt="pepperoni" />
        </div>
        <div className="pizzaTypeTextWrapper mb-8">
          <h3 className="pizzaName text-xl mb-2 text-center font-medium">
            {this.props.title}
          </h3>
          <p className="text-center px-2">{this.props.text}</p>
        </div>
        <div className="flex justify-center">
          <button type="button" href="/">
            Order now!
          </button>
        </div>
      </div>
    );
  }
}

export default Card;

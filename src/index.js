import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import PizzaTypes from "./components/PizzaTypes";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar imgSrc="./images/pizza-removebg-preview.png" />
    <Carousel />
    <div className="myContent">
      <About
        imgSrc="./images/italian-food-2361054_1920.jpg"
        text="Welcome to Tasty Pizza, where we believe that pizza should always be delicious and easy to order. Our customers rave about our mouth-watering pizzas, made with the freshest ingredients and cooked to perfection. Whether you’re in the mood for a classic Margherita or a bold meat-lover’s pizza, we’ve got you covered.

At Tasty Pizza, we take pride in offering pizzas that people love. From our thin, crispy crusts to our generous toppings and tangy tomato sauce, every pizza we make is designed to delight your taste buds. And with just a click of a button, you can enjoy our awesome goodness from the comfort of your own home.

So what are you waiting for? Order from Tasty Pizza today and see why we’re the go-to choice for pizza lovers everywhere. Our easy online ordering system makes it simple to customize your pizza and get it delivered straight to your door. With Tasty Pizza, you’re just a few clicks away from pizza perfection."
      />
      <PizzaTypes />
    </div>
    <Footer imgSrc="./images/pizza-removebg-preview.png" />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

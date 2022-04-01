import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white">
        <img
          src="https://s33009.pcdn.co/wp-content/uploads/elementor/thumbs/online-shopping-cart-orib6rzyflsmlbh4pat49m4xs2kdzxhee7kjg5n0yi.jpg"
          className="card-img"
          alt="background-img"
          height="550px"
        />

        <div className="card-img-overlay d-flex flex-column justify-content-around ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 ">New Season Arrivals</h5>
            <p className="card-text lead fs-2">
              check out all the trends
            </p>
            {/* <p className="card-text">Last updated 3 mins ago</p> */}
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}

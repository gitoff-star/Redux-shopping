import { Toast } from "bootstrap";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useSelector } from "react-redux";

//import StripeCheckout from 'react-stripe-checkout';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE);
  }
  return stripePromise;
};
export default function Checkout() {
  const [isLoading,setLoading]= useState(false);
  const state = useSelector((state) => state.handleCart);
  useEffect(() => {
    console.log("state: " + state.map((item) => item.title));
  }, [state]);
 
    const item={
      price:"price_1Kkl3jGJp9DFz6PK7BTNb7p3",
      quantity:1
    }

 
  const checkoutOption = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/Products`,
    cancelUrl: `${window.location.origin}/Products`,
  };

  const redirectTocheckout = async () => {
    setLoading(true);
    console.log("state: " + state.map((item) => item.title));
    console.log("redirectcheckout");
    const stripe = await getStripe();
     const { error } = await stripe.redirectToCheckout(checkoutOption);

     
     console.log("stripe error: " + error);
     setLoading(false);
  };

  toast.success("checkout now!", {
    position: "top-left",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

  return (
   <>
   
      <button className="btn btn-outline-primary mb-5 w-25 align-items-center" onClick={redirectTocheckout}>
        {isLoading ? "Loading..":"Proceed to checkout"}
      </button>
    </>
  );
}

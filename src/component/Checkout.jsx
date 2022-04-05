import { Toast } from "bootstrap";
import React, { useEffect } from "react";
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
    
    const state = useSelector((state) => state.handleCart);
    useEffect(() => {
      console.log("state: " + state.map((item) => item.title));
    }, [state]);
    
    const checkoutNow = () => {
        
    };
    const checkoutOption = {
      lineItem: [state],
      mode: "payment",
      success_url: `${window.location.origin}/success`,
      cancel_url: `${window.location.origin}/cancel`,
    };
 
    const redirectTocheckout = async ()=>{
        console.log("redirectcheckout");
        const stripe =await getStripe();
        const {error}=await stripe.redirectTocheckout(checkoutOption);
        console.log("stripe error: "+error);
    }

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
    <div>
     <button className="btn btn-outline-dark" onClick={redirectTocheckout}>test</button>
    </div>
  );
}

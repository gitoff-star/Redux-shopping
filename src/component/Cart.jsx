import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { delCart } from "../redux/action";
import { NavLink } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";


export default function Cart() {
  const state = useSelector((state) => state.handleCart);
  useEffect(() => {
    console.log("state: " + state.map((item) => item.title));
  }, [state]);
  const dispatch = useDispatch();
  
  const handleCart = (product) => {
  
    const data = delCart(product);
    dispatch(data);
   
    toast.success('Deleted succefully!', {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });

  };
  const ShowProducts = () => {
    return (
      <>
        {state.map((product) => {
          return (
            <>
              <div className="container">
                <div className="px-4 my-5 bg-light rounded-3" key={product.key}>
                  <div className="container py-4">
                    <button
                      onClick={() => handleCart(product)}
                      className="btn-close float-end"
                      aria-label="close"
                    ></button>
                    <div className="row justify-content-center">
                      <div className="col-md-4">
                        <img
                          src={product.image}
                          alt={product.title}
                          height="200px"
                          width="180px"
                        />
                      </div>
                      <div className="col-md-4">
                        <h3>{product.title}</h3>
                        <p className=" lead fw-bold">${product.price}</p>
                        {/* <p className=" lead">{product.description  }</p> */}
                        {/* <button onClick={()=>handleCart(product)} className="lead btn btn-primary">remove</button> */}
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </>
          );
        })}
      </>
    );
  };
  const emptyCart = () => {
    return (
      
      <div className="px-4 py-5 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row fw-bold">your cart is empty!</div>
        </div>
      </div>
    );
  };
  const button =()=>{
    return(
    // console.log("button");
    <div className="container">
    <div className="row">
      <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto" >Proceed to checkout</NavLink>
    </div>
  </div>
)  
}
  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !==0 && <ShowProducts/> }
      {state.length !==0 && button()}
    </div>
  );
}

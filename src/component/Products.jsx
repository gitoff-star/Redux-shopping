import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { toast } from "react-toastify";
import { Button } from "bootstrap";


export default function Products() {
  const [data, setData] = useState();
  const [filter, setFilter] = useState();
  const [loading, setLoading] = useState();
  let componentMounted = true;


  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
     // console.log('api requesting');
      const response = await fetch("https://fakestoreapi.com/products");
      console.log('response :',response);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      //  console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  
  const Loading = () => {
    return (  //skeletons
        <>
    
    
      <div className="col-md-3">
        <Skeleton height={450}/>
     
      </div>
      <div className="col-md-3">
        <Skeleton height={450}/>
     
      </div>
      <div className="col-md-3">
        <Skeleton height={450}/>
     
      </div>
      <div className="col-md-3">
        <Skeleton height={450}/>
      </div>
      <div className="col-md-3">
        <Skeleton height={450}/>
     
      </div>
      <div className="col-md-3">
        <Skeleton height={450}/>
     
      </div>
      <div className="col-md-3">
        <Skeleton height={450}/>
     
      </div>
      <div className="col-md-3">
        <Skeleton height={450}/>
      </div>
      
      </>
    );
  };
  const filterProduct=(cat)=>{
      console.log('check category'+cat);
        const updatedlist= data.filter((x)=>x.category===cat);
        setFilter(updatedlist);
  }
  const dispatch = useDispatch();
  const addProduct = (product) => {
  const data = addCart(product);
  toast.success('Product Added!', {
    position: "top-left",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

    dispatch(data);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons justify-content-center mb-5 pb-5 flex-wrap">
          <button className="btn btn-outline-dark space-between" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark space-between" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark space-between" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark space-between"onClick={()=>filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark space-between"onClick={()=>filterProduct("electronics")}>Electronics</button>
        </div>
        {filter==null? <Loading />:  filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4 ">
                <div class="card h-100 p-4 text-center" key={product.id}>
                <NavLink to={`/product/${product.id}`}>
                  <img src={product.image} class="card-img-top " style={{objectFit:'contain'}}  alt={product.title} height='200' width='200' />
                  </NavLink>
                  <div class="card-body">
                    <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                    <p class="card-text lead fw-bold">
                     ${product.price}
                    </p>
                    <NavLink to={`/product/${product.id}`} class="btn btn-outline-dark space-between ">
                      Retail
                    </NavLink>
                    <button className="btn btn-outline-dark" onClick ={() => addProduct(product)}>Add to cart</button>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    )
  }
  return (
    <div className="container my-5 py-5">
      <div className="row mb-5">
        <div className="col-12 fw-bolder display-6 text-center ">
          <h1>Latest products</h1>
          <hr />
          <div className="row justify-content-center">
          
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
}

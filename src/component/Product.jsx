import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      //  console.log(product);
      //  console.log(response.json);
      setLoading(false);
    };
    getProduct();
  }, []);

  const dispatch = useDispatch();
  const addProduct = (product) => {
  const data = addCart(product);
    dispatch(data);
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} width={500} />
          <Skeleton height={30} width={200} />
          <Skeleton height={30} width={100} />
          <Skeleton height={30} width={200} />
          <Skeleton height={30} width={400} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="col-md-6" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            height="450"
            width="450"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <p className="lead fw-normal">{product.description}</p>
          <h3 className="display-3 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.discription}</p>
          <button className="btn btn-outline-dark" onClick ={() => addProduct(product)}>Add to cart</button>
          <NavLink
            to="/cart"
            className="btn btn-outline-dark"
           
          >
            Go to cart
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div className="container ">
      <h1>Product detail</h1>
      <hr />
      <div className="row ">{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Layout from './../components/Layout/Layout';
import axios from 'axios';
import { useCart } from '../Context/cart';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';
import './Styles/ProductDetails.css';
import API_URL from '../config/api';

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useCart();
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initail details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/api/v1/product/get-product/${params.slug}`,
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${API_URL}/api/v1/product/related-product/${pid}/${cid}`,
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row product-details">
          <div className="col-md-6">
            <img
              src={`${API_URL}/api/v1/product/product-photo/${product._id}`}
              className="card-img-top"
              alt={product.name}
              height="300"
              width="250px"
            />
          </div>
          <div className="col-md-6 product-details-info">
            <div className="row">
              <div className="col">
                <h1 className="text-center">Product Details</h1>
                <hr />
                <h6>Name : {product.name}</h6>
                <h6>Description : {product.description}</h6>
                <h6>
                  Price :
                  {product?.price?.toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                  })}
                </h6>
                <h6>Category : {product?.category?.name}</h6>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  className="btn btn-dark ms-1"
                  onClick={() => {
                    setCart([...cart, product]);
                    localStorage.setItem(
                      'cart',
                      JSON.stringify([...cart, product]),
                    );
                    toast.success('Item Added to cart');
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="mb-4">Similar Products ➡️</h4>
          </div>
        </div>
        {relatedProducts.length < 1 && (
          <div className="row">
            <div className="col">
              <p className="text-center">No Similar Products found</p>
            </div>
          </div>
        )}
        <div className="row">
          {relatedProducts?.map((p) => (
            <div className="col-md-3 mb-4" key={p._id}>
              <div className="card">
                <img
                  src={`${API_URL}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                    })}
                  </h5>
                  <p className="card-text">
                    {p.description.substring(0, 52)}...
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-info"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    {/* Add to Cart button */}
                    <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, product]);
                        localStorage.setItem(
                          'cart',
                          JSON.stringify([...cart, product]),
                        );
                        toast.success('Item Added to cart');
                      }}
                    >
                      ADD TO BAG
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;

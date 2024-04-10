import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../Context/auth';
import { useCart } from '../Context/cart';
import { Prices } from '../components/Prices';
import { AiOutlineReload } from 'react-icons/ai';
import { Checkbox, Radio } from 'antd';
import toast from 'react-hot-toast';
import axios from 'axios';
import './Styles/HomePage.css';
import API_URL from '../config/api';
const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/api/v1/category/get-category`,
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  //getTotal Count
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/api/v1/product/product-count`,
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${API_URL}/api/v1/product/product-list/${page}`,
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${API_URL}/api/v1/product/product-list/${page}`,
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd products
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        `${API_URL}/api/v1/product/product-filters`,
        {
          checked,
          radio,
        },
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={'All Products - Best offers'}>
      <div className="container-fluid mt-5 home-page">
        <div className="row">
          {/* Filters */}
          <div className="col-md-3 col-lg-2">
            <div className="filters border rounded p-3">
              {/* Category filter */}
              <h5 className="text-center">Filter By Category</h5>
              {categories?.map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}

              {/* Price filter */}
              <h5 className="text-center mt-4 mb-3">Filter By Price</h5>
              <div className="d-flex flex-column">
                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                  {Prices?.map((p) => (
                    <div key={p._id}>
                      <Radio value={p.array}>{p.name}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </div>

              {/* Reset filters button */}
              <div className="d-grid gap-2 mt-4">
                <button
                  className="btn btn-danger"
                  onClick={() => window.location.reload()}
                >
                  RESET FILTERS
                </button>
              </div>
            </div>
          </div>

          {/* Product Cards */}
          <div className="col-md-9 col-lg-10">
            <h1 className="text-center mb-4">All Products</h1>
            <div className="row">
              {products?.map((p) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                  key={p._id}
                >
                  <div className="card h-100">
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <div className="card-name-price d-flex justify-content-between mb-2">
                        <h5 className="card-price">
                          {p.price.toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                          })}
                        </h5>
                      </div>
                      <p className="card-text">
                        {p.description.substring(0, 52)}...
                      </p>
                      <div className="d-flex">
                        <button
                          className="btn btn-info btn-sm mx-1 "
                          onClick={() => navigate(`/product/${p.slug}`)}
                        >
                          More Details
                        </button>
                        <button
                          className="btn btn-dark btn-sm"
                          onClick={() => {
                            setCart([...cart, p]);
                            localStorage.setItem(
                              'cart',
                              JSON.stringify([...cart, p]),
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

            {/* Load more button */}
            <div className="text-center mt-4">
              {products && products.length < total && (
                <button
                  className="btn loadmore"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? (
                    'Loading ...'
                  ) : (
                    <>
                      Load More <AiOutlineReload />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

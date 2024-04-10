import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Authstyles.css';
import toast from 'react-hot-toast';
import Layout from '../../components/Layout/Layout';
import { useAuth } from '../../Context/auth';
import { useNavigate, useLocation } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // form function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${REACT_APP_API}/api/v1/auth/login`, {
        email,
        password,
      });
      if (res && res.data.success) {
        setTimeout(() => {
          toast.success(res.data && res.data.message);
        }, 500);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate(location.state || '/');
      } else {
        setTimeout(() => {
          toast.error(res.data.message);
        }, 500);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <Layout title={'Login - Shopito'}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="mb-4 text-center">LOGIN FORM</h1>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mt-3"
              id="exampleInputEmail1"
              placeholder="email"
              required
              aria-describedby="emailHelp"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="form-control mt-3"
              required
              id="exampleInputPassword1"
            />
          </div>

          <button
            type="submit"
            onClick={() => {
              navigate('/forgot-password');
            }}
            className="btn btn-primary mt-3"
          >
            Forgot Password
          </button>

          <button type="submit" className="btn btn-primary mt-3">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;

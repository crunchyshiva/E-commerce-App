import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Authstyles.css';
import toast from 'react-hot-toast';
import Layout from '../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  // form function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/register', {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        setTimeout(() => {
          toast.success(res.data && res.data.message);
        }, 500);
        navigate('/login');
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
    <Layout title={'Register - Shopito'}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="mb-4 text-center">REGISTER FORM</h1>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control mt-3"
              placeholder="UserName"
              id="exampleInputName"
              required
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mt-3"
              id="exampleInputEmail1"
              placeholder="Email"
              required
              aria-describedby="emailHelp"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="form-control mt-3"
              required
              id="exampleInputPassword1"
            />

            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control mt-3"
              placeholder="Phone"
              required
              id="exampleInputnumber"
            />

            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control mt-3"
              placeholder="Address"
              required
              id="exampleInputAddress"
            />

            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control mt-3"
              placeholder="What is your favorite sports"
              required
              id="exampleInputAnswer"
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;

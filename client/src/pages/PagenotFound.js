import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const PagenotFound = () => {
  return (
    <Layout title={'Go back - page not found'}>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 offset-md-3 text-center">
            <div className="notfound">
              <div className="notfound-404">
                <h1 className="display-1">404</h1>
              </div>
              <h2 className="text-uppercase">We are sorry,Page not found</h2>
              <p className="mb-5">
                The page you are looking for might have been removed, its name
                changed, or is temporarily unavailable.
              </p>
              <NavLink to="/" className="btn btn-primary btn-lg">
                Back to Home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PagenotFound;

import React from 'react';
import Layout from '../components/Layout/Layout';
import image from '../Assests/images/about-image.jpg';

const About = () => {
  return (
    <Layout title={'About-Us Shopit'}>
      <div className="container py-5">
        <div className="row">
          {/* First Row: Image on Left, Paragraph on Right */}
          <div className="col-md-6 mb-4">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="electronic store"
              className="w-100 "
            />
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-light rounded-lg">
              <h2 className="mb-4">Welcome to Shopit</h2>
              <p className="mb-3">
                Welcome to our online electronic store, where we offer the
                latest and greatest in technology. Our mission is to provide our
                customers with the best possible products and services. We have
                a team of experts who are always ready to assist you in finding
                the perfect product to suit your needs.
              </p>
              <p className="mb-3">
                At our store, we prioritize customer satisfaction above
                everything else. We take pride in our exceptional customer
                service and make sure that each and every customer is satisfied
                with their purchase. We are committed to providing the highest
                quality products and services and strive to create an enjoyable
                shopping experience for our customers.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {/* Second Row: Paragraph on Left, Image on Right */}
          <div className="col-md-6 order-md-1 mb-4">
            <div className="p-4 bg-light rounded-lg">
              <h2 className="mb-4">Our Commitment</h2>
              <p className="mb-3">
                As the founder and CEO of an online electronic store, I am
                committed to providing customers with the highest quality
                products and services. We strive to create an enjoyable shopping
                experience for our customers, while also ensuring that our
                products are competitively priced and delivered in a timely
                manner.
              </p>
              <p className="mb-3">
                My team and I are dedicated to providing excellent customer
                service and making sure that our customers are satisfied with
                their purchases. We are constantly looking for ways to improve
                our store and make sure that our customers have the best
                possible experience.
              </p>
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <img
              src={image}
              alt="electronic store"
              className="w-100 rounded-lg"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

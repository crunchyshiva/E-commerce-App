import React from 'react';
import Layout from '../components/Layout/Layout';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';
import photo from '../Assests/images/contact-page.jpg';
import './Styles/contact.css';

const ContactPage = () => {
  return (
    <Layout title={'Contact us'}>
      <div className="contact-page">
        <div className="contact-header">
          <h1 className="text-white text-center">CONTACT US</h1>
        </div>
        <Container>
          <Row className="mt-5">
            <Col md={6} className="mb-5">
              <Image src={photo} fluid />
            </Col>
            <Col md={6}>
              <div className="contact-info">
                <p className="text-justify">
                  For any queries or information about our products, feel free
                  to call us anytime. We're available 24/7.
                </p>
                <p className="contact-detail">
                  <BiMailSend /> :{' '}
                  <a href="mailto:support@shopito.com">support@shopito.com</a>
                </p>
                <p className="contact-detail">
                  <BiPhoneCall /> : <a href="tel:+123456789">+123456789</a>
                </p>
                <p className="contact-detail">
                  <BiSupport /> : 1800-0000-0000 (toll free)
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default ContactPage;

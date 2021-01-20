import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Contact() {
  return (
    <>
      <Header />
      <div className="contact-area img-fluid ">
        <div className="our-products">
          <h1 style={{ marginTop: '100px', color: 'white' }}>Contact Us</h1>
        </div>
      </div>
      <section className="contact- p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12 col-sm-12 get-in-touch">
              <h1>get in touch</h1>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control mt-3 w-75"
                    placeholder="Enter your name"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control mt-3 w-75"
                    placeholder=" Email"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control mt-3 w-75"
                    placeholder=" Enter subject"
                    id="exampleInputPassword1"
                  />
                </div>
                <textarea
                  rows="5"
                  cols="20"
                  className="form-control mt-3 w-75"
                  placeholder=" Enter subject"
                  id="exampleInputPassword1"
                >
                  Enter message
                </textarea>

                <button type="submit" className="submit-btn p-1 mt-4 ">
                  Submit{' '}
                </button>
              </form>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="loc">
                <span className="icon-home p-2">
                  <i className="fas fa-house-user"></i>
                </span>
                <p>
                  Shantinagar, kathmadu. <br />
                  Opposite to om kareshowri  <br />
                  Mandir
                </p>
              </div>
              <div className="loc">
                <span className="icon-home p-2">
                  <i className="fas fa-mobile-alt"></i>
                </span>
                <p>
                  +977-9860398071 <br />
                  Sun to Fri 9am to 6pm
                </p>
              </div>
              <div className="loc local-last p-2">
                <span className="icon-home ">
                  <i className="far fa-envelope"></i>
                </span>
                <p>
                  guras@farmersmarketnepal.com <br />
                  Send us your query anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <div className="containeR-fluid  p-5" style={{ background: 'gray' }}>
          <img src="/assest/map.PNG" className="img-fluid" alt="no map found" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;

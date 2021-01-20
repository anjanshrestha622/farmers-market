import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';


function About() {
  return (
    <>
    <Header/>
     <div className="about-area img-fluid ">
     <div className="our-products">
                        <h1 style={{marginTop:'100px', color:'white' }}>About Us</h1>
                    </div>
      </div>
      <section className="About-us p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-md-6 p-3">
              <h1>About Us</h1>
              <p>
                Farmers Markets Nepal is an online order & delivery service by
                Cloud Foods Pvt Ltd. bringing you your favourite fresh bakery
                and farmers food items delivered directly to your door in
                Kathmandu.
              </p>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6 p-5">
              <img
                src="/assest//about-logo.jpg"
                className="img-fluid"
                height="300px"
                width="400px"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="customers-saying">
        <div className="container cust-part ">
          <h1>our customer's say</h1>
          <p>“I love buying fresh for my family AND supporting our local farmers & vendors!” </p>
        </div>
      </section>
      <Footer/>

    </>
  );
}

export default About;

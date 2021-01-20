import React from 'react';
import Button from '../../components/Button';
import Farmerimg from '../../assest/kisan.jpg';
import Farmerimg1 from '../../assest/f.jpg';
import Farmerimg2 from '../../assest/t.jpg';
import Data from '../../data.json';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Home() {
  return (
    <>
      <Header />
      <div className="header-area img-fluid ">
        <video id="myVideo" autoPlay muted loop >
          <source src="/assest/farmermarketvideo.mp4" type="video/mp4" />
        </video>
        <div className=" container ">
          <div className="row overlay p-5">
          <div className="col-md-6 col-lg-6 col-sm-12 sologan-text ">
            <div className="hero-part p-5">
            <h1
              className=" animated slideInLeft animate__delay-50s  "
            >
              You cant buy happiness, <br /> but you can buy local food <br />{' '}
              and that's kind of the <br /> same thing
            </h1>
            <button type="button" className="btn hero-btn  ">Get started</button>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 carousel-style">
            <div className="hero-picture p-5">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Farmerimg} className="d-block w-100" alt="no img" />
                </div>
                <div className="carousel-item">
                  <img
                    src={Farmerimg1}
                    className="d-block w-100"
                    alt="no img"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Farmerimg2}
                    className="d-block w-100"
                    alt="no img"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
      <section className="latest-product">
        <div className="container ">
          <div className="row">
            <h1 className="latestProduct-title"> Latest Product</h1>
            <div className="col-md-12  col-sm-12 col-lg-12 Product">
              <div className="col-style row">
                {Data.map((post) => {
                  return (
                    <div className="col-md-4 col-sm-6 col-lg-3  ">
                      <div className="product-item-style">
                        <img
                          className="img-fluid product-img"
                          src={post.img}
                          alt=""
                        />
                        <h3>{post.title}</h3>
                        <p className="post-content">{post.content}</p>
                        <div className="btn-price">
                          <p>{post.price}</p>
                          <Button />
                          {/* <Modal  /> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container farmersMarket-nepal">
        <div className="row">
          <div className="col-md-6">
            <h1>FarmersMarket</h1>
            <div className="col-md-12">
              <p>
                Farmers Market Nepal is an online platform where you can find
                locally produced, trusted artisanal foods. Order and get your
                favourite locally made food package delivered right to your
                doorstep. We are a farm to fork online solution bridging the gap
                between farmers across Nepal, local producers and consumers. We
                thrive in bringing you a selection of high quality items from
                trusted sources and producers.
              </p>
              <p>
                Farmers Market Nepal’s delivery is operated by Cloud Foods Pvt
                Ltd. Sign Up Hereto get updates on new products and ideas on how
                to prepare and eat these locally treats.
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <span className="veg-img">
                  <i className="fas fa-seedling"></i> Expert Farmers
                </span>
              </div>
              <div className="col-md-6">
                <span className="veg-img">
                  <i className="fas fa-apple-alt"></i> Fresh Ingredients
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 farmersMarket-img">
            <img className='img-fluid'
              src="./assest/farmer.jpg"
              
            />
          </div>
        </div>
      </div>

      <section className="product-section">
        <div className="col-md-12  col-sm-12 col-lg-12 Product">
          <h1 class="popular-products">popular product</h1>
          <div className="col-style row">
            {Data.map((post) => {
              return (
                <div className="col-md-4 col-sm-6 col-lg-3  ">
                  <div className="product-item-style">
                    <img
                      className="img-fluid product-img"
                      src={post.img}
                      alt=""
                    />
                    <h3>{post.title}</h3>
                    <p  className='post-content'>{post.content}</p>
                    <div className="btn-price">
                      <p>{post.price}</p>
                      <Button />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="work-section">
        <div className=" container how-it-work">
          <div className="row">
            <h1 className="work-part">How IT Works</h1>
            <div className="col-md-3 col-sm-12 col-lg-3 work-card">
              <div className="item-slider">
                <span className="text-body">
                  <h1 className="step-count">01</h1>
                  <h3 className="main-title">Find Your Market</h3>
                  <p className="sub-title">
                    Find your local market at gurasFarmer'sMarket.com
                  </p>
                </span>
              </div>
              <figure className="figure-part">
                <img
                  src="./assest//clipfarmer.jpg"
                  className="img-fluid"
                  alt="no img"
                />
              </figure>
            </div>
            <div className="col-md-3 col-sm-12 col-lg-3 work-card">
              <div className="item-slider">
                <span className="text-body">
                  <h1 className="step-count">02</h1>
                  <h3 className="main-title">Find Your Market</h3>
                  <p className="sub-title">
                    Find your local market at gurasFarmer'sMarket.com
                  </p>
                </span>
              </div>
              <figure className="figure-part">
                <img
                  src="./assest//tactor.jpg"
                  className="img-fluid"
                  alt="no img"
                />
              </figure>
            </div>
            <div className="col-md-3 col-sm-12 col-lg-3 work-card">
              <div className="item-slider">
                <span className="text-body">
                  <h1 className="step-count">03</h1>
                  <h3 className="main-title">Find Your Market</h3>
                  <p className="sub-title">
                    Find your local market at gurasFarmer'sMarket.com
                  </p>
                </span>
              </div>
              <figure className="figure-part">
                <img
                  src="./assest//clipfarmerwife.jpg"
                  className="img-fluid"
                  alt="no img"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section
        className="hightled-images-products "
        style={{ padding: ' 40px' }}
      >
        <div className="container highlighted-img">
          <div className="row">
            <div className="col-md-2 hightlights-image">
              <img
                src="/assest/farmerhoseclip.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-2 hightlights-image">
              <img
                src="/assest/clipfarmerwife.jpg"
                height="110px"
                width="100%"
                alt=""
              />
            </div>
            <div className="col-md-2 hightlights-image">
              <img src="/assest/tactor.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-2 hightlights-image">
              <img
                src="/assest/farmerhoseclip.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-2 hightlights-image">
              <img
                src="/assest/clipfarmer.jpg"
                height="110px"
                width="100%"
                alt=""
              />
            </div>
            <div className="col-md-2 hightlights-image">
              <img src="/assest/tactor.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;

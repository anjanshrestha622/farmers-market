import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Blog() {
  return (
    <>
    <Header/>
      <section className="header-blog  mb-5">
        <div className="our-blog">
          <h1 >our blog</h1>
        </div>
      </section>
      <section>
          <div className="container">
              <div className="row">
                      <div className="col-md-6 col-sm-6 col-lg-6 blog-post">
                          <h1>Events</h1>
                          <p>Save the date for our upcoming Eco-Ag Conference & Trade Show on Dec. 1-4, 2021. This virtual event will feature experienced speakers in the world of regenerative agriculture. Get the chance to ask them your questions live and network with fellow peers. Join us for our most affordable price yet! Learn more.</p>
                           <p>Get replays of past events:
                               <li><a href="/healthysoil">
                               Healthy Soil Summit</a> </li>
                               <li><a href="/healthysoil">
                               Advancing Industrial Hemp</a> </li>
                             </p> 
                           <button type="button" className="btn btn-success">guras Events</button>  
                      </div>
                      <div className="col-md-6 col-sm-6 col-lg-6 blog-post">
                        <img src="/assest/kisan.jpg" className='img-fluid' height='300px' width='100%' alt=""/>
                       </div>
                      <div className="col-md-6 col-sm-6 col-lg-6 blog-post">
                        <img className='blog-post-img' src="/assest/book.PNG"   alt=""/>
                       </div>
                       <div className="col-md-6 col-sm-6 col-lg-6 blog-post">
                       <h1>The Guras KTM Bookstore</h1>
                          <p>Founded in 2019, our books, audio lectures and videos have helped thousands of farmers build healthy soil and successful farms.</p>
                          
                           <button type="button" className="btn btn-success m-2 p-3">guras Books Title</button>  
                           <button type="button" className="btn btn-success m-2 p-3">guras Books Audio</button>  
                      </div>
                      <div className="col-md-6 col-sm-6 col-lg-6 blog-post">
                          <h1>Guras KTM Magazine</h1>
                          <p>Learn proven tactics that deliver real economical and ecological results, delivered monthly for just $39/year for print & digital for U.S. residents.</p>
                           
                           <button type="button" className="btn btn-success m-2 p-3">Subscribe</button>  
                           <button type="button" className="btn btn-danger  m-2 p-3">About   </button>  
                      </div>
                      <div className="col-md-6col-sm-6 col-lg-6 blog-post">
                        <img src="/assest/magazines.jpg" className='img-fluid' height='300px' width='100%' alt=""/>
                       </div>
                      <div className="col-md-6 col-sm-6 col-lg-6 blog-post">
                        <img className='blog-post-img' src="/assest/sale.jpg"   alt=""/>
                       </div>
                       <div className="col-md-6 col-sm-6 col-lg-6 blog-post">
                       <h1>Advertising</h1>
                          <p>We offer custom packages that fit your business size and goals. Contact us today to reach real farmers, growers and ranchers.</p>
                          
                           <button type="button" className="btn btn-success m-2 p-3">learn more</button>  
                      </div>
              </div>
          </div>
      </section>
    <Footer/>
    </>
  );
}

export default Blog;

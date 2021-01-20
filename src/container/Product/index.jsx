import React, { useContext } from 'react';
import Data from '../../data.json';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Product() {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState({});

  const openModal = (post) => {
    setShowModal(!showModal);
    setItems({});
    // console.log('clicked', showModal);
    // console.log(items ,'items')
  };
  return (
    <div>
      <Header />

      <Modal items={items} showModal={showModal} setShowModal={setShowModal} />
      <div className="product-area img-fluid p-5"> </div>

      <section className="product-main latest-product ">
        <div className="container ">
          <div className="row">
            <div className="different-button col-lg-12 col-md-12 col-sm-6">
              <button type="button" className="btn-lg product-btn1">
                All Products
              </button>
              <Link to="/vendor">
                <button type="button" className="btn-lg product-btn">
                  Filter by Vendors
                </button>
              </Link>
              <button type="button" className="btn-lg product-btn">
                Filter by category
              </button>
            </div>
            <div className="all-products container">
              <h1>All products</h1>
            </div>
            <section>
            <img
            src="https://via.placeholder.com/400x100?text=advertisment-part"
            className="img-fluid  checkout"
            alt="no image"
        />
            </section>
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
                          <button
                            onClick={() => {
                              openModal();
                              setItems({
                                title: post.title,
                                img: post.img,
                                content: post.content,
                                price: post.price,
                                id: post.id,
                              });
                              // console.log(items)
                            }}
                            className="Add-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <span className="product-card">
                              ADD <i className="fas fa-shopping-cart"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="pagination col-md-12 col-sm-12 col-lg-12 justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item prev-nxt-btn ">
                      <a className="page-link " href="#" tabindex="-1">
                        Previous
                      </a>
                    </li>
                    <li className="page-item ">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        5
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        6
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        7
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        8
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        9
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        10
                      </a>
                    </li>

                    <li className="page-item prev-nxt-btn">
                      <a className="page-link " href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Product;

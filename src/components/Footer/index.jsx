import React from 'react'

function Footer() {
    return (
        <div>
            <div className="footer container-fluid">
                <div className="row">
                    <div className="col-md-4  col-sm-12 col-lg-4">
                        <h3>Farmers Market Nepal</h3>
                        <p>paniphokari,<br />opposite to japanes embassy <br />
                            +98675698881 <br />
                                info@farmermarketsnepal.com
                         </p>
                        <span className="social-media-icon">
                            <ul >
                                <li className="icon-part">
                                    <a href="/facebook"><i className="fab fa-facebook"></i></a>
                                </li>
                                <li className="icon-part">
                                    <a href="/facebook"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li className="icon-part">
                                    <a href="/facebook"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </span>
                    </div>
                    <div className="col-md-4  col-sm-12 col-lg-4 useful-link">
                        <h3>Useful Links</h3>
                        <ul className="useful-link-ul">
                            <li className="useful-link">
                                <a href="/products">Products</a>
                            </li>
                            <li className="useful-link">
                                <a href="/About">About</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12 col-lg-4">
                        <h3>Subscribe</h3>
                        <form className=" subs-search-box">
                            <input className="form-control subs-search-box" type="search" placeholder="Enter your mail" aria-label="Search" />
                            <button className="subscribe-btn" type="submit">Subscribe</button>
                        </form>
                        <p >To get updates on new products and ideas on how to prepare and eat these locally treats.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;

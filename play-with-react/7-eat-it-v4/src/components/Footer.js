import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h5>Contact Address</h5>
                            <address>
                                #999 street, <br />  city, <br /> country.
                            </address>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="col-md-5">&copy; 2015 </div>
                        <div className="col-md-7">
                            <ul className="footer-nav">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contacts</a></li>
                                <li><a href="Link.html">Link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
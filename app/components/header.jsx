"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Header = () => {

    const router = useRouter();

    const [mobileMenu, setMobileMenu] = useState("hide");

    const currentYear = new Date().getFullYear();


    return (
        <>

            <header id="site_header" className={`header ${mobileMenu === 'hide' ? 'mobile-menu-hide' : ''}`}>
                <div className="header-content">
                    <div className="header-photo">
                        <div className="image-wrapper">
                            <Image src="/assets/images/main_photo.jpg" alt="" layout="responsive" width={100} height={100} />
                        </div>
                    </div>
                    <div className="header-titles">
                        <h2>Suhas Nidgundi</h2>
                        <h4>Web Designer</h4>
                    </div>
                </div>

                <ul className="main-menu">
                    <li className="active">
                        <Link href="/" className="nav-anim">
                            <span className="menu-icon lnr lnr-home"></span>
                            <span className="link-text">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/aboutMe" className="nav-anim">
                            <span className="menu-icon lnr lnr-user"></span>
                            <span className="link-text">About Me</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume" className="nav-anim">
                            <span className="menu-icon lnr lnr-graduation-hat"></span>
                            <span className="link-text">Resume</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className="nav-anim">
                            <span className="menu-icon lnr lnr-briefcase"></span>
                            <span className="link-text">Portfolio</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="nav-anim">
                            <span className="menu-icon lnr lnr-book"></span>
                            <span className="link-text">Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contactMe" className="nav-anim">
                            <span className="menu-icon lnr lnr-envelope"></span>
                            <span className="link-text">Contact</span>
                        </Link>
                    </li>
                </ul>

                <div className="social-links">
                    <ul>
                        <li><Link href="/" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                        <li><Link href="/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                    </ul>
                </div>

                <div className="header-buttons">
                    <Link href="/" target="_blank" className="btn btn-primary">Download CV</Link>
                </div>

                <div className="copyrights">
                    &copy; {currentYear} All rights reserved.
                </div>
            </header>

            {/* Mobile Navigation */}
            <div
                className={`menu-toggle ${mobileMenu}`}
                onClick={() => setMobileMenu(mobileMenu === 'hide' ? 'open' : 'hide')}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* <!-- Arrows Nav --> */}
            <div className="lmpixels-arrows-nav">
                <div onClick={() => { router.forward(); }} className="lmpixels-arrow-right"><i className="lnr lnr-chevron-right"></i></div>
                <div onClick={() => { router.back(); }} className="lmpixels-arrow-left"><i className="lnr lnr-chevron-left"></i></div>
            </div>
            {/* <!-- End Arrows Nav --> */}
        </>
    );
};

export default Header;

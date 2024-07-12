import React, { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const Header = () => {
    

    useEffect(() => {
        const tl = gsap.timeline({ paused: true, reversed: true });
        tl.to(".box", {
            height: "100vh",
            duration: 0.5,
            transformOrigin: "bottom",
            stagger: 0.3
        });
        tl.to(".mobile-logo", { opacity: "1" });
        tl.to(".nav-main__content", {
            opacity: "1",
            visibility: "visible",
            yPercent: -5,
            duration: 0.5,
            transformOrigin: "bottom",
            stagger: 0.3
        });

        const navIcon = document.querySelector(".nav-icon");
        navIcon.onclick = function () {
            if (tl.reversed()) {
                this.classList.add("nav-anim");
                tl.play();
                document.body.classList.add("noScroll");
            } else {
                this.classList.remove("nav-anim");
                tl.reverse();
                document.body.classList.remove("noScroll");
            }
        };

        const allLinks = document.querySelectorAll(".list__item a");

        allLinks.forEach(link => {
            link.addEventListener("click", () => {
                document.body.classList.remove("noScroll");
                tl.reverse();
                navIcon.classList.remove("nav-anim");
            });
        });
    }, []);

    

    return (
        <section className="header_page">
            <img className="bg" src="/img/svg/home-bg.svg" alt="background" />
            <h5 className="heading">HI THERE👋, I’M</h5>
            <div className="text-con">
                <div className="name">Dani Jounblat</div>
            </div>
            <h3 className="developer">WEB DEVELOPER + DESIGNER 👨‍💻</h3>
            <h6 className="about-text">Based In Beirut, Lebanon 🇱🇧</h6>
            <Link href="#contact" passHref legacyBehavior>
                <button className="hire-me-button">HIRE ME</button>
            </Link>

            <div className="nav-container">
                <div className="nav-icon">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <nav className="nav-main">
                    <div className="box-wrapper">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <img
                        className="mobile-logo"
                        src="/img/name.png"
                        alt="dani logo mobile"
                    />
                    <div className="nav-main__content">
                        <div className="nav-main__content--box">
                            <h4 className="heading-4">on the web</h4>
                            <div className="social-links">
                                <div className="social-links--box">
                                    <a href="https://github.com/DaniJounblat1">
                                        <img
                                            src="/img/svg/github.svg"
                                            alt="github"
                                        />
                                    </a>

                                    <a href="https://www.linkedin.com/in/dani-jounblat-b80075301">
                                        <img
                                            src="/img/svg/linkedin.svg"
                                            alt="linkedin"
                                        />
                                    </a>
                                    <a href="https://www.instagram.com/dani.jounblat?igsh=OXBvbjI5N2w5YTly">
                                        <img
                                            src="/img/svg/instagram.svg"
                                            alt="instagram"
                                        />
                                    </a>
                                </div>
                            </div>
                            <a
                                className="resume"
                                href="/img/danijounblat.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume 📗
                            </a>
                        </div>
                        <div className="nav-main__content--box">
                            <h4 className="heading-4">navigation</h4>
                            <ul className="list">
                                <li className="list__item">
                                    <Link href="#" passHref legacyBehavior>
                                        <a className="list__link">Home</a>
                                    </Link>
                                </li>
                                <li className="list__item">
                                    <Link href="#about" passHref legacyBehavior>
                                        <a className="list__link">About</a>
                                    </Link>
                                </li>
                                <li className="list__item">
                                    <Link
                                        href="#projects"
                                        passHref
                                        legacyBehavior
                                    >
                                        <a className="list__link">Projects</a>
                                    </Link>
                                </li>
                                <li className="list__item">
                                    <Link
                                        href="#contact"
                                        passHref
                                        legacyBehavior
                                    >
                                        <a className="list__link">Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className="nav-sub">
                    <picture>
                        <source
                            media="(max-width:37.5em)"
                            srcSet="/img/name.png"
                        />
                        <img
                            src="/img/name.png"
                            alt="my logo"
                            className="logo"
                        />
                    </picture>
                </nav>
                
            </div>
        </section>
    );
};

export default Header;

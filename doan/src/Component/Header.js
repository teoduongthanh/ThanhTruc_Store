import React from "react";
// icon login vs logout
import { NavLink, Link} from "react-router-dom";

import { FaShoppingBag } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
    
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');
        const navMenu = document.getElementById('nav-menu');
        const navLink = document.querySelectorAll(".nav__link");

        if(navToggle){
            navToggle.addEventListener('click', () =>{
                navMenu.classList.add('show-menu')
            })
        }
        
        /*===== MENU HIDDEN =====*/
        /* Validate if constant exists */
        if(navClose){
            navClose.addEventListener('click', () =>{
                navMenu.classList.remove('show-menu')
            })
        }

        function linkAction() {
          const navMenu = document.getElementById("nav-menu");
          // When we click on each nav__link, we remove the show-menu class
          navMenu.classList.remove("show-menu");
        }
        // Thay đổi khi ấn điều hương
      
        const sections = document.querySelectorAll("section[id]");
      
        function scrollActive() {
          const scrollY = window.pageYOffset;
      
          sections.forEach((current) => {
            const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute("id");
      
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
            } else {
              document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
            }
          });
        }
      
        window.addEventListener("scroll", scrollActive);
        return(   
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#" className="nav__logo">
                        <i className="ri-leaf-line nav__logo-icon"></i> TrucThanh
                    </a>
                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <NavLink to="/home" className="nav__link">Home</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to="/shop" className="nav__link">Shop</NavLink>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">About</a>
                            </li>
                            <li className="nav__item">
                                <a href="#products" className="nav__link">Products</a>
                            </li>
                            <li className="nav__item">
                                <a href="#faqs" className="nav__link">FAQs</a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">Contact Us</a>
                            </li>
                        </ul>

                        <div className="nav__close" id="nav-close">
                            <i className="ri-close-line"></i>
                        </div>
                    </div>
                    <div class="nav__btns">
                        <div id="theme-button">
                          <a href="http://localhost:3000/cart"><FaShoppingBag /></a>
                          <a href="http://localhost:3000/login"><FaRegUserCircle /></a>
                        </div> 

                        <div class="nav__toggle" id="nav-toggle">
                            <i class="ri-menu-line"></i>
                        </div>
                    </div>
                </nav>
            </header>
        );
};
export default Header;
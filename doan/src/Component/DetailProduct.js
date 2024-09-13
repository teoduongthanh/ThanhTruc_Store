import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detailproduct = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(value + 1);
    };

    const decrement = () => {
        if (value > 0) {
        setValue(value - 1);
        }
    };

    const handleChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        if (!isNaN(newValue)) {
        setValue(newValue);
        }
    };
// chức năng của cá api
    const { _id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    
    useEffect(() => {

      // Fetch product details from your API
      const fetchProduct = async () => {
        const response = await fetch(`http://localhost:5000/plants/plant/${_id}`);
        const data = await response.json();
        setProduct(data);
      };
  
      fetchProduct();
    }, [_id]);
  
    if (!product) {
      return <div>Loading...</div>;
    }

    
    const addToCart = async () => {
        try {
          const response = await axios.post('http://localhost:5000/carts/cart', {
            plantID: _id,
            accID: "664cc47e56573b610d59df9b", // Replace with actual account ID
            quantity: 1
          });
          console.log('Fish added to cart:', response.data);
        } catch (error) {
          console.error('Error adding plant to cart:', error);
        }
      };
    
    return(
        <div>
            <header class="main-header-area">
            <aside class="off-canvas-wrapper" id="mobileMenu">
                <div class="off-canvas-overlay"></div>
                <div class="off-canvas-inner-content">
                    <div class="btn-close-off-canvas">
                        <i class="fa fa-times"></i>
                    </div>
                    <div class="off-canvas-inner">
                        <div class="search-box-offcanvas">
                            <form>
                                <input type="text" placeholder="Search product..."/>
                                <button class="search-btn"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div class="mobile-navigation">
                            <nav>
                                <ul class="mobile-menu">
                                    <li class="menu-item-has-children"><a href="#">Home</a>
                                        <ul class="dropdown">
                                            <li><a href="index.html">Home Page 1</a></li>
                                            <li><a href="index-2.html">Home Page 2</a></li>
                                            <li><a href="index-3.html">Home Page 3</a></li>
                                            <li><a href="index-4.html">Home Page 4</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="#">Shop</a>
                                        <ul class="megamenu dropdown">
                                            <li class="mega-title has-children"><a href="#">Shop Layouts</a>
                                                <ul class="dropdown">
                                                    <li><a href="shop.html">Shop Left Sidebar</a></li>
                                                    <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                    <li><a href="shop-list-left.html">Shop List Left Sidebar</a></li>
                                                    <li><a href="shop-list-right.html">Shop List Right Sidebar</a></li>
                                                    <li><a href="shop-fullwidth.html">Shop Full Width</a></li>
                                                </ul>
                                            </li>
                                            <li class="mega-title has-children"><a href="#">Product Details</a>
                                                <ul class="dropdown">
                                                    <li><a href="product-details.html">Single Product Details</a></li>
                                                    <li><a href="variable-product-details.html">Variable Product Details</a></li>
                                                    <li><a href="external-product-details.html">External Product Details</a></li>
                                                    <li><a href="gallery-product-details.html">Gallery Product Details</a></li>
                                                    <li><a href="countdown-product-details.html">Countdown Product Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="mega-title has-children"><a href="#">Others</a>
                                                <ul class="dropdown">
                                                    <li><a href="error404.html">Error 404</a></li>
                                                    <li><a href="compare.html">Compare Page</a></li>
                                                    <li><a href="cart.html">Cart Page</a></li>
                                                    <li><a href="checkout.html">Checkout Page</a></li>
                                                    <li><a href="wishlist.html">Wish List Page</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children "><a href="#">Blog</a>
                                        <ul class="dropdown">
                                            <li><a href="blog.html">Blog Left Sidebar</a></li>
                                            <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                                            <li><a href="blog-list-fullwidth.html">Blog List Fullwidth</a></li>
                                            <li><a href="blog-grid.html">Blog Grid Page</a></li>
                                            <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                                            <li><a href="blog-grid-fullwidth.html">Blog Grid Fullwidth</a></li>
                                            <li><a href="blog-details-sidebar.html">Blog Details Sidebar Page</a></li>
                                            <li><a href="blog-details-fullwidth.html">Blog Details Fullwidth Page</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children "><a href="#">Pages</a>
                                        <ul class="dropdown">
                                            <li><a href="frequently-questions.html">FAQ</a></li>
                                            <li><a href="my-account.html">My Account</a></li>
                                            <li><a href="login-register.html">login &amp; register</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="contact-us.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="offcanvas-widget-area">
                            <div class="switcher">
                                <div class="language">
                                    <span class="switcher-title">Language: </span>
                                    <div class="switcher-menu">
                                        <ul>
                                            <li><a href="#">English</a>
                                                <ul class="switcher-dropdown">
                                                    <li><a href="#">German</a></li>
                                                    <li><a href="#">French</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="currency">
                                    <span class="switcher-title">Currency: </span>
                                    <div class="switcher-menu">
                                        <ul>
                                            <li><a href="#">$ USD</a>
                                                <ul class="switcher-dropdown">
                                                    <li><a href="#">€ EUR</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="top-info-wrap text-left text-black">
                                <ul class="address-info">
                                    <li>
                                        <i class="fa fa-phone"></i>
                                        <a href="info%40yourdomain.html">(1245) 2456 012</a>
                                    </li>
                                    <li>
                                        <i class="fa fa-envelope"></i>
                                        <a href="info%40yourdomain.html">info@yourdomain.com</a>
                                    </li>
                                </ul>
                                <div class="widget-social">
                                    <a class="facebook-color-bg" title="Facebook-f" href="#"><i class="fa fa-facebook-f"></i></a>
                                    <a class="twitter-color-bg" title="Twitter" href="#"><i class="fa fa-twitter"></i></a>
                                    <a class="linkedin-color-bg" title="Linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                                    <a class="youtube-color-bg" title="Youtube" href="#"><i class="fa fa-youtube"></i></a>
                                    <a class="vimeo-color-bg" title="Vimeo" href="#"><i class="fa fa-vimeo"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <aside class="off-canvas-menu-wrapper" id="sideMenu">
                <div class="off-canvas-overlay"></div>
                <div class="off-canvas-inner-content">
                    <div class="off-canvas-inner">
                        <div class="btn-close-off-canvas">
                            <i class="fa fa-times"></i>
                        </div>
                        <div class="offcanvas-widget-area">
                            <ul class="menu-top-menu">
                                <li><a href="about-us.html">About Us</a></li>
                            </ul>
                            <p class="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div class="switcher">
                                <div class="language">
                                    <span class="switcher-title">Language: </span>
                                    <div class="switcher-menu">
                                        <ul>
                                            <li><a href="#">English</a>
                                                <ul class="switcher-dropdown">
                                                    <li><a href="#">German</a></li>
                                                    <li><a href="#">French</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="currency">
                                    <span class="switcher-title">Currency: </span>
                                    <div class="switcher-menu">
                                        <ul>
                                            <li><a href="#">$ USD</a>
                                                <ul class="switcher-dropdown">
                                                    <li><a href="#">€ EUR</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="top-info-wrap text-left text-black">
                                <ul class="address-info">
                                    <li>
                                        <i class="fa fa-phone"></i>
                                        <a href="info%40yourdomain.html">(1245) 2456 012</a>
                                    </li>
                                    <li>
                                        <i class="fa fa-envelope"></i>
                                        <a href="info%40yourdomain.html">info@yourdomain.com</a>
                                    </li>
                                </ul>
                                <div class="widget-social">
                                    <a class="facebook-color-bg" title="Facebook-f" href="#"><i class="fa fa-facebook-f"></i></a>
                                    <a class="twitter-color-bg" title="Twitter" href="#"><i class="fa fa-twitter"></i></a>
                                    <a class="linkedin-color-bg" title="Linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                                    <a class="youtube-color-bg" title="Youtube" href="#"><i class="fa fa-youtube"></i></a>
                                    <a class="vimeo-color-bg" title="Vimeo" href="#"><i class="fa fa-vimeo"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </header>
        <div class="breadcrumbs-area position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="breadcrumb-content position-relative section-content">
                            <h3 class="title-3">Product Details</h3>
                            <ul>
                                <li>Product Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="single-product-main-area">
            <div class="container container-default custom-area">
                <div class="row">
                    <div class="col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-custom">
                        <div class="product-details-img">
                            <div class="single-product-img swiper-container gallery-top popup-gallery">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <a class="w-100" href={require(`../assets1/img/${product.image}`)}>
                                            <img class="w-100" src={require(`../assets1/img/${product.image}`)} alt="Product"/>
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a class="w-100" href={require(`../assets1/img/${product.image}`)}>
                                            <img class="w-100" src={require(`../assets1/img/${product.image}`)} alt="Product"/>
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a class="w-100" href={require(`../assets1/img/${product.image}`)}>
                                            <img class="w-100" src={require(`../assets1/img/${product.image}`)} alt="Product"/>
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a class="w-100" href={require(`../assets1/img/${product.image}`)}>
                                            <img class="w-100" src={require(`../assets1/img/${product.image}`)} alt="Product"/>
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a class="w-100" href={require(`../assets1/img/${product.image}`)}>
                                            <img class="w-100" src={require(`../assets1/img/${product.image}`)} alt="Product"/>
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a class="w-100" href={require(`../assets1/img/${product.image}`)}>
                                            <img class="w-100" src={require(`../assets1/img/${product.image}`)} alt="Product"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-custom">
                        <div class="product-summery position-relative">
                            <div class="product-head mb-3">
                                <h2 class="product-title">{product.name}</h2>
                            </div>
                            <div class="price-box mb-2">
                                <span class="regular-price">${product.price}</span>
                            </div>
                            <div class="product-rating mb-3">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <div class="sku mb-3">
                                <span>count_instock: {product.countInStock}</span>
                            </div>
                            <p class="desc-content mb-5">{product.description}</p>
                            <div class="quantity-with_btn mb-5">
                                <div class="quantity">
                                    <div class="cart-plus-minus">
                                        <input class="cart-plus-minus-box" value={value} type="text"  onChange={handleChange}/>
                                        <div class="dec qtybutton" onClick={decrement}>-</div>
                                        <div class="inc qtybutton" onClick={increment}>+</div>
                                    </div>
                                </div>
                                <div class="add-to_cart">
                                    <a class="btn product-cart button-icon flosun-button dark-btn" href='http://localhost:3000/cart' onClick={addToCart}>Add to cart</a>
                                    
                                </div>
                            </div>
                            <div class="social-share mb-4">
                                <span>Share :</span>
                                <a href="#"><i class="fa fa-facebook-square facebook-color"></i></a>
                                <a href="#"><i class="fa fa-twitter-square twitter-color"></i></a>
                                <a href="#"><i class="fa fa-linkedin-square linkedin-color"></i></a>
                                <a href="#"><i class="fa fa-pinterest-square pinterest-color"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        </div>
    );  
}
export default Detailproduct;
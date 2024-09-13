import React from "react";
import CardComponent from "../Component/CardComponent/CardComponent";
import "../../src/App.css";
const Home = () => {
  const toggleAccordion = () => {
    const accordionItems = document.querySelectorAll(".questions__item");
  
    const toggleItem = (item) => {
      const accordionContent = item.querySelector(".questions__content");
  
      if (item.classList.contains("accordion-open")) {
        accordionContent.removeAttribute("style");
        item.classList.remove("accordion-open");
      } else {
        accordionContent.style.height = accordionContent.scrollHeight + "px";
        item.classList.add("accordion-open");
      }
    };
  
    const accordionHeaderClickHandler = (event) => {
      const accordionHeader = event.target;
      const item = accordionHeader.closest(".questions__item");
      const openItem = document.querySelector(".accordion-open");
  
      toggleItem(item);
  
      if (openItem && openItem !== item) {
        toggleItem(openItem);
      }
    };
  
    accordionItems.forEach((item) => {
      const accordionHeader = item.querySelector(".questions__header");
      accordionHeader.addEventListener("click", accordionHeaderClickHandler);
    });
  
    window.addEventListener("load", () => {
      accordionItems.forEach((item) => {
        const accordionHeader = item.querySelector(".questions__header");
        accordionHeader.removeEventListener("click", accordionHeaderClickHandler);
        accordionHeader.addEventListener("click", accordionHeaderClickHandler);
      });
    });
  };
  return (
    <main className="main">
      <section className="home" id="home">
        <div className="home__container container grid">
          <img src={require('../assets1/img/home.png')} alt="" className="home__img" />

          <div className="home__data">
            <h1 className="home__title">
            Cây xanh sẽ làm <br />cho cuộc sống của bạn tốt hơn
            </h1>
            <p className="home__description">
            Tạo ra thiết kế cây trồng đáng kinh ngạc cho văn phòng hoặc căn hộ của bạn.
            Mang lại sự tươi mới cho những ý tưởng mới của bạn.
            </p>
            <a href="#about" className="button button--flex">
              Khám phá <i className="ri-arrow-right-down-line button__icon"></i>
            </a>
          </div>

          <div className="home__social">
            <span className="home__social-follow">Follow Us</span>

            <div className="home__social-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="home__social-link"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="home__social-link"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="home__social-link"
              >
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about section container" id="about">
        <div className="about__container grid">
          <img src={require('../assets1/img/about.png')} alt="" className="about__img" />

          <div className="about__data">
            <h2 className="section__title about__title">
            Chúng tôi thực sự là ai & <br /> tại sao chọn chúng tôi
            </h2>

            <p className="about__description">
            Chúng tôi có hơn 4000 đánh giá khách quan và khách hàng luôn tin tưởng vào quy trình sản xuất và dịch vụ giao hàng tại nhà máy của chúng tôi
            </p>

            <div className="about__details">
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon"></i>
                Chúng tôi luôn giao hàng đúng hẹn.
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon"></i>
                Chúng tôi cung cấp cho bạn các hướng dẫn để bảo vệ và chăm sóc cây trồng của bạn.
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon"></i>
                Chúng tôi luôn đến để kiểm tra sau khi bán.
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon"></i>
                Đảm bảo hoàn lại tiền 100%.
              </p>
            </div>

            <a href="#" className="button--link button--flex">
            Mua ngay <i className="ri-arrow-right-down-line button__icon"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="questions section " id="faqs">
        <h2 className="section__title-center questions__title container">
        Một số câu hỏi thường gặp <br /> thường được hỏi
        </h2>

        <div className="questions__container container grid">
          <div className="questions__group">
            <div className="questions__item" onClick={toggleAccordion}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                Hoa của tôi đang rụng hoặc chết?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                Thực vật là cách dễ dàng để bổ sung năng lượng màu sắc và biến đổi không gian của bạn nhưng hành tinh nào là dành cho bạn. Lựa chọn cây trồng phù hợp.
                </p>
              </div>
            </div>

            <div className="questions__item" onClick={toggleAccordion}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                Nguyên nhân khiến lá trở nên nhợt nhạt?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">Thực vật là cách dễ dàng để bổ sung năng lượng màu sắc và biến đổi không gian của bạn nhưng hành tinh nào là dành cho bạn. Lựa chọn cây trồng phù hợp.
                </p>
              </div>
            </div>

            <div className="questions__item" onClick={toggleAccordion}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                Nguyên nhân gây ra lá giòn màu nâu?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                Thực vật là cách dễ dàng để bổ sung năng lượng màu sắc và biến đổi không gian của bạn nhưng hành tinh nào là dành cho bạn. Lựa chọn cây trồng phù hợp.
                </p>
              </div>
            </div>
          </div>

          <div className="questions__group">
            <div className="questions__item" onClick={toggleAccordion}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                Làm thế nào để tôi chọn một cây?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                Thực vật là cách dễ dàng để bổ sung năng lượng màu sắc và biến đổi không gian của bạn nhưng hành tinh nào là dành cho bạn. Lựa chọn cây trồng phù hợp.
                </p>
              </div>
            </div>

            <div className="questions__item" onClick={toggleAccordion}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                Làm thế nào để thay đổi chậu?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                Thực vật là cách dễ dàng để bổ sung năng lượng màu sắc và biến đổi không gian của bạn nhưng hành tinh nào là dành cho bạn. Lựa chọn cây trồng phù hợp.
                </p>
              </div>
            </div>

            <div className="questions__item" onClick={toggleAccordion}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                Tại sao muỗi bay quanh cây của tôi?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                Thực vật là cách dễ dàng để bổ sung năng lượng màu sắc và biến đổi không gian của bạn nhưng hành tinh nào là dành cho bạn. Lựa chọn cây trồng phù hợp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section container" id="contact">
        <div className="contact__container grid">
          <div className="contact__box">
            <h2 className="section__title">
            Hãy liên hệ với chúng tôi ngay hôm nay <br /> thông qua bất kỳ điều nào đã cho <br />{" "}
            thông tin
            </h2>

            <div className="contact__data">
              <div className="contact__information">
                <h3 className="contact__subtitle">
                Hãy gọi cho chúng tôi để được hỗ trợ ngay lập tức
                </h3>
                <span className="contact__description">
                  <i className="ri-phone-line contact__icon"></i>
                  +999 888 777
                </span>
              </div>

              <div className="contact__information">
                <h3 className="contact__subtitle">Viết thư cho chúng tôi</h3>
                <span className="contact__description">
                  <i className="ri-mail-line contact__icon"></i>
                  tung123@email.com
                </span>
              </div>
            </div>
          </div>

          <form action="" className="contact__form">
            <div className="contact__inputs">
              <div className="contact__content">
                <input
                  type="email"
                  placeholder=" "
                  className="contact__input"
                />
                <label for="" className="contact__label">
                  Email
                </label>
              </div>

              <div className="contact__content">
                <input type="text" placeholder=" " className="contact__input" />
                <label for="" className="contact__label">
                  Subject
                </label>
              </div>

              <div className="contact__content contact__area">
                <textarea
                  name="message"
                  placeholder=" "
                  className="contact__input"
                ></textarea>
                <label for="" className="contact__label">
                  Message
                </label>
              </div>
            </div>

            <button className="button button--flex">
              Send Message
              <i className="ri-arrow-right-up-line button__icon"></i>
            </button>
          </form>
        </div>
      </section>
    </main>

   
  );


};

export default Home;

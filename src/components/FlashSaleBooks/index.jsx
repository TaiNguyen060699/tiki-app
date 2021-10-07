import { React, useState, useEffect } from "react";
import "./index.scss";
import FlashSale from "../../assets/images/flash-sale-book/flash-sale.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FlashSaleBook = () => {
  const [FlashSaleBook, setFlashSaleBook] = useState([]);

  useEffect(() => {
    const handleFlashSaleBook = async () => {
      try {
        const requestUrl =
          "https://tiki.vn/api/personalish/v1/blocks/listings?limit=8&is_mweb=1&category=316&page=1";
        const reponse = await fetch(requestUrl);
        const reponseJSON = await reponse.json();
        const data = reponseJSON;
        setFlashSaleBook(data.data);
        console.log(data.data);
      } catch (error) {
        console.log("Failed to fetch Flash sale book", error.message);
      }
    };
    handleFlashSaleBook();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="flash-sale-book">
      <div className="container">
        <div className="flash-sale-book__img">
          <img src={FlashSale} alt="flash sale book" />
        </div>
        <div className="flash-sale-book__time">
          <span className="active">10:00</span>
          <span>15:00</span>
          <span>18:00</span>
          <span>20:00</span>
        </div>
        <Slider {...settings}>
          {FlashSaleBook.map((item) => (
            <div className="flash-sale-book__block" key={item.id}>
              <div className="flash-sale-book__content">
                <img src={item.thumbnail_url} alt="" />
                <div className="flash-sale-book__content-title">{item.short_description} </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FlashSaleBook;

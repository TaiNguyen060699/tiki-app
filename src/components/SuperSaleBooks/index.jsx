import { React, useState, useEffect } from "react";
import "./index.scss";
import Tiki from "../../assets/images/card-item/tiki.png";
import Star from "../../assets/images/card-item/star.svg";
import Vector from "../../assets/images/card-item/vector.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuperSaleBook = () => {
  const [SuperSaleBook, setSuperSaleBook] = useState([]);

  useEffect(() => {
    const handleSuperSaleBook = async () => {
      try {
        const requestUrl =
          "https://tiki.vn/api/personalish/v1/blocks/listings?limit=8&is_mweb=1&category=8322&page=1";
        const reponse = await fetch(requestUrl);
        const reponseJSON = await reponse.json();
        const data = reponseJSON;
        setSuperSaleBook(data.data);
      } catch (error) {
        console.log("Failed to fetch super sale book", error.message);
      }
    };

    handleSuperSaleBook();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="super-sale-book">
      <div className="super-sale-book__title">Siêu sale mở bán ngày 23/04</div>
      <Slider {...settings}>
        {SuperSaleBook.map((item) => (
          <div className="super-sale-book__block" key={item.id}>
            <div className="super-sale-book__image">
              <img src={item.thumbnail_url} alt="Super Sale Book" />
            </div>
            <div className="super-sale-book__content">
              <img className="super-sale-book__tiki" src={Tiki} alt="Tiki" />
              <div className="super-sale-book__text">{item.name}</div>
              <div className="super-sale-book__vector">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Vector} alt="" />
                <img src={Vector} alt="" />
                <span>({item.review_count})</span>
              </div>
              <div className="super-sale-book__cost">
                <span className="super-sale-book__cost-money">  {item.price.toLocaleString("it-IT")} ₫</span>
                <span className="super-sale-book__cost-discount"> -{item.discount_rate}% </span>
              </div>
              <div className="super-sale-book__price">  {item.original_price.toLocaleString("it-IT")} ₫</div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SuperSaleBook;

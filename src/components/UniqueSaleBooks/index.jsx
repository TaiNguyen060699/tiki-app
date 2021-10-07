import { React, useState, useEffect } from "react";
import Sale from "../../assets/images/sale.png";
import "./index.scss";
import Tiki from "../../assets/images/card-item/tiki.png";
import Star from "../../assets/images/card-item/star.svg";
import Vector from "../../assets/images/card-item/vector.svg";
import { addItem } from "../../redux/CardBook/cardItemSlice";
import { useDispatch } from 'react-redux'

const UniqueSaleBook = () => {
  return (
    <section className="unique-sale-book">
      <img src={Sale} alt="Sale" />
      <div className="container unique-book">
        <div className="unique-sale-book__wrap">
          <div className="unique-sale-book__inner">
            <BookItem />
            <BookItem />
          </div>
          <div className="unique-sale-book__inner">
            <BookItem />
            <BookItem />
          </div>
        </div>
      </div>
    </section>
  );
};

const BookItem = () => {
  const [UniqueBook, setUniqueBook] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleApiUniqueBook = async () => {
      try {
        const requestUrl =
          "https://tiki.vn/api/personalish/v1/blocks/listings?limit=8&is_mweb=1&category=8322&page=1";
        const reponse = await fetch(requestUrl);
        const reponseJSON = await reponse.json();
        const data = reponseJSON;
        setUniqueBook(data.data);
      } catch (error) {
        console.log("Failed to fetch unique book", error.message);
      }
    };

    handleApiUniqueBook();
  }, []);

  return (
    <>
      {UniqueBook.map((item) => (
        <div className="book-item" key={item.id} onClick={() => dispatch(addItem(item))}>
          <div className="book-item__header">
            <img src={item.thumbnail_url} alt="book-item" />
          </div>
          <div className="book-item__content">
            <img className="book-item__image" src={Tiki} alt="Tiki" />
            <a
              className="book-item__text"
              href={`https://tiki.vn/${item.url_path}`}
            >
             {item.name}
            </a>
            <div className="book-item__vector">
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Vector} alt="star" />
              <img src={Vector} alt="star" />
              <span>({item.review_count})</span>
            </div>
            <div className="book-item__cost">
              <span className="book-item__cost-money">
                {item.price.toLocaleString("it-IT")} ₫
              </span>
              <span className="book-item__cost-discount">
                -{item.discount_rate}%
              </span>
            </div>
            <div className="book-item__price">
              {item.original_price.toLocaleString("it-IT")} ₫
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default UniqueSaleBook;

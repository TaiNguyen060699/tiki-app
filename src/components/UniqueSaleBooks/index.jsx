import { React, useState, useEffect, useRef } from "react";
import Sale from "../../assets/images/sale.png";
import "./index.scss";
import Tiki from "../../assets/images/card-item/tiki.png";
import Star from "../../assets/images/card-item/star.svg";
import Vector from "../../assets/images/card-item/vector.svg";
import { addItem } from "../../redux/CardBook/cardItemSlice";
import { useDispatch } from "react-redux";

const UniqueSaleBook = () => {
  const [uniqueBook, setUniqueBook] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
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

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = uniqueBook.filter((item) => {
        return Object.values(item) //lay cac gia tri tu object
          .join("") //chuyen doi thành 1 chuỗi
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(uniqueBook);
    }
  };

  return (
    <section className="unique-sale-book">
      <img src={Sale} alt="Sale" />
      <div className="unique-sale-book__filter">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <div className="container unique-book">
        <div className="unique-sale-book__wrap">
          <div className="unique-sale-book__inner">
            { searchInput.length > 1 ? (
              filteredResults.map((item) => (
                <div className="book-item" key={item.id}>
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
                  <button
                    className="book-item__button"
                    onClick={() => dispatch(addItem(item))}
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            ) : uniqueBook.map((item) => (
              <div className="book-item" key={item.id}>
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
                <button
                  className="book-item__button"
                  onClick={() => dispatch(addItem(item))}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSaleBook;

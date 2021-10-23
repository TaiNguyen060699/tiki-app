import React from "react";
import "./index.scss";
import ImageIcon from "../../assets/images/i.svg";
import IconDelete from "../../assets/images/order/delete.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  DECREASE_QUANTITY,
  addItem,
} from "../../redux/CardBook/cardItemSlice";

const OrderDetail = () => {
  const bookItem = useSelector((state) => state.BookCard.cardItems);
  const dispatch = useDispatch();
  let sum = 0;
  const transport = 15000;
  const sumPrice = bookItem.map((item) => (sum += item.price));
  const sumb = sum + transport;
  console.log(sumPrice);

  return (
    <main>
      <section className="order-detail">
        <div className="container">
          <div className="order-detail__title">Chi tiết đơn hàng</div>
          {bookItem.map((item, key) => (
            <div className="order-detail__card" key={key}>
              <div className="order-detail__card-inner">
                <div className="order-detail__image">
                  <img src={item.thumbnail_url} alt="ImageIcon" />
                </div>
                <div className="order-detail__content">
                  <div className="order-detail__content-title">{item.name}</div>
                  <div className="order-detail__content-price">
                    <span className="order-detail__content-selling-price">
                      {item.price.toLocaleString("it-IT")} đ
                    </span>
                    <span className="order-detail__content-original-price">
                      {item.original_price.toLocaleString("it-IT")}₫
                    </span>
                  </div>
                  <div className="order-detail__content-group-input">
                    <button
                      className="prev"
                      onClick={() => dispatch(DECREASE_QUANTITY(item))}
                    >
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                        alt="icon prev"
                      />
                    </button>
                    <span>{item.cartQuantity}</span>
                    <button
                      className="next"
                      onClick={() => dispatch(addItem(item))}
                    >
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                        alt="icon next"
                      />
                    </button>
                  </div>
                </div>
                <div
                  className="icon-delete"
                  onClick={() => dispatch(removeItem(item))}
                >
                  <img src={IconDelete} alt="icon delete" />
                </div>
              </div>
            </div>
          ))}
          <div className="order-detail__pay">
            <div className="order-detail__pay-provisional flex">
              <span> Tạm tính</span>
              <span>{sum.toLocaleString("it-IT")} ₫</span>
            </div>
            <div className="order-detail__pay-transport-fee flex">
              <span>
                {" "}
                Phí vận chuyển <img src={ImageIcon} alt="" />
              </span>
              <span>{transport.toLocaleString("it-IT")} ₫</span>
            </div>
            <div className="order-detail__pay-total flex">
              <span> Tổng cộng</span>
              <span>{sumb.toLocaleString("it-IT")} ₫</span>
            </div>
          </div>
        </div>
      </section>
      <section className="card-pay">
        <div className="container">
          <div className="card-pay__list">
            <span>Tổng cộng</span>
            <span>{sumb.toLocaleString("it-IT")} ₫</span>
          </div>
          <button>Thanh toán</button>
        </div>
      </section>
    </main>
  );
};
// const Pay = () => {
//   return (
//     <div className="card-pay">
//       <div className="container">
//         <div className="card-pay__list">
//           <span>Tổng cộng</span>
//           <span>{sumPrice} ₫</span>
//         </div>
//         <button>Thanh toán</button>
//       </div>
//     </div>
//   );
// };

export default OrderDetail;

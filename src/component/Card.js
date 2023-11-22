import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const Card = (props) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  return (
    <>
      {props.book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        if (thumbnail != undefined && amount != undefined) {
          return (
            <>
              <div
                className="card2"
                key={item.id}
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <br />
                  <br />
                  <p className="amount">&#8358;;{amount}</p>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
      })}
    </>
  );
};

export default Card;

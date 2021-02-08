import React, { useState } from "react";

const Card = ({ product }) => {
  let [value, setValue] = useState(0);
  let incrementClick = function () {
    setValue(value + 1);
  };

  let decrementClick = function () {
    value > 0 ? setValue(value - 1) : console.log("0");
  };
  let {
    imgURL,
    brandName,
    productName,
    offerText,
    price,
    mrp,
    quantity,
  } = product;
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-md-4">
            <img
              src={imgURL}
              className="card-img"
              alt="..."
              height="250px"
              width="180px"
            />
            <p>{offerText}</p>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 style={{ color: "green" }}>{brandName}</h2>
              <h4 style={{ color: "green" }}>{productName}</h4>
              <p>Quantity : {quantity}L</p>
              <p> Offer Rs :{price}</p>
              <p>
                <b>MRP Rs: {mrp}</b>
              </p>
              <div className="buttonAll">
                <button
                  className="button"
                  style={{ borderRadius: "5px", marginRight: "20px" }}
                >
                  Add to Cart
                </button>
                <button
                  className="button"
                  style={{ borderRadius: "20px", marginRight: "10px" }}
                  onClick={decrementClick}
                >
                  -
                </button>
                <strong>{value}</strong>
                <button
                  className="button"
                  style={{ borderRadius: "20px", marginLeft: "10px" }}
                  onClick={incrementClick}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  

  );
};

export default Card;


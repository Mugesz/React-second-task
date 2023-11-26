import React from "react";

const CartList = ({ addcartItem, delCardItem, handleChange}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {addcartItem.title} <span>${Math.round(addcartItem.newPrize * addcartItem.quantity)}</span>
      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button
          type="button"
          className={`btn btn-danger px-2 ${
            addcartItem.quantity === 1 ? "disabled" : ""
          }`}
          onClick={() => handleChange(addcartItem, -1)}
        >
          -
        </button>
        <span>
          &nbsp;&nbsp;{addcartItem.quantity}
          &nbsp;&nbsp;
        </span>
        <button
          type="button"
          className="btn btn-success px-2"
          onClick={() => handleChange(addcartItem, +1)}
        >
          +
        </button>
      </div>
      <span>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            delCardItem(addcartItem);
          }}
          className="btn btn-sm btn-danger"
        >
          delete
        </button>
      </span>
    </li>
  );
};

export default CartList;

import React from "react";
import CartList from "../CartList";

const CartItems = ({ cartCount, addcartItem, total, delCardItem,handleChange }) => {
  return (
    <form className="d-flex">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Cart
        <span className="badge bg-dark text-white ms-1 rounded-pill">
          {cartCount}
        </span>
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Added Cart Items
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {cartCount > 0 ? (
                <ol className="list-group list-group-numbered">
                  {addcartItem.map((items, index) => (
                    <CartList
                      key={index}
                      addcartItem={items}
                      delCardItem={delCardItem}
                      handleChange={handleChange}
                    />
                  ))}
                </ol>
              ) : (
                "No Items"
              )}

              <div className="modal-footer">
                {" "}
                <h4>Total : &#36; {total}</h4>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CartItems;

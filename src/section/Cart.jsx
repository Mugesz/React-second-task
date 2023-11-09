import React from "react";
import { StarFill } from "react-bootstrap-icons";

function Cart({ product, addcartItem, isInCart, delCardItem }) {
    const handleClick = () => isInCart() ? delCardItem(product) : addcartItem(product);

    return (
        <div className="col mb-5">
            <div className="card h-100">
                <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                >
                    {product.sale}
                </div>

                <img className="card-img-top" src={product.img} alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{product.title}</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <div>{product.rating ? <StarFill /> : ""}</div>
                            <div>{product.rating ? <StarFill /> : ""}</div>
                            <div>{product.rating ? <StarFill /> : ""}</div>
                            <div>{product.rating ? <StarFill /> : ""}</div>
                            <div>{product.rating ? <StarFill /> : ""}</div>
                            {product.rating}
                        </div>
                        <span
                            className={
                                product.oldPrize
                                    ? "text-muted text-decoration-line-through"
                                    : ""
                            }
                        >
                            {product.oldPrize}
                        </span>
                        &#36;{product.newPrize}
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <button
                            className="btn btn-outline-dark mt-auto"
                            onClick={handleClick}
                            href="#"
                        >
                            {isInCart() ? "Remove from cart" : "Add to cart"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;

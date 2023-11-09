import React from 'react'
import { CartFill } from 'react-bootstrap-icons';
import CartList from '../CartList';



const CartItems = ({ cartCount, addcartItem,total,delCardItem }) => {
  return (

    <form className="d-flex">
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <CartFill />
        Cart
        <span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
      </button>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Added Cart Items</h1>


              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
            

              {
                cartCount > 0 ?
                  <ol className="list-group list-group-numbered">
                    {
                      addcartItem.map((items, index) => {
                        return <CartList key={index} addcartItem={items} delCardItem={delCardItem}  />
                      })
                    }

                  </ol> : 'No Items'
              }


            </div>

            <div className="modal-footer">
              total:&#36;{total}
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default CartItems
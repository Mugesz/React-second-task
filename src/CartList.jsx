import React from 'react'

const CartList = ({ addcartItem,delCardItem }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {addcartItem.title} <span>${addcartItem.newPrize}</span>
            <span><button onClick={(e)=>{e.preventDefault(); delCardItem(addcartItem)}} className='btn btn-sm btn-danger'>delete</button></span>
        </li>

    )
}

export default CartList;
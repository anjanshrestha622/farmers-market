import React, { useState } from 'react';
import { useStateValue } from './StateProvider';

function CheckOutProduct({ id, title, img, price, content }) {
  // console.log('titleayo', title)
  // console.log(id,'checkoutid')

  const [count, setcount] = useState(2);

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <>
      <div className="row checkoutProduct_main mt-3 p-3">
        <div className=" col-lg-4 col-md-6 col-sm-4 checkoutProduct_img">
          <img src={img} alt="no img" />
        </div>
        <div className="col-lg-6  col-md-6 col-sm-6 checkoutproduct_info">
          <h4 className="checkoutproduct_title"> {title}</h4>
          <p className="checkoutProduct_content"> {content}</p>
          <span className="checkoutProduct_price">
            <strong>Rs  {price}</strong>
          </span>
          <p onClick={removeFromBasket} className="removeFromBasket">
            <i className="fas fa-trash"></i>
          </p>
        </div>
        <div className="col-lg-2  col-md-2 col-sm-2 product-quantity">
          <button onClick={() => setcount(count - 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => setcount(count + 1)}>+</button>
        </div>
      </div>
    </>
  );
}

export default CheckOutProduct;

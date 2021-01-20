import React from 'react';
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../Reducer';

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
            <h2 > Order summary</h2>
              <p>
                Subtotal({basket.length} items):<strong>{`${value}`}</strong>
              </p>
              <div className="coupon">
              <input className='form-control' type="text" placeholder="Enter your coupon"/>
              <button>Apply</button>
              </div>
            </>
          )}
          decimalscale={2}
          prefix={'Rs'}
          displayType={'text'}
          value={getBasketTotal(basket)}
        />
        <button className="procedtocheckout btn">proceed to checkout</button>
      </div>
    </>
  );
}

export default SubTotal;

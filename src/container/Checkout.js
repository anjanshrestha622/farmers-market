import React from 'react';
import CheckOutProduct from '../CheckOutProduct';
import { useStateValue } from '../StateProvider';
import SubTotal from './SubTotal';

function Checkout() {
  const [{ basket }] = useStateValue();
  // console.log(basket ,'checkoutproductbasket')

  return (
    <>
      <div className="check_out">
      <div className="checkout_left">
      <img
          src="https://via.placeholder.com/400x100?text=advertisment-part"
          className="img-fluid  checkout"
          alt="no image"
        />
        {basket.length === 0 ? (
          <div>
            <h2 className='basketDisplay'>YOUR BASKET IS EMPTY</h2>
            <p>
              you have no items in your basket. to buy or more please add to
              your basket
            </p>
          </div>
        ) : (
        
        <div className='row'>
         <div className="col-lg-8 col-sm-8">
         <h2 className='checkout_title px-5'>
          Your shopping basket is : </h2> 
          {basket.map((checkoutItems)=>{
            // console.log(checkoutItems,' food of god');
            return(
              <CheckOutProduct
              id={checkoutItems.items.id}
              title={checkoutItems.items.title}
              price={checkoutItems.items.price}
              img={checkoutItems.items.img}
              content={checkoutItems.items.content}
              />
            )
            
          })}
         </div>
       
           <div className=" col-lg-4 col-sm-4">
             <SubTotal/>
           </div>
          
        </div>
        )}
      </div>

      
      </div>
    </>
  );
}

export default Checkout;

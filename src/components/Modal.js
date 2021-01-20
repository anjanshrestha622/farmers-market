import React, { useState } from 'react';
// import Data from "../data.json"
import { useStateValue } from '../StateProvider';

function Modal({ showModal, setShowModal, items }) {
  const [{ basket }, dispatch] = useStateValue();
  
  const addToBasket = () => {
    // add item to basket
    
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        items
      },
    });
  };

  return (
    <>
      {showModal ? (
        <div class="modal d-block" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h2 class="modal-title">{items.title}</h2>
                <button
                  type="button"
                  onClick={() => setShowModal((prev) => !prev)}
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                {/* <p>{items.id}</p> */}
                <img src={items.img} height="200px" width="450px" alt="" />
                <div className="module-price-content">
                  <p>{items.price}</p>
                </div>
                <p>{items.content}</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  onClick={() => setShowModal((prev) => !prev)}
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={addToBasket}
                  class="btn btn-primary"
                >
                  Add cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;

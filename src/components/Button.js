import { resolveConfigFile } from 'prettier';

import React from 'react';

function Button() {
   

  return (
    <div>
      <button 
        className="Add-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <span className="product-card">
          ADD <i className="fas fa-shopping-cart"></i>
        </span>
      </button>
    </div>
  );
}

export default Button;

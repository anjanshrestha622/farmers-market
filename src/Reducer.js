export const initialState = {
  basket: [],
};

export const getBasketTotal=(basket)=>
basket?.reduce((price,item)=>item.items.price + price,0);


const reducer = (state, action) => {
  // console.log(state,'reducer');
  // console.log(action,'reducer')
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET':
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.items.id === action.id,
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product ( id:${action.id}) as it is not in basket`,
        );
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;

let defaultState = {
  selectedItems: { items: [], restaurantName: "" },
};

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      if (action.payload.checkBoxValue) {
        console.log("Added to cart");
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
          checkBoxValue: action.payload.checkBoxValue,
        };

      
      } else {
        console.log("Removed from Cart");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title !== action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
          checkBoxValue: action.payload.checkBoxValue, 
        };
      }

      console.log(newState)
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;

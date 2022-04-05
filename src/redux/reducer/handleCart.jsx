const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  // console.log(action)
  switch (action.type) {
    case "ADDITEM":    
      const exist = state.find((x) => x.id === product.id); //check exist and dont add more existance things 
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
       }
      break;
    case "DELITEM":

    return state=state.filter((x)=>{
      return x.id!==action.payload.id;
    })
    
      break;
    default:
        console.log('stateee',state)
      return state;
      break;
  }
};

export default handleCart;

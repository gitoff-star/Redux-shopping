
const ADD_TO_CART = "ADDITEM"
export const addCart= (product)=> {
  return {
    type:ADD_TO_CART,
    payload:product
  }
}


export  const delCart= (product)=> {
    return {
        type:"DELITEM",
        payload:product
    }
  }
  
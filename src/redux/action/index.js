
const ADD_TO_CART = "ADDITEM"
export const addCart = (product)=> {
  return {
    type:ADD_TO_CART,
    payload:product
  }
}

const DEL_FROM_CART = "DELITEM"
export  const delCart = (product)=> {
    return {
        type:DEL_FROM_CART,
        payload:product
    }
  }
  
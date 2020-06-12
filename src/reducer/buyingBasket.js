import React from 'react';
const buyingBasketDefaultState = [];
const buyingBasketReducer =(state=buyingBasketDefaultState, action)=>{
    switch (action.type) {
        case 'ADD_BUYING_BASKET':
            
            return [...state,
                action.cart]
      
        case 'CHANGE_NUMBER':
        return state.map((cart)=>{
            if(cart.buycode == action.id){
                return{
                    ...cart,
                    number:action.number
                }
            }
        });
        case 'CHANGE_PRICE':
        return state.map((cart)=>{
            if(cart.buycode == action.id){
                return{
                    ...cart,
                    price:action.price
                }
            }
        });
              
        default:
            return state;
    }
};
export default buyingBasketReducer;
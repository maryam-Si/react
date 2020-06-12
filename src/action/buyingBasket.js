import React from 'react';
export const addBuyingBasket = ({
    name = '',
    buycode = '',
    seller = '',
    number = 0,
    price = 0
} = {}) => ({
    type: 'ADD_BUYING_BASKET',
    cart: {
        name,
        buycode,
        seller,
        number,
        price
    }
})

export const changeNumber =(id,number)=>({
    type:'CHANGE_NUMBER',
    id:id,
    number:number

})

export const changePrice =(id,price)=>({
    type:'CHANGE_PRICE',
    id:id,
    price:price

})


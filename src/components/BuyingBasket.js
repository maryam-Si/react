import React from 'react';
import {connect} from 'react-redux';
import BuyingBasketItem from './BuyingBasketItem';
import {  changeCart } from '../action/buyingBasket';

const BuyingBasket = (props)=>(
    <div>
        <h2>buy List</h2>
        {props.buyingBasket.map((cart)=>{
           return <BuyingBasketItem key={cart.buycode}  cart={cart} />
        }  
            )}
    </div>
);
const mapStateToStore = (state)=>({
    buyingBasket:state.buyingBasket
})
export default connect(mapStateToStore)(BuyingBasket);
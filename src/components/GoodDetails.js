import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addBuyingBasket, changeNumber, changePrice} from '../action/buyingBasket';

const GoodDetails = (props) => {
    const buyHandeler = () => {
        if (props.cart) {
            props.dispatch(changeNumber(props.cart.buycode,props.cart.number+1))
            props.dispatch(changePrice(props.cart.buycode,props.cart.price +((props.good.price))))

    
        }else{
            props.dispatch(addBuyingBasket({ name: props.good.name, buycode: props.good.id, seller: props.good.brand, number: 1, price: props.good.price }));

        }
    }
    return (<div>
        <p>price:{props.good.name}</p>
        <p>brand:{props.good.brand}</p>
        <p>category:{props.good.category}</p>
        <p>price:{props.good.price}</p>
        <button onClick={buyHandeler}><Link to='/buyingbasket'>خرید</Link></button>
        <br />
    </div>)
};

const mapStateToProps = (state, props) => {
    return {
        good: state.goods.find((good) => {
            return good.id === props.match.params.id;
        }),
        cart: state.buyingBasket.find((cart)=>{
            return cart.buycode === props.match.params.id;

        })   

    };

};
export default connect(mapStateToProps)(GoodDetails);


import React from 'react';
import { connect } from 'react-redux';
import { changeNumber,changePrice } from '../action/buyingBasket';
class BuyingBasketItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
            number:this.props.cart.number,
            price:this.props.cart.price
            
        },
        this.addHandeler = this.addHandeler.bind(this)
        this.buyHandeler = this.buyHandeler.bind(this)
    }

    addHandeler = () => {
        this.setState((preState) => ({ number: preState.number + 1 }));
        this.setState(() => ({ price:this.props.cart.price * (this.state.number+1)}))

    }
    minHandeler = ()=>{
        this.setState((preState) => ({ number: preState.number -1 }));
        this.setState((preState) => ({ price:this.props.cart.price * (this.state.number-1)}))
    }
    buyHandeler = ()=>{
        this.props.dispatch(changeNumber(this.props.cart.buycode,this.state.number))
        this.props.dispatch(changePrice(this.props.cart.buycode,this.state.price))
       
    };
    render() { 
        return (
            <div>
                <h1>name:{this.props.cart.name}</h1>
                <p>seller:{this.props.cart.seller}</p>
                <div><button onClick={this.addHandeler}>+</button>
                    <p>number:{this.state.number}</p>
                    <button onClick={this.minHandeler}>-</button>
                </div>

                <p>price:{this.state.price}</p>
                <br />
                
                <button onClick={this.buyHandeler} >ادامه فرایند خرید</button>

                

            </div>
        );
    }
}

// function changeAction(val) {
//     return dispatch => {
//         dispatch(changePrice(val));
//     }
// }
// const actionCreators = {
//     change: 
// }

export default connect()(BuyingBasketItem);






















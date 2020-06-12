import React from 'react';
import {connect} from 'react-redux';
import {showFilteredGoods} from '../selector/showFilteredGoods';
import GoodListItem from './GoodListItem';
const GoodList = (props) => (
    <div>
        <h2>GoodList</h2>
        {props.goods.map((good)=> {
            return <GoodListItem key={good.id} {...good} />
        }  
            )}
    </div>
);

const mapStateToStore = (state)=>({
    goods:showFilteredGoods(state.goods,state.filters),
})



export default connect(mapStateToStore)(GoodList);
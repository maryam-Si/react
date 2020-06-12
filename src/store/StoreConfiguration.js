import { createStore, combineReducers } from 'redux';
import goodsReducer from '../reducer/goods';
import filtersReducer from '../reducer/filters';
import buyingBasketReducer from '../reducer/buyingBasket';
export default () => {
    const store = createStore(
        combineReducers({
        goods: goodsReducer,
        filters: filtersReducer,
        buyingBasket:buyingBasketReducer
    }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store
};
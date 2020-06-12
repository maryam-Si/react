import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import StoreConfiguration from './store/StoreConfiguration';
import { addGood } from './action/goods';
import {showFilteredGoods} from './selector/showFilteredGoods';
import { LocalizeProvider } from 'react-localize-redux';

const store = StoreConfiguration();
store.subscribe(() => {
   const state = store.getState()
   
   console.log(state);
})
store.dispatch(addGood({name:'iphonex', price:12000000,brand:'apple',description:'blue',category:'smartphone & tablets', img:1,date:100}));
store.dispatch(addGood({name:'watch', price:1400000,brand:'violet',description:'pink',category:'watches', img:2,date:101}));
store.dispatch(addGood({name:'shirt', price:20000,brand:'zara',description:'white',category:'clothes',img:1,date:102}));
store.dispatch(addGood({name:'shoes', price:800000,brand:'adidas',description:'blue',category:'shoes',img:1,date:103}));




 
const jsx = (
   <LocalizeProvider>
      <Provider store={store}>
         <AppRouter />
      </Provider>
   </LocalizeProvider>
   
);



ReactDOM.render(jsx, document.getElementById('app'));


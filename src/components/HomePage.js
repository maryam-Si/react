import React from 'react';
import GoodList from './GoodList';
import GoodListFilter from './GoodListFilter';
 const HomePage = ()=>(
    <div>
        <GoodListFilter/>
        <GoodList/>
    </div>
);
export default HomePage;
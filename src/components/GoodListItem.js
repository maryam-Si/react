import React from 'react';
import {Link} from 'react-router-dom';
const GoodListItem = (props) => 
   
    (
        <div>
           <Link to={`/good/${props.id}`}><h3>{props.name}</h3></Link>
           <h3>{props.price}تومان</h3> 
           
        </div>
    );

export default GoodListItem;
import React from 'react';
import {connect} from 'react-redux';
import { setCategory,settextFilter,sortByMinPrice,sortByMaxPrice, sortByDate } from '../action/filters';
import {showFilteredGoods} from '../selector/showFilteredGoods';
class GoodListFilter extends React.Component {
    state = { 
        search:''
     }
    onSubmitChange = (e) => {
        e.preventDefault();
        this.props.dispatch(settextFilter(this.state.search))
    } 
    onSearchChange = (e)=> {
        const search = e.target.value;
        this.setState(()=>({search}))
    } 
    render() { 
        return ( 
            <div>
                <form onSubmit={this.onSubmitChange}>
                    <input onChange={this.onSearchChange} type='text' value={this.state.search} />
                    <button>search</button>
                </form>
                
                <label >Choose a category:</label>
                <select  value={this.props.filters.category} onChange={(e)=>
                    { switch (e.target.value) {
                        case 'smartphone & tablets':
                          return this.props.dispatch(setCategory('smartphone & tablets'))  
                        case 'watches':    
                            return this.props.dispatch(setCategory('watches'))  

                        case 'clothes':    
                            return this.props.dispatch(setCategory('clothes'))
                        case 'shoes':
                            return this.props.dispatch(setCategory('shoes'))        
                        default:
                            return this.props.dispatch(setCategory(''));
                    }
   

                }}>
                    <option>category</option>
                    <option value='smartphone & tablets'>smartphone & tablets</option>
                    <option value='watches'>watches</option>
                    <option value='clothes'>clothes</option>
                    <option value='shoes'>shoes</option>
                </select>

                <label>sortBy:</label>
                <select value={this.props.filters.sortBy} onChange={(e)=>{
                    switch (e.target.value) {
                        case 'minprice':
                            return this.props.dispatch(sortByMinPrice());
                            
                        case 'maxprice':
                        return this.props.dispatch(sortByMaxPrice())    
                        case 'date':
                            return this.props.dispatch(sortByDate())
                        default:
                            return true;
                    }
                }}>
                    <option>مرتب سازی</option>
                    <option value='date'>جدیدترین</option>
                    <option value='maxprice'>گرانترین</option>
                    <option value='minprice'>ارزانترین</option>

                </select>
            </div>
         );
    }
}

const mapStateToProp = (state)=>{
    return{
        filters:state.filters
    }
}
 
export default connect(mapStateToProp)(GoodListFilter);

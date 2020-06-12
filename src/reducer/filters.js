const filtersDefaultState = {
    text:'',
    category:'',
    sortBy:''
}

const filtersReducer = (state=filtersDefaultState,action)=>{
    switch (action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                category:action.category
            }
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            }    
        case 'SORT_BY_MIN_PRICE':
            return {
                ...state,
                sortBy:action.sortBy
            }    
        case 'SORT_BY_MAX_PRICE':
            return{
                ...state,
                sortBy:action.sortBy

            } 
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:action.sortBy
            }       
        default:
            return state;
    }

};
export default filtersReducer;
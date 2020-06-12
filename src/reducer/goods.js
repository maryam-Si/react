const goodsReducerDefaultState = [];

const goodsReducer = (state = goodsReducerDefaultState, action) => {
    switch (action.type) {

        case 'ADD_GOOD':
            return [...state, action.good]
        case 'REMOVE_GOOD':
            const result = state.filter((good)=> good.id !== action.id)
            return result
        case 'EDIT_GOOD':
            return state.map((good)=>{
                if(good.id == action.id){
                    return{
                        ...good,
                        ...action.update
                    };
                
                }else return good;
            });

        default:
            return state;
    }
}
export default goodsReducer;
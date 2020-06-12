export const setCategory = (category)=>({
    type:'SET_CATEGORY',
    category:category
});

export const settextFilter = (text)=>({
    type:'SET_TEXT_FILTER',
    text:text
});

export const sortByMinPrice = ()=>({
    type:'SORT_BY_MIN_PRICE',
    sortBy:'minprice'

});

export const sortByMaxPrice = ()=>({
    type:'SORT_BY_MAX_PRICE',
    sortBy:'maxprice'
})

export const sortByDate = ()=>({
    type:'SORT_BY_DATE',
    sortBy:'date'
})

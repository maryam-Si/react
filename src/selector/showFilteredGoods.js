export const showFilteredGoods = (goods, { category, text,sortBy,date }) => {
    return goods.filter((good) => {
        const textMatch = good.name.toLowerCase().includes(text.toLowerCase())

        const categoryMatch = good.category.toLowerCase().includes(category.toLowerCase())
        
        return categoryMatch & textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'minprice'){
            return a.price-b.price;
        }else if(sortBy == 'maxprice'){
            return b.price-a.price;
        }else if(sortBy === 'date'){
            return b.date-a.date;
        }
    })
}
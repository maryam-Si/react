import { v4 as uuidv4 } from 'uuid';

export const addGood = ({
    name = '',
    price = 0,
    brand = '',
    description='',
    category='',
    img='',
    date=0
}= {}) =>({
    type:'ADD_GOOD',
    good: {
        id: uuidv4(),
        name,
        price,
        brand,
        description,
        category,
        img,
        date
    }
});

export const removeGood = ({id=0} = {})=>({
    type:"REMOVE_GOOD"
});

export const editGood = ({id , update}={}) => ({
    type:'EDIT_GOOD',
    id,
    update
});
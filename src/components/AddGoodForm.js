import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

export default class AddGoodForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            name:'',
            price:0,
            brand:'',
            description:'',
            category:'',
            img:'',
            date:moment(),
            error:'',
            calendarFocused:null
        }
    }
    onNameChange = (e) =>{
        const name = e.target.value
        this.setState(()=>({name}))
    }
    onPriceChange = (e)=>{
        const price = e.target.value
        if(!price || price.match(/^\d*(.\d{0,6}?$)/)){
            this.setState(()=>({price}))
        }
    }
    onBrandChange = (e) =>{
        const brand = e.target.value
        this.setState(()=>({brand}))
    }
    onDescriptionChange = (e) =>{
        const description = e.target.value
        this.setState(()=>({description}))
    }
    onCategoryChange = (e) =>{
        const category = e.target.value
        this.setState(()=>({category}))
    }
    onImgChange = (e) =>{
        const img = e.target.value
        this.setState(()=>({img}))
    }
    onDateChange = (date)=>{
        this.setState(()=>({date}));
    }
    onFocusChange = ({focused})=>{
        this.setState(()=>({calendarFocused:focused}))
    }
    onSubmitForm = (e)=>{
        e.preventDefault();
        if(!this.state.name || !this.state.price || !this.state.brand || !this.state.description || !this.state.category || !this.state.img ){
            this.setState(()=>({error:'Please fill the form completely!!'}))
        }else{
            this.setState(()=>({error:''}))
            this.props.onSubmitForm({
                name:this.state.name,
                price:parseFloat(this.state.price,10)*1000,
                brand:this.state.brand,
                description:this.state.description,
                category:this.state.category,
                img:this.state.img,
                date:this.state.date.valueOf()
                
            }) 
        }
    }
    render() { 
        return (<div>
                    <form onSubmit={this.onSubmitForm}>
                        {this.state.error && <p>{this.state.error}</p>}
                        <input onChange={this.onNameChange} type='text' value={this.state.name} placeholder='name' autoFocus />
                        <input onChange={this.onPriceChange} value={this.state.price} type='number' placeholder='price' />
                        <input onChange={this.onBrandChange} value={this.state.brand} type='text' placeholder='brand' />
                        <textarea onChange={this.onDescriptionChange} value={this.state.description} type='text' placeholder='description' />
                        <input onChange={this.onCategoryChange} value={this.state.category} type='text' placeholder='category' />
                        <input onChange={this.onImgChange} value={this.state.img} type='text' placeholder='img' />
                        <SingleDatePicker
                        date={this.state.date}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        //acsess to past days
                        isOutsideRange ={()=>false}
                />  
                        <div><button>add good</button></div>
                        
                    </form>
                </div>);
    }
}

 
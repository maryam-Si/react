import React from 'react';
import AddGoodForm from './AddGoodForm';
import { addGood } from '../action/goods';
import { connect } from 'react-redux';
const AddGood = (props) => (
    <div>
        <h1>Add good</h1>
        <AddGoodForm onSubmitForm={(good) => {
            props.dispatch(addGood(good))
            props.history.push('/')
        }} />
    </div>

); export default connect()(AddGood);
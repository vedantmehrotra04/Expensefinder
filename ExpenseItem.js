import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
    const ClickHandler = () =>{
     props.OnDelete(props.id);

    };
    return(
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.Amount} $</div>
            <button className="button" onClick={ClickHandler}>delete</button>
            </div>
        </div>
    );
}

export default ExpenseItem;
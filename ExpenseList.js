import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem.js';


function ExpenseList(props){
if(props.item.length === 0){
return <h2 className='expenses-list__fallback'>Found no expense</h2>;
}



return(
<ul className='expenses-list'>
    {props.item.map((expense) =>(
     <ExpenseItem id={expense.id} date={expense.date} title={expense.title} Amount={expense.Amount} OnDelete={props.OnDelete} />
    ))}
</ul>
);
    };



export default ExpenseList;
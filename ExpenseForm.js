import React, {useState} from 'react';
import './ExpenseForm.css';


function ExpenseForm(props){
    const  [EnteredTitle, setEnteredTitle] = useState('');
    const  [EnteredDate, setEnteredDate] = useState('');
    const  [EnteredAmount, setEnteredAmount] = useState('');


    const titleHandler = (event) =>{
     setEnteredTitle(event.target.value);
    };


    const amountHandler = (event) =>{
     setEnteredAmount(event.target.value);
    };

    const dateHandler = (event) =>{
     setEnteredDate(event.target.value);
    };
    const formHandler = (event) => {
    event.preventDefault();
    const details = {title: EnteredTitle, date: new Date(EnteredDate), Amount: EnteredAmount};
    console.log(details);
    props.ChangeHandler(details);
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
};
return (
        <form onSubmit={formHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleHandler}/>
            </div>
            <div className="new-expense__control">
            <label>Amount</label>
            <input type='number' onChange={amountHandler}/>
            </div>
            <div className="new-expense__control">
            <label>Date</label>
            <input type="date" onChange={dateHandler} min='2019-01-01' max='2022-12-31'/>
            </div>
            <button type="submit" className="new-expense__actions">Add Expense</button>
            </div>

        </form>
);
}

export default ExpenseForm;




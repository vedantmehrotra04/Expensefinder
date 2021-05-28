import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props){
    const NewChangeHandler = (ExpenseData) =>{
      const NewData = {
          ...ExpenseData,
          id: Math.random().toString()
      };
      props.OnAddExpense(NewData);
    };
  return(
      <div className='new-expense'>
          <ExpenseForm ChangeHandler={NewChangeHandler}/>
      </div>
  )
}




export default NewExpense;


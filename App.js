import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';


const expenses = [
  {id:1, title: 'Car Insurance', Amount: 294.67, date:new Date(2021,2,28)},
  {id:2, title: 'Toilet Paper', Amount: 10, date:new Date(2020,7,14)},
];

function App() {

  const [EnteredExpenses, SetEnteredExpenses] = useState(expenses);
  const ExpenseHandler = (expense) =>{
     SetEnteredExpenses(prev => {
       return [expense, ...prev];
     });
  };
  const OnDelete = (id) =>{
    SetEnteredExpenses(p => {
      const newdata = p.filter( (exp) => exp.id!==id);
      return newdata;
    });
  }
  return (
    <div className="App">
        <NewExpense OnAddExpense={ExpenseHandler}/>
        <Expenses item={EnteredExpenses} OnDelete={OnDelete}/>
        
    </div>
  );
}

export default App;

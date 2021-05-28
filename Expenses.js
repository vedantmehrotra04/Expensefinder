import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import FilterYear from './Filter.js';
import ExpenseList from './ExpenseList.js';


function Expenses(props){
    const [FilteredYear , SetFilteredYear] = useState('2020');

    const filter = props.item.filter(expenses => {
        return expenses.date.getFullYear().toString() === FilteredYear;
    });
    const OnChangeYear = (year) =>{
      SetFilteredYear(year);
    };
    
    return(
    <div className="expenses">
        <FilterYear CurrentYear={FilteredYear} UpdateYear={OnChangeYear} />
        <ExpenseList item={filter} OnDelete={props.OnDelete}/>
    </div>

    );
}

export default Expenses;


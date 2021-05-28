import React from 'react';
import './Filter.css';


function FilterYear(props){
const dropdownChangeHandler = (event) =>{
props.UpdateYear(event.target.value);
};

return(
    <div className='expense-filter' >
    <div clasName='expense-filter__control'>
    <label>Filter by year</label>
    <select value={props.CurrentYear} onChange={dropdownChangeHandler} >
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
    </select>
    </div>
    </div>

)
}

export default FilterYear;

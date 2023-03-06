import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) =>  {

    const [year, setYear]= useState('2022');
    
    const yearChangeHandler = (selectedYear) => {
        setYear(selectedYear);
        console.log(year);
    };
   const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === year );
    return (
        <Card className='expenses'>
        <ExpensesFilter selected={year} onChangeYear={yearChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
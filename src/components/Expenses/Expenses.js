import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) =>  {

    const [year, setYear]= useState('2022');
    const yearChangeHandler = (selectedYear) => {
        setYear(selectedYear);
        console.log(year);
    };
    return (
        <div>
        <ExpensesFilter selected={year} onChangeYear={yearChangeHandler}/>
        <Card className='expenses'>
        {
            props.expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount}
            date={expense.date} />)
        }
        </Card>

        </div>
    );
}

export default Expenses;
import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const amoutChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };
    const submitExpenseHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        props.onSaveExpense({
            title: title,
            amount: amount,
            date: new Date(date)
        });

        setTitle('');
        setAmount('');
        setDate('');
    }
    const CancelExpenseHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        props.onResetExpense(false);
    };
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>title</label>
                    <input type="text" onChange={titleChangeHandler} value={title}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"  min='0.01'  step='0.01' onChange={amoutChangeHandler} value={amount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} value={date} />
                </div>
            </div>
                <div className="new-expense__actions">
                <button  type="reset" onClick={CancelExpenseHandler}>Cancel</button>
                    <button type="submit" onClick={submitExpenseHandler}>Add Expense</button>
                </div>
        </form>
    );
};

export default ExpenseForm;
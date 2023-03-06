import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) => {

    const [newExpense, showNewExpenseForm] = useState(false);

    const addExpenseHandler = (expense) => {
        props.onAddExpense(expense);
        showNewExpenseForm(false);
    };

    const newExpenseHandler = (event) => {
        showNewExpenseForm(true);
    }; 

    if(newExpense) {
        return (
            <Card className="new-expense">
             <ExpenseForm onSaveExpense={addExpenseHandler} onResetExpense={showNewExpenseForm}/>
            </Card>
        );
    } 
      return (<Card className="new-expense new-expense__actions">
            <button onClick={newExpenseHandler}>Add New Expense</button>
        </Card>
      );
    
};

export default NewExpense;
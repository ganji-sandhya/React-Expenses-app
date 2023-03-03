import React from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) => {

    const addExpenseHandler = (expense) => {
        props.onAddExpense(expense);
    };
    return (
        <Card className="new-expense">
         <ExpenseForm onSaveExpense={addExpenseHandler} />
        </Card>
    );
};

export default NewExpense;
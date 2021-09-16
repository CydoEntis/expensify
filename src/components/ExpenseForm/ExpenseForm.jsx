import React, { useContext, useState } from "react";
import ExpensesContext from "../../contexts/ExpensesContext";

const ExpenseForm = () => {
	const expensesCtx = useContext(ExpensesContext);
	const [expenseName, setExpenseName] = useState("");

	const expenseNameHandler = (e) => {
		setExpenseName(e.target.value);
	};

	// const { addExpense } = expensesCtx;

	const submitHandler = (e) => {
		e.preventDefault();
		const newExpense = {
			id: Math.floor(Math.random() * 1000),
			name: expenseName,
		};

		expensesCtx.addExpense(newExpense);

		setExpenseName("");
	};

	return (
		<form onSubmit={submitHandler}>
			<input type="text" placeholder="Name" onChange={expenseNameHandler} value={expenseName} />
			{expensesCtx.expenses.map((expense) => (
				<p key={expense.id}>{expense.name}</p>
			))}
		</form>
	);
};

export default ExpenseForm;

import React, { useState } from "react";
import ExpensesContext from "./ExpensesContext";

const ExpensesContextProvider = ({ children }) => {
	const [expenses, setExpenses] = useState([]);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	const removeExpenseHandler = (id) => {
		const updatedExpenses = expenses.filter((expense) => expense.id !== id);
		setExpenses(updatedExpenses);

		console.log(expenses);
	};

	const expensesContext = {
		expenses: expenses,
		addExpense: addExpenseHandler,
		removeExpense: removeExpenseHandler,
	};

	return <ExpensesContext.Provider value={expensesContext}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;

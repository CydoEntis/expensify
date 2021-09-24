import React, { useState, useEffect } from "react";
import ExpensesContext from "./ExpensesContext";

const ExpensesContextProvider = ({ children }) => {
	const [expenses, setExpenses] = useState([]);

	useEffect(() => {
		const data = localStorage.getItem("expenses");
		if (data) {
			setExpenses(JSON.parse(data));
		} else {
			setExpenses([]);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("expenses", JSON.stringify(expenses));
	});

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	const removeExpenseHandler = (id) => {
		const updatedExpenses = expenses.filter((expense) => expense.id !== id);
		setExpenses(updatedExpenses);
	};

	const expensesContext = {
		expenses: expenses,
		addExpense: addExpenseHandler,
		removeExpense: removeExpenseHandler,
	};

	return <ExpensesContext.Provider value={expensesContext}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;

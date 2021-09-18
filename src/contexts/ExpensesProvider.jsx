import React, { useState } from "react";
import ExpensesContext from "./ExpensesContext";

// const TEMP_EXPENSES = [
// 	{
// 		id: "e1",
// 		name: "Toilet Paper",
// 		type: "Grocery",
// 		cost: 94.12,
// 		date: new Date(2020, 7, 14),
// 	},
// 	{ id: "e2", name: "New TV", type: "Recreation", cost: 799.49, date: new Date(2021, 2, 12) },
// 	{
// 		id: "e3",
// 		name: "Car Insurance",
// 		type: "Bill",
// 		cost: 294.67,
// 		date: new Date(2021, 2, 28),
// 	},
// 	{
// 		id: "e4",
// 		name: "New Desk (Wooden)",
// 		type: "Decor",
// 		cost: 450,
// 		date: new Date(2021, 5, 12),
// 	},
// ];

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
	};

	const expensesContext = {
		expenses: expenses,
		addExpense: addExpenseHandler,
		removeExpense: removeExpenseHandler,
	};

	return <ExpensesContext.Provider value={expensesContext}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;

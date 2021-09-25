import { createContext } from 'react';

const ExpensesContext = createContext({
	expenses: [],
	addExpense: (expense) => {},
	removeExpense: (id) => {},
});

export default ExpensesContext;

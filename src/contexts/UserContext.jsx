import { createContext } from 'react';

const UserContext = createContext({
	isLoggedIn: false,
	username: 'User',
	monthlyBudget: 5000,
	monthlyExpenses: [],
	loginHandler: () => {},
	logoutHandler: () => {},
	usernameHandler: (username) => {},
	monthlyBudgetHandler: (monthlyBudget) => {},
	monthlyExpensesHandler: (monthlyExpenses) => {},
	addExpenseHandler: (expense) => {},
	removeExpenseHandler: (id) => {},
});

export default UserContext;

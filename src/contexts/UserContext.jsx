import { createContext } from 'react';

const UserContext = createContext({
	isLoggedIn: false,
	username: 'User',
	income: 5000,
	monthlyExpenses: [],
	loginHandler: () => {},
	logoutHandler: () => {},
	usernameHandler: (username) => {},
	incomeHandler: (income) => {},
	monthlyExpensesHandler: (monthlyExpenses) => {},
	addExpenseHandler: (expense) => {},
	removeExpenseHandler: (id) => {},
});

export default UserContext;

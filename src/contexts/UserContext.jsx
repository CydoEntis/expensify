import { createContext } from 'react';

const UserContext = createContext({
	isLoggedIn: false,
	username: 'User',
	monthlyIncome: 5000,
	monthlyExpenses: [],
	loginHandler: () => {},
	logoutHandler: () => {},
	usernameHandler: (username) => {},
	monthlyIncomeHandler: (monthlyIncome) => {},
	monthlyExpensesHandler: (monthlyExpenses) => {},
});

export default UserContext;

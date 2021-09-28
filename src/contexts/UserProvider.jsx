import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../helpers/helpers';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState('User');
	const [password, setPassword] = useState('User');
	const [monthlyBudget, setMonthlyBudget] = useState(5000);
	const [monthlyExpenses, setMonthlyExpenses] = useState([]);

	useEffect(() => {
		const data = localStorage.getItem('expensifyUser');

		if (data) {
			const parsedData = JSON.parse(data);
			setIsLoggedIn(parsedData.isLoggedIn);
			setUsername(parsedData.username);
			setMonthlyBudget(parsedData.monthlyBudget);
			setMonthlyExpenses(parsedData.monthlyExpenses);
		} else {
			return;
		}
	}, [isLoggedIn, setIsLoggedIn, setUsername, setMonthlyBudget, setMonthlyExpenses]);

	const loginHandler = () => {
		setIsLoggedIn(true);

		const data = getUserProfile();

		const updatedData = { ...data, isLoggedIn: true };

		localStorage.setItem('expensifyUser', JSON.stringify(updatedData));
	};

	const logoutHandler = () => {
		const data = getUserProfile();

		const updatedData = { ...data, isLoggedIn: false };

		localStorage.setItem('expensifyUser', JSON.stringify(updatedData));

		setIsLoggedIn(false);
	};

	const usernameHandler = (username) => {
		setUsername(username);
	};

	const passwordHandler = (password) => {
		setPassword(password);
	};

	const monthlyBudgetHandler = (monthlyIncom) => {
		setMonthlyBudget(monthlyBudget);
	};

	const monthlyExpensesHandler = (monthlyExpenses) => {
		setMonthlyExpenses((prevMonthlyExpenses) => {
			return [monthlyExpenses, ...prevMonthlyExpenses];
		});
	};

	const addExpenseHandler = (expense) => {
		setMonthlyExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	const removeExpenseHandler = (id) => {
		const updatedExpenses = monthlyExpenses.filter((expense) => expense.id !== id);
		setMonthlyExpenses(updatedExpenses);
	};

	const userContext = {
		isLoggedIn,
		username,
		password,
		monthlyBudget,
		monthlyExpenses,
		loginHandler,
		logoutHandler,
		usernameHandler,
		passwordHandler,
		monthlyBudgetHandler,
		monthlyExpensesHandler,
		addExpenseHandler,
		removeExpenseHandler,
	};

	return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>;
};

export default UserProvider;

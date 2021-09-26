import React, { useState, useEffect } from 'react';
import { loadFromLocalStorage } from '../helpers/helpers';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState('User');
	const [monthlyIncome, setMonthlyIncome] = useState(5000);
	const [monthlyExpenses, setMonthlyExpenses] = useState([]);

	const loginHandler = () => {
		const data = localStorage.getItem('expensifyProfile');
		let parsedData;

		if (data) parsedData = JSON.parse(data);

		if (!parsedData.isLoggedIn) setIsLoggedIn(true);
		else return;
	};

	const logoutHandler = () => {
		const data = localStorage.getItem('expensifyProfile');
		let parsedData;

		if (data) parsedData = JSON.parse(data);

		if (parsedData.isLoggedIn) setIsLoggedIn(false);
		else return;
	};

	const usernameHandler = (username) => {
		setUsername(username);
	};

	const monthlyIncomeHandler = (monthlyIncom) => {
		setMonthlyIncome(monthlyIncome);
	};

	const monthlyExpensesHandler = (monthlyExpenses) => {
		setMonthlyExpenses((prevMonthlyExpenses) => {
			return [monthlyExpenses, ...prevMonthlyExpenses];
		});
	};

	const userContext = {
		isLoggedIn,
		username,
		monthlyIncome,
		monthlyExpenses,
		loginHandler,
		logoutHandler,
		usernameHandler,
		monthlyIncomeHandler,
		monthlyExpensesHandler,
	};

	return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>;
};

export default UserProvider;

import React, { useState, useEffect } from 'react';
import { getUserProfile, loadFromLocalStorage } from '../helpers/helpers';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState('User');
	const [password, setPassword] = useState('User');
	const [monthlyIncome, setMonthlyIncome] = useState(5000);
	const [monthlyExpenses, setMonthlyExpenses] = useState([]);

	useEffect(() => {
		const data = localStorage.getItem('expensifyUser');

		if (data) {
			const parsedData = JSON.parse(data);
			setIsLoggedIn(parsedData.isLoggedIn);
			setUsername(parsedData.username);
			setMonthlyIncome(parsedData.monthlyIncome);
			setMonthlyExpenses(parsedData.monthlyExpenses);
		} else {
			return;
		}
	}, []);

	const loginHandler = () => {
		const data = getUserProfile();

		const updatedData = { ...data, isLoggedIn: true };

		localStorage.setItem('expensifyUser', JSON.stringify(updatedData));

		setIsLoggedIn(true);
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
		password,
		monthlyIncome,
		monthlyExpenses,
		loginHandler,
		logoutHandler,
		usernameHandler,
		passwordHandler,
		monthlyIncomeHandler,
		monthlyExpensesHandler,
	};

	return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>;
};

export default UserProvider;

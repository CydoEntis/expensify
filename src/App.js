import React, { useState, useContext } from 'react';
import styles from './App.module.css';
import Auth from './components/Auth/Auth';

// import ExpensesContextProvider from './contexts/ExpensesProvider';

import Budget from './components/Budget/Budget';
import UserContext from './contexts/UserContext';
import Expenses from './components/Expenses/Expenses.jsx';
import AddExpenseBtn from './components/Expenses/AddExpenseBtn';
import ExpenseForm from './components/Forms/ExpenseForm';
import UserProvider from './contexts/UserProvider';
import NavBar from './components/Nav/NavBar';
import useInput from './hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';

function App() {
	const userCtx = useContext(UserContext);
	const [showExpenseForm, setShowExpenseForm] = useState(false);
	const [showNavMenu, setShowNavMenu] = useState(false);

	const toggleNavMenu = () => {
		setShowNavMenu((prevState) => {
			return !prevState;
		});
	};

	const {
		value: selectionValue,
		selectionId,
		dropdownHandler: selectionChangeHandler,
		inputBlurHandler: selectionBlurHandler,
	} = useInput(isNotEmpty);

	const toggleExpenseFormHandler = () => {
		setShowExpenseForm((prevState) => {
			return !prevState;
		});
	};

	return (
		<UserProvider>
			<div className={styles.App}>
				{!userCtx.isLoggedIn && <Auth />}
				{<NavBar showNavMenu={showNavMenu} onClick={toggleNavMenu} />}
				<Budget
					value={selectionValue}
					id={selectionId}
					onChange={selectionChangeHandler}
					onBlur={selectionBlurHandler}
				/>
				<Expenses filterMonth={selectionValue} />
				{showExpenseForm && <ExpenseForm onClose={toggleExpenseFormHandler} />}
				{!showNavMenu && <AddExpenseBtn onToggleForm={toggleExpenseFormHandler} />}
			</div>
		</UserProvider>
	);
}

export default App;

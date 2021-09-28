import React, { useState, useContext } from 'react';
import styles from './App.module.css';
import Auth from './components/Auth/Auth';

import ExpensesFilter from './components/Filter/ExpensesFilter';
import Budget from './components/Budget/Budget';
import UserContext from './contexts/UserContext';
import Expenses from './components/Expenses/Expenses.jsx';
import AddExpenseBtn from './components/Expenses/AddExpenseBtn';
import ExpenseForm from './components/Forms/ExpenseForm';
import UserProvider from './contexts/UserProvider';
import NavBar from './components/Nav/NavBar';
import useInput from './hooks/use-input';

const MONTH_SELECTION = [
	{ id: 1, value: 'January' },
	{ id: 2, value: 'Febuary' },
	{ id: 3, value: 'March' },
	{ id: 4, value: 'April' },
	{ id: 5, value: 'May' },
	{ id: 6, value: 'June' },
	{ id: 7, value: 'July' },
	{ id: 8, value: 'August' },
	{ id: 9, value: 'September' },
	{ id: 10, value: 'October' },
	{ id: 11, value: 'November' },
	{ id: 12, value: 'December' },
];

const YEAR_SELECTION = [
	{ id: 1, value: '2021' },
	{ id: 2, value: '2022' },
	{ id: 3, value: '2023' },
	{ id: 4, value: '2024' },
	{ id: 5, value: '2025' },
	{ id: 6, value: '2026' },
	{ id: 7, value: '2027' },
	{ id: 8, value: '2027' },
	{ id: 9, value: '2028' },
	{ id: 10, value: '2029' },
	{ id: 11, value: '2030' },
	{ id: 12, value: '2031' },
];

const month = [
	'January',
	'Febuary',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

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
		value: monthValue,
		selectionId: monthId,
		dropdownHandler: monthChangeHandler,
		inputBlurHandler: monthBlurHandler,
	} = useInput(isNotEmpty);

	const {
		value: yearValue,
		selectionId: yearId,
		dropdownHandler: yearChangeHandler,
		inputBlurHandler: yearBlurHandler,
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
				<div>
					{<NavBar showNavMenu={showNavMenu} onClick={toggleNavMenu} />}
					<Budget
						monthValue={monthValue || month[new Date().getMonth()]}
						yearValue={yearValue || new Date().getFullYear().toString()}
					/>
					<div className={styles.filters}>
						<ExpensesFilter
							defaultVal={month[new Date().getMonth()]}
							selections={MONTH_SELECTION}
							value={monthValue}
							id={monthId}
							onChange={monthChangeHandler}
							onBlur={monthBlurHandler}
						/>
						<ExpensesFilter
							defaultVal={new Date().getFullYear()}
							selections={YEAR_SELECTION}
							value={yearValue}
							id={yearId}
							onChange={yearChangeHandler}
							onBlur={yearBlurHandler}
						/>
					</div>
					<Expenses
						filterMonth={monthValue || month[new Date().getMonth().toString()]}
						filterYear={yearValue || new Date().getFullYear().toString()}
					/>
					{showExpenseForm && <ExpenseForm onClose={toggleExpenseFormHandler} />}
					{!showNavMenu && <AddExpenseBtn onToggleForm={toggleExpenseFormHandler} />}
				</div>
			</div>
		</UserProvider>
	);
}

export default App;

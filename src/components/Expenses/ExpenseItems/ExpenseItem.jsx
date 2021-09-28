import React, { useContext } from 'react';
import { getUserProfile } from '../../../helpers/helpers';

import ExpenseType from './ExpenseType';
import ExpenseName from './ExpenseName';
import ExpenseCost from './ExpenseCost';
import ExpenseDate from './ExpenseDate';

import styles from './ExpenseItem.module.css';
import Button from '../../UI/Buttons/Button';
import UserContext from '../../../contexts/UserContext';

const ExpenseItem = (props) => {
	const userCtx = useContext(UserContext);

	const removeExpense = () => {
		userCtx.removeExpenseHandler(props.id);

		const data = getUserProfile();

		const updatedExpenses = data.monthlyExpenses.filter((expense) => expense.id !== props.id);

		const updatedData = { ...data, monthlyExpenses: updatedExpenses };

		localStorage.setItem('expensifyUser', JSON.stringify(updatedData));
	};

	return (
		<div className={styles['expense-item']}>
			<div className={styles['expense-item--flex']}>
				<ExpenseType className={styles['expense-item--type']} type={props.type} />
				<Button onClick={removeExpense}>
					<i className={`${styles['expense-item--options']} bx bx-x`}></i>
				</Button>
			</div>
			<div className={styles['expense-item--flex']}>
				<ExpenseName className={styles['expense-item--name']} name={props.name} />
				<ExpenseCost className={styles['expense-item--cost']} amount={props.cost} />
			</div>
			<ExpenseDate className={styles['expense-item--date']} date={props.date} />
		</div>
	);
};

export default ExpenseItem;

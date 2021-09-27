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
			<div className={styles['expense-item--container']}>
				<ExpenseType className={styles['expense-item__type']} type={props.type} />
				<div className={styles['expense-item--flex']}>
					<ExpenseName className={styles['expense-item__name']} name={props.name} />
					<div className={styles['expense-item--wrapper']}>
						<ExpenseCost className={styles['expense-item__cost']} amount={props.cost} />
					</div>
				</div>
				<ExpenseDate className={styles['expense-item__date']} date={props.date} />
			</div>
			<Button className={styles['expense-item--delete-btn']} onClick={removeExpense}>
				<i className="bx bx-trash-alt"></i>
				{/* <i className="bx bx-x"></i> */}
				{/* <i className="bx bx-x-circle"></i> */}
			</Button>
		</div>
	);
};

export default ExpenseItem;

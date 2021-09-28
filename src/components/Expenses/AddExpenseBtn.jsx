import React from 'react';

import Button from '../UI/Buttons/Button';

import styles from './AddExpenseBtn.module.css';

const AddExpenseBtn = ({ onToggleForm }) => {
	return (
		<div className={styles['add-expense--container']}>
			<Button onClick={onToggleForm} className={styles['add-expense--btn']}>
				<i className="bx bx-plus"></i>
			</Button>
		</div>
	);
};

export default AddExpenseBtn;

import React from 'react';

import Button from '../UI/Buttons/Button';

import styles from './AddExpenseBtn.module.css';

const AddExpenseBtn = ({ onToggleForm }) => {
	return (
		<div className={styles['wrapper']}>
			<div className={styles['btn-wrapper']}>
				<Button onClick={onToggleForm} className={styles['btn--add']}>
					<i className="bx bx-plus"></i>
				</Button>
			</div>
		</div>
	);
};

export default AddExpenseBtn;

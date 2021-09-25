import React from 'react';

import Dropdown from '../UI/Inputs/Dropdown';
import styles from './ExpensesFilter.module.css';

import useInput from '../../hooks/use-input';

const SELECTIONS = [
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

// const month = [
// 	'January',
// 	'Febuary',
// 	'March',
// 	'April',
// 	'May',
// 	'June',
// 	'July',
// 	'August',
// 	'September',
// 	'October',
// 	'November',
// 	'December',
// ];

const isNotEmpty = (value) => value.trim() !== '';

const ExpensesFilter = () => {
	const {
		value: selectionValue,
		selectionId,
		dropdownHandler: selectionChangeHandler,
		inputBlurHandler: selectionBlurHandler,
	} = useInput(isNotEmpty);

	return (
		<div className={styles['expenses-filter']}>
			<div className={styles['expenses-filter__controls']}>
				<Dropdown
					default={'All'}
					className={styles['expenses-filter--dropdown']}
					type="text"
					placeholder="Type"
					selections={SELECTIONS}
					selectionId={selectionId}
					onChange={selectionChangeHandler}
					onBlur={selectionBlurHandler}
					value={selectionValue}
				/>
			</div>
		</div>
	);
};

export default ExpensesFilter;

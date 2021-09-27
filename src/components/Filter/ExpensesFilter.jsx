import React from 'react';

import Dropdown from '../UI/Inputs/Dropdown';

const ExpensesFilter = ({ defaultVal, selections, value, id, onChange, onBlur }) => {
	return (
		<Dropdown
			default={defaultVal}
			type="text"
			placeholder="Type"
			selections={selections}
			selectionId={id}
			onChange={onChange}
			onBlur={onBlur}
			value={value}
		/>
	);
};

export default ExpensesFilter;

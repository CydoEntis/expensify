import React, { useState } from 'react';

import styles from './Dropdown.module.css';

const Dropdown = (props) => {
	const [open, setOpen] = useState(false);
	const [selection, setSelection] = useState([]);

	const toggle = () => {
		setOpen((prevState) => {
			return !prevState;
		});
	};

	const handleOnClick = (item) => {
		if (!selection.some((current) => current.id === item.id)) {
			setSelection([item]);
			props.onChange(item);
			toggle();
		}
	};

	return (
		<div className={`${props.className} ${styles.dropdown}`}>
			<div
				className={styles.dropdown__header}
				tabIndex={0}
				role="button"
				onKeyPress={toggle}
				onClick={toggle}>
				<div className={styles.dropdown__title}>
					<p>
						<span>
							{props.selectionId === undefined
								? props.default
								: props.selections[props.selectionId - 1].value}
						</span>
					</p>
				</div>
				<div className={styles.dropdown__actions}>
					<p>
						{open ? (
							<i className="bx bx-chevron-left"></i>
						) : (
							<i className="bx bx-chevron-right"></i>
						)}
					</p>
				</div>
			</div>
			{open && (
				<ul className={styles.dropdown__list}>
					{props.selections.map((type) => (
						<li className={styles.dropdown__item} key={type.id}>
							<button
								type="button"
								onClick={() => {
									handleOnClick(type);
								}}>
								<span>{type.value}</span>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;

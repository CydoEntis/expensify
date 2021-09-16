import React, { useState } from "react";

import styles from "./Dropdown.module.css";

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

	const isItemInSelection = (item) => {
		if (selection.find((current) => current.id === item.id)) return true;
		return false;
	};

	return (
		<div className={styles.dropdown}>
			<div
				className={styles.dropdown__header}
				tabIndex={0}
				role="button"
				onKeyPress={toggle}
				onClick={toggle}>
				<div className={styles.dropdown__title}>
					<p>
						<span>
							{props.typeId === undefined ? "Expense Type" : props.types[props.typeId - 1].value}
						</span>
					</p>
				</div>
				<div className={styles.dropdown__actions}>
					<p>{open ? "Close" : "Open"}</p>
				</div>
			</div>
			{open && (
				<ul className={styles.dropdown__list}>
					{props.types.map((type) => (
						<li className={styles.dropdown__item} key={type.id}>
							<button
								type="button"
								onClick={() => {
									handleOnClick(type);
								}}>
								<span>{type.value}</span>
								<span>{isItemInSelection(type) && "Selected"}</span>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;

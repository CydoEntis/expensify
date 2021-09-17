import React from "react";

import styles from "./ModalOverlay.module.css";

const ModalOverlay = ({ children }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{children}</div>
		</div>
	);
};

export default ModalOverlay;

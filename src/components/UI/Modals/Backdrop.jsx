import React from "react";

import styles from "./Backdrop.module.css";

const Backdrop = ({ onClose }) => {
	return <div className={styles.backdrop} onClick={onClose} />;
};

export default Backdrop;

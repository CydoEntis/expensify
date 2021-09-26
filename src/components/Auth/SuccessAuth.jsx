import React from 'react';

import styles from './Auth.module.css';

const SuccessAuth = ({ children }) => {
	return <div className={styles['auth-message']}>{children}</div>;
};

export default SuccessAuth;

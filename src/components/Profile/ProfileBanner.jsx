import React, { useState, useContext } from "react";
import User from "./User";
import ProfileSettings from "./ProfileSettings";
import SettingsBtn from "../Navigation/SettingsBtn";

import styles from "./ProfileBanner.module.css";
import UserContext from "../../contexts/UserContext";

const ProfileBanner = () => {
	const userCtx = useContext(UserContext);

	let username;

	if (userCtx.username.length === 0) {
		username = "User";
	} else {
		username = userCtx.username;
	}

	const [showSettings, setShowSettings] = useState(false);

	const toggleSettingsHandler = () => {
		setShowSettings((prevState) => {
			return !prevState;
		});
	};

	return (
		<div className={styles.profile}>
			{showSettings && <ProfileSettings onClose={toggleSettingsHandler} />}
			<User username={username} />
			<SettingsBtn className={styles["profile--icon"]} onToggleSettings={toggleSettingsHandler} />
		</div>
	);
};

export default ProfileBanner;

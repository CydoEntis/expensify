import React from "react";
import User from "./User";

import styles from "./ProfileBanner.module.css";
import SettingsBtn from "../Navigation/SettingsBtn";

const ProfileBanner = () => {
	return (
		<div className={styles.profile}>
			<User username={"Milton"} />
			<SettingsBtn className={styles["profile--icon"]} />
		</div>
	);
};

export default ProfileBanner;

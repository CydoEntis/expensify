import React from "react";
import Button from "../UI/Buttons/Button";

export default function SettingsBtn({ onToggleSettings, className }) {
	return (
		<Button onClick={onToggleSettings} className={className}>
			<i className="bx bx-user-circle"></i>
		</Button>
	);
}

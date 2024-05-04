import { FC } from "react";
import { UserProps } from "../types";
import "./style.scss";

export const CardInfo: FC<UserProps> = ({ phone, username, website }) => {
	console.log("Render CardInfo")
	return (
		<div className="card-info">
			<p className="card-info__list-item">Username: {username}</p>
			<p className="card-info__list-item">Phone: {phone}</p>
			<p className="card-info__list-item">Website: {website}</p>
		</div>
	);
};
import {FC} from "react";
import { Button, ButtonProps } from "../button";
import "./style.scss";

export const ButtonWithLabel: FC<ButtonProps> = ({title, children, ...props}) => {

	return (
		<div className="button-with-label">
			<p className="button-with-label__label">{title}</p>
			<Button {...props}>{children}</Button>
		</div>
	);
};

ButtonWithLabel.defaultProps = {
	title: "Press Me"
}
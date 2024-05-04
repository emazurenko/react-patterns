import React, {FC} from "react";
import cn from "clsx";
import "./style.scss";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
	children?: string;
}

export const Button:FC<ButtonProps> = ({ className, children , ...props}) => {

	return (
		<button {...props} className={cn("button", className)}>{children}</button>
	);
};
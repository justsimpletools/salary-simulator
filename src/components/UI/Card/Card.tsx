import React from "react";

interface ICardProps {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

const Card: React.FC<ICardProps> = ({ children, className = "", onClick }) => (
	<div
		className={`bg-white rounded-lg shadow-md p-6 ${className}`}
		onClick={onClick}
	>
		{children}
	</div>
);

export default Card;

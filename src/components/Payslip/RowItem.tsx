import React from "react";

interface IRowItemProps {
	label: string;
	value: number;
	isBold?: boolean;
	isSeparator?: boolean;
}

const RowItem: React.FC<IRowItemProps> = ({
	label,
	value,
	isBold = false,
	isSeparator = false,
}) => {
	return (
		<div
			className={`flex justify-between py-2 px-3 ${
				isSeparator ? "border-t-2 border-gray-400 mt-2 pt-3" : ""
			} ${isBold ? "font-bold bg-gray-50" : ""}`}
		>
			<span className={isBold ? "text-gray-900" : "text-gray-700"}>
				{label}
			</span>
			<span className={isBold ? "text-gray-900" : "text-gray-700"}>
				{value.toFixed(2)} DH
			</span>
		</div>
	);
};

export default RowItem;

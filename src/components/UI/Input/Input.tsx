import React from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

const Input: React.FC<IInputProps> = ({
	label,
	type,
	onFocus,
	...inputProps
}) => {
	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		if (type === "number" && e.target.value === "0") {
			e.target.value = "";
		}
		if (onFocus) {
			onFocus(e);
		}
	};

	return (
		<div className="mb-4">
			<label className="block text-sm font-medium text-gray-700 mb-1">
				{label}
			</label>
			<input
				type={type}
				{...inputProps}
				className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				onFocus={handleFocus}
			/>
		</div>
	);
};

export default Input;

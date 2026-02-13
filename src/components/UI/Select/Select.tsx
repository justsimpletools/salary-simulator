import React from "react";

interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label: string;
	options: string[];
}

const Select: React.FC<ISelectProps> = ({ label, options, ...selectProps }) => (
	<div className="mb-4">
		<label className="block text-sm font-medium text-gray-700 mb-1">
			{label}
		</label>
		<select
			{...selectProps}
			className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
		>
			<option value="">Sélectionner...</option>
			{options.map((opt) => (
				<option key={opt} value={opt}>
					{opt}
				</option>
			))}
		</select>
	</div>
);

export default Select;

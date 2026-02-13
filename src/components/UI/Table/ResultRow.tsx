import React from "react";

interface IResultRowProps {
	label: string;
	value: number;
}

const ResultRow: React.FC<IResultRowProps> = ({ label, value }) => (
	<div className="flex justify-between py-2 border-b border-gray-200">
		<span className="text-gray-700">{label}</span>
		<span className="font-semibold text-gray-900">
			{value.toFixed(2)} DH
		</span>
	</div>
);

export default ResultRow;

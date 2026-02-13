import React from "react";
import { Trash2 } from "lucide-react";

import Input from "@/components/UI/Input/Input";

import { IAllowance } from "@/data/allowance";

interface IAllowancesListProps {
	allowances: IAllowance[];
	setAllowances: (allowances: IAllowance[]) => void;
}

const List: React.FC<IAllowancesListProps> = ({ allowances, setAllowances }) => {
	// Update existing allowance value
	function updateAllowanceValue(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		const updatedAllowances = allowances.map((allowance) =>
			allowance.name === name ? { ...allowance, value: Number(value) } : allowance
		);
		setAllowances(updatedAllowances);
	}

	// Remove allowance
	function handleRemoveAllowance(allowanceName: string) {
		const updatedAllowances = allowances.filter(
			(allowance) => allowance.name !== allowanceName
		);
		setAllowances(updatedAllowances);
	}
	return (
		<div className="space-y-3">
			{allowances.length === 0 ? (
				<p className="text-gray-500 text-center py-4">
					Aucune indemnité ajoutée
				</p>
			) : (
				allowances.map((allowance, index) => (
					<div key={index} className="flex gap-3 items-center">
						<div className="flex-1">
							<Input
								label={allowance.label}
								name={allowance.name}
								value={allowance.value}
								onChange={updateAllowanceValue}
								type="number"
							/>
						</div>
						<button
							onClick={() => handleRemoveAllowance(allowance.name)}
							className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors mt-2"
							title="Supprimer cette prime"
						>
							<Trash2 size={18} />
						</button>
					</div>
				))
			)}
		</div>
	);
};

export default List;

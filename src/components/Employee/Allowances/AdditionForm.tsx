import React, { useState } from "react";
import allowanceRefs, { IAllowance, IAllowanceRef } from "@/data/allowance";

interface IAdditionFormProps {
	allowances: IAllowance[];
	addAllowance: (allowance: IAllowance) => void;
	cancelAllowanceAddition: () => void;
}

const AdditionForm: React.FC<IAdditionFormProps> = ({
	allowances,
	addAllowance,
	cancelAllowanceAddition,
}) => {
	const [newAllowanceValue, setNewAllowanceValue] = useState(0);
	const [selectedAllowanceRef, setSelectedAllowanceRef] =
		useState<IAllowanceRef | null>(null);
	// Get available allowances (not already added)
	const availableAllowances = allowanceRefs.filter(
		(ref) => !allowances.some((allowance) => allowance.name === ref.name)
	);

	// Add new allowance from list
	function handleAddAllowance() {
		if (!selectedAllowanceRef) {
			alert("Veuillez sélectionner une prime");
			return;
		}

		// Calculate exempted portion
		const exemptedPortion = selectedAllowanceRef.exemptionFun(
			{
				...selectedAllowanceRef,
				value: newAllowanceValue,
				exemptedPortion: 0,
			} as IAllowance,
			{ baseSalary: 0, benefitsInKind: 0, allowances: [], Bonuses: [] }
		);

		const newAllowance: IAllowance = {
			...selectedAllowanceRef,
			value: newAllowanceValue,
			exemptedPortion: Math.min(exemptedPortion, newAllowanceValue),
		};

		addAllowance(newAllowance);
		setSelectedAllowanceRef(null);
		setNewAllowanceValue(0);
	}

	function cancelAddition() {
		cancelAllowanceAddition();
		setSelectedAllowanceRef(null);
		setNewAllowanceValue(0);
	}

	return (
		<div className="mb-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
			<h4 className="font-semibold text-gray-800 mb-3">
				Ajouter une nouvelle prime
			</h4>
			<div className="space-y-3">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Sélectionner une prime
					</label>
					<select
						value={selectedAllowanceRef?.name || ""}
						onChange={(e) => {
							const selected = allowanceRefs.find(
								(ref) => ref.name === e.target.value
							);
							setSelectedAllowanceRef(selected || null);
						}}
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
					>
						<option value="">-- Choisir une prime --</option>
						{availableAllowances.map((allowance) => (
							<option key={allowance.name} value={allowance.name}>
								{allowance.label}
							</option>
						))}
					</select>
				</div>

				{selectedAllowanceRef && (
					<>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Montant (DH)
							</label>
							<input
								type="number"
								value={newAllowanceValue}
								onChange={(e) =>
									setNewAllowanceValue(Number(e.target.value))
								}
								placeholder="0"
								min="0"
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
					</>
				)}

				<div className="flex gap-2 pt-2">
					<button
						onClick={handleAddAllowance}
						disabled={
							!selectedAllowanceRef || newAllowanceValue <= 0
						}
						className="flex-1 bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
					>
						Ajouter
					</button>
					<button
						onClick={cancelAddition}
						className="flex-1 bg-gray-400 text-white font-medium py-2 rounded-lg hover:bg-gray-500 transition-colors"
					>
						Annuler
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdditionForm;

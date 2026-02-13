import React, { useState } from "react";
import bonusRefs, { IBonus, IBonusRef } from "@/data/bonus";

interface IAdditionFormProps {
	bonuses: IBonus[];
	addBonus: (bonus: IBonus) => void;
	cancelBonusAddition: () => void;
}

const AdditionForm: React.FC<IAdditionFormProps> = ({
	bonuses,
	addBonus,
	cancelBonusAddition,
}) => {
	const [newBonusValue, setNewBonusValue] = useState(0);
	const [selectedBonusRef, setSelectedBonusRef] = useState<IBonusRef | null>(
		null
	);
	// Get available bonuses (not already added)
	const availableBonuses = bonusRefs.filter(
		(ref) => !bonuses.some((bonus) => bonus.name === ref.name)
	);

	// Add new bonus from list
	function handleAddBonus() {
		if (!selectedBonusRef) {
			alert("Veuillez sélectionner une prime");
			return;
		}

		// Calculate exempted portion
		const exemptedPortion = selectedBonusRef.exemptionFun(
			{
				...selectedBonusRef,
				value: newBonusValue,
				exemptedPortion: 0,
			} as IBonus,
			{ baseSalary: 0, benefitsInKind: 0, allowances: [], bonuses: [] }
		);

		const newBonus: IBonus = {
			...selectedBonusRef,
			value: newBonusValue,
			exemptedPortion: Math.min(exemptedPortion, newBonusValue),
		};

		addBonus(newBonus);
		setSelectedBonusRef(null);
		setNewBonusValue(0);
	}

	function cancelAddition() {
		cancelBonusAddition();
		setSelectedBonusRef(null);
		setNewBonusValue(0);
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
						value={selectedBonusRef?.name || ""}
						onChange={(e) => {
							const selected = bonusRefs.find(
								(ref) => ref.name === e.target.value
							);
							setSelectedBonusRef(selected || null);
						}}
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
					>
						<option value="">-- Choisir une prime --</option>
						{availableBonuses.map((bonus) => (
							<option key={bonus.name} value={bonus.name}>
								{bonus.label}
							</option>
						))}
					</select>
				</div>

				{selectedBonusRef && (
					<>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Montant (DH)
							</label>
							<input
								type="number"
								value={newBonusValue}
								onChange={(e) =>
									setNewBonusValue(Number(e.target.value))
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
						onClick={handleAddBonus}
						disabled={!selectedBonusRef || newBonusValue <= 0}
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

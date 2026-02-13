import React from "react";
import { Trash2 } from "lucide-react";

import Input from "@/components/UI/Input/Input";

import { IBonus } from "@/data/bonus";

interface IBonusesListProps {
	bonuses: IBonus[];
	setBonuses: (bonuses: IBonus[]) => void;
}

const List: React.FC<IBonusesListProps> = ({ bonuses, setBonuses }) => {
	// Update existing bonus value
	function updateBonusValue(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		const updatedBonuses = bonuses.map((bonus) =>
			bonus.name === name ? { ...bonus, value: Number(value) } : bonus
		);
		setBonuses(updatedBonuses);
	}

	// Remove bonus
	function handleRemoveBonus(bonusName: string) {
		const updatedBonuses = bonuses.filter(
			(bonus) => bonus.name !== bonusName
		);
		setBonuses(updatedBonuses);
	}
	return (
		<div className="space-y-3">
			{bonuses.length === 0 ? (
				<p className="text-gray-500 text-center py-4">
					Aucune prime ajoutée
				</p>
			) : (
				bonuses.map((bonus, index) => (
					<div key={index} className="flex gap-3 items-center">
						<div className="flex-1">
							<Input
								label={bonus.label}
								name={bonus.name}
								value={bonus.value}
								onChange={updateBonusValue}
								type="number"
							/>
						</div>
						<button
							onClick={() => handleRemoveBonus(bonus.name)}
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

import { Plus } from "lucide-react";
import React, { useState } from "react";

import List from "./List";
import Summary from "./Summary";
import Card from "@/components/UI/Card/Card";
import AdditionForm from "./AdditionForm";

import bonusRefs, { IBonus } from "@/data/bonus";

interface IBonusesProps {
	bonuses: IBonus[];
	setBonuses: (bonuses: IBonus[]) => void;
}

const Bonuses: React.FC<IBonusesProps> = ({ bonuses, setBonuses }) => {
	const [showAddForm, setShowAddForm] = useState(false);
	// Get available bonuses (not already added)
	const availableBonuses = bonusRefs.filter(
		(ref) => !bonuses.some((bonus) => bonus.name === ref.name)
	);

	function addBonus(bonus: IBonus) {
		setBonuses([...bonuses, bonus]);
		setShowAddForm(false);
	}
	return (
		<Card>
			<div className="flex justify-between items-center mb-4">
				<h3 className="text-lg font-bold text-gray-800">
					Primes
				</h3>
				{availableBonuses.length > 0 && (
					<button
						onClick={() => setShowAddForm(!showAddForm)}
						className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
					>
						<Plus size={18} />
						Ajouter une prime
					</button>
				)}
			</div>

			{showAddForm && (
				<AdditionForm
					bonuses={bonuses}
					addBonus={addBonus}
					cancelBonusAddition={() => setShowAddForm(false)}
				/>
			)}
			<List bonuses={bonuses} setBonuses={setBonuses} />
			<Summary bonuses={bonuses} />
		</Card>
	);
};

export default Bonuses;

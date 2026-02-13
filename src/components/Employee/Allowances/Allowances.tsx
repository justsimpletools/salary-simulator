import { Plus } from "lucide-react";
import React, { useState } from "react";

import List from "./List";
import Summary from "./Summary";
import Card from "@/components/UI/Card/Card";
import AdditionForm from "./AdditionForm";

import allowanceRefs, { IAllowance } from "@/data/allowance";

interface IAllowancesProps {
	allowances: IAllowance[];
	setAllowances: (allowances: IAllowance[]) => void;
}

const Allowances: React.FC<IAllowancesProps> = ({ allowances, setAllowances }) => {
	const [showAddForm, setShowAddForm] = useState(false);
	// Get available allowances (not already added)
	const availableAllowances = allowanceRefs.filter(
		(ref) => !allowances.some((allowance) => allowance.name === ref.name)
	);

	function addAllowance(allowance: IAllowance) {
		setAllowances([...allowances, allowance]);
		setShowAddForm(false);
	}
	return (
		<Card>
			<div className="flex justify-between items-center mb-4">
				<h3 className="text-lg font-bold text-gray-800">
					Indemnités
				</h3>
				{availableAllowances.length > 0 && (
					<button
						onClick={() => setShowAddForm(!showAddForm)}
						className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
					>
						<Plus size={18} />
						Ajouter une indemnité
					</button>
				)}
			</div>

			{showAddForm && (
				<AdditionForm
					allowances={allowances}
					addAllowance={addAllowance}
					cancelAllowanceAddition={() => setShowAddForm(false)}
				/>
			)}
			<List allowances={allowances} setAllowances={setAllowances} />
			<Summary allowances={allowances} />
		</Card>
	);
};

export default Allowances;

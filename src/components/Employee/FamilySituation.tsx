import React from "react";
import Card from "@/components/UI/Card/Card";
import Input from "@/components/UI/Input/Input";
import Select from "@/components/UI/Select/Select";

import { IEmployeeFamilySituation } from "@/types/employee";

interface IFamilySituationProps {
	familySituation: IEmployeeFamilySituation;
	setFamilySituation: (newFamilySituation: IEmployeeFamilySituation) => void;
}

const FamilySituation: React.FC<IFamilySituationProps> = ({
	familySituation,
	setFamilySituation,
}) => {
	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		let parsedValue: number | string = value;
		if (e.target.type === "number") {
			parsedValue = parseFloat(value) || 0;
		}
		setFamilySituation({
			...familySituation,
			[name]: parsedValue,
		});
	};

	return (
		<Card>
			<h3 className="text-lg font-bold mb-4 text-gray-800">
				Situation familiale
			</h3>
			<Select
				label="Situation maritale"
				name="maritalStatus"
				value={familySituation.maritalStatus}
				onChange={onChange}
				options={["Célibataire", "Marié"]}
			/>
			<Input
				label="Nombre d'enfants"
				name="nbChildren"
				value={familySituation.nbChildren}
				onChange={onChange}
				type="number"
			/>
		</Card>
	);
};

export default FamilySituation;

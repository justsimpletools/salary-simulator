import React from "react";
import Card from "@/components/UI/Card/Card";
import Input from "@/components/UI/Input/Input";
import Select from "@/components/UI/Select/Select";

import { IEmployeePosition } from "@/types/employee";
import { positionTypes, professions, sectors } from "@/data/position";

interface IPositionProps {
	position: IEmployeePosition;
	setPosition: (newPosition: IEmployeePosition) => void;
}

const Position: React.FC<IPositionProps> = ({ position, setPosition }) => {
	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		let parsedValue: number | string = value;
		if (e.target.type === "number") {
			parsedValue = parseFloat(value) || 0;
		}
		setPosition({
			...position,
			[name]: parsedValue,
		});
	};

	return (
		<Card>
			<h3 className="text-lg font-bold mb-4 text-gray-800">
				Poste
			</h3>
			<Select
				label="Type de poste"
				name="type"
				value={position.type}
				onChange={onChange}
				options={positionTypes}
			/>
			<Select
				label="Profession"
				name="profession"
				value={position.profession}
				onChange={onChange}
				options={professions}
			/>
			<Select
				label="Secteur d'activité"
				name="sector"
				value={position.sector}
				onChange={onChange}
				options={sectors}
			/>
			<Input
				label="Ancienneté (années)"
				name="seniority"
				value={position.seniority}
				onChange={onChange}
				type="number"
			/>
		</Card>
	);
};

export default Position;

import React from "react";
import Card from "@/components/UI/Card/Card";
import Input from "@/components/UI/Input/Input";

import { IEmployeeSalaryData } from "@/types/employee";

interface IBaseSalaryAndBenefitsInKindProps {
	salaryData: IEmployeeSalaryData;
	setSalaryData: (newSalaryData: IEmployeeSalaryData) => void;
}

const BaseSalaryAndBenefitsInKind: React.FC<
	IBaseSalaryAndBenefitsInKindProps
> = ({ salaryData, setSalaryData }) => {
	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		let parsedValue: number | string = value;
		if (e.target.type === "number") {
			parsedValue = parseFloat(value) || 0;
		}
		setSalaryData({
			...salaryData,
			[name]: parsedValue,
		});
	};

	return (
		<Card>
			<h3 className="text-lg font-bold mb-4 text-gray-800">
				Salaire
			</h3>
			<Input
				label="Salaire de base (DH)"
				name="baseSalary"
				value={salaryData.baseSalary}
				onChange={onChange}
				type="number"
			/>
			<Input
				label="Avantages en nature (DH)"
				name="benefitsInKind"
				value={salaryData.benefitsInKind}
				onChange={onChange}
				type="number"
			/>
		</Card>
	);
};

export default BaseSalaryAndBenefitsInKind;

import { IEmployeeDeductions } from "@/types/employee";
import React from "react";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";

interface IDeductionsProps {
	deductions: IEmployeeDeductions;
	setDeductions: (deductions: IEmployeeDeductions) => void;
}

const Deductions: React.FC<IDeductionsProps> = ({
	deductions,
	setDeductions,
}) => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setDeductions({
			...deductions,
			[name]: parseFloat(value) || 0,
		});
	};
	return (
		<Card className="mb-6">
			<h3 className="text-lg font-bold mb-4 text-gray-800">
				Déductions fiscales
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<Input
					label="Retraite complémentaire (DH)"
					name="retraiteComplementaire"
					value={deductions.complementaryPension}
					onChange={onChange}
				/>
				<Input
					label="Intérêts crédit logement (DH)"
					name="interetCreditLogement"
					value={deductions.homeFinancingPayments}
					onChange={onChange}
				/>
			</div>
		</Card>
	);
};

export default Deductions;

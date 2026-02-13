import React from "react";
import Bonuses from "./Bonuses/Bonuses";
import Allowances from "./Allowances/Allowances";
import BaseSalaryAndBenefitsInKind from "./BaseSalaryAndBenefitsInKind";

import { IBonus } from "@/data/bonus";
import { IAllowance } from "@/data/allowance";
import { IEmployeeSalaryData } from "@/types/employee";

interface ISalaryProps {
	salaryData: IEmployeeSalaryData;
	setSalaryData: (newSalaryData: IEmployeeSalaryData) => void;
}

const Salary: React.FC<ISalaryProps> = ({ salaryData, setSalaryData }) => {
	function updateBonuses(newBonuses: IBonus[]) {
		setSalaryData({ ...salaryData, bonuses: newBonuses });
	}

	function updateAllowances(newAllowances: IAllowance[]) {
		setSalaryData({ ...salaryData, allowances: newAllowances });
	}
	return (
		<>
			{/* Avantages en nature et salaire de base */}
			<BaseSalaryAndBenefitsInKind
				salaryData={salaryData}
				setSalaryData={setSalaryData}
			/>
			{/* Primes */}
			<Bonuses bonuses={salaryData.bonuses} setBonuses={updateBonuses} />
			{/* Indemnités */}
			<Allowances
				allowances={salaryData.allowances}
				setAllowances={updateAllowances}
			/>
		</>
	);
};

export default Salary;

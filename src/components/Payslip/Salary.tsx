import React from "react";

import RowItem from "./RowItem";
import SectionHeader from "./SectionHeader";

import { IBonus } from "@/data/bonus";
import { IAllowance } from "@/data/allowance";
import { IExemptions } from "@/types/payslip";
import { IEmployeeSalaryData } from "@/types/employee";

interface ISalaryProps {
	salaryData: IEmployeeSalaryData;
	rawSalary: number;
	rbi: number;
	exemptions: IExemptions;
	expandedSections: {
		[key: string]: boolean;
	};
	toggleSection: (section: string) => void;
}

const Salary: React.FC<ISalaryProps> = ({
	salaryData,
	rawSalary,
	rbi,
	exemptions,
	expandedSections,
	toggleSection,
}) => {
	return (
		<>
			<SectionHeader
				title="ÉLÉMENTS DE RÉMUNÉRATION"
				section="salary"
				expandedSections={expandedSections}
				toggleSection={toggleSection}
			/>
			{expandedSections.salary && (
				<div className="bg-gray-50 rounded-lg p-4 mb-6">
					{/* Base Salary */}
					<div className="mb-4">
						<RowItem
							label="Salaire de base"
							value={salaryData.baseSalary}
						/>
					</div>
					{/* Benefits in Kind */}
					{salaryData.benefitsInKind > 0 && (
						<RowItem
							label="Avantages en nature"
							value={salaryData.benefitsInKind}
						/>
					)}

					{/* Bonuses */}
					{salaryData.bonuses.length > 0 && (
						<div className="mb-4">
							<p className="font-semibold text-gray-800 px-3 py-2 bg-white rounded">
								Primes
							</p>
							{salaryData.bonuses.map((bonus: IBonus) => (
								<div key={bonus.name}>
									{bonus.value > 0 && (
										<>
											<RowItem
												label={`${bonus.label}`}
												value={bonus.value}
											/>
											{bonus.exemptedPortion > 0 && (
												<RowItem
													label={`  └─ Portion exonérée`}
													value={
														-bonus.exemptedPortion
													}
												/>
											)}
										</>
									)}
								</div>
							))}
						</div>
					)}

					{/* Allowances */}
					{salaryData.allowances.length > 0 && (
						<div className="mb-4">
							<p className="font-semibold text-gray-800 px-3 py-2 bg-white rounded">
								Indemnités
							</p>
							{salaryData.allowances.map(
								(allowance: IAllowance) => (
									<div key={allowance.name}>
										{allowance.value > 0 && (
											<>
												<RowItem
													label={`${allowance.label}`}
													value={allowance.value}
												/>
												{allowance.exemptedPortion >
													0 && (
													<RowItem
														label={`  └─ Portion exonérée`}
														value={
															-allowance.exemptedPortion
														}
													/>
												)}
											</>
										)}
									</div>
								)
							)}
						</div>
					)}

					{/* Summary */}
					<RowItem
						label="Salaire brut"
						value={rawSalary}
						isBold={true}
						isSeparator={true}
					/>
					<RowItem
						label="Portions exonérées (bonus)"
						value={exemptions.exemptBonuses}
					/>
					<RowItem
						label="Portions exonérées (indemnités)"
						value={exemptions.exemptAllowances}
					/>
					<RowItem
						label="Revenu brut imposable (RBI)"
						value={rbi}
						isBold={true}
						isSeparator={true}
					/>
				</div>
			)}
		</>
	);
};

export default Salary;

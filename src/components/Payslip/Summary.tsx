import React from "react";
import SectionHeader from "./SectionHeader";

import { IDeductions } from "@/types/payslip";

interface ISummaryProps {
	deductions: IDeductions;
	rawSalary: number;
	netAPayer: number;
	ir: number;
	expandedSections: {
		[key: string]: boolean;
	};
	toggleSection: (section: string) => void;
}

const Summary: React.FC<ISummaryProps> = ({
	deductions,
	rawSalary,
	netAPayer,
	ir,
	expandedSections,
	toggleSection,
}) => {
	return (
		<>
			<SectionHeader
				title="RÉSUMÉ"
				section="summary"
				expandedSections={expandedSections}
				toggleSection={toggleSection}
			/>
			{expandedSections.summary && (
				<div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 mb-6">
					<div className="grid grid-cols-2 gap-6">
						<div>
							<p className="text-sm text-gray-600 mb-1">
								Salaire Brut
							</p>
							<p className="text-2xl font-bold text-gray-900">
								{rawSalary.toFixed(2)} DH
							</p>
						</div>
						<div>
							<p className="text-sm text-gray-600 mb-1">
								Total Déductions
							</p>
							<p className="text-2xl font-bold text-red-600">
								{(
									deductions.contributionCNSS +
									deductions.contributionAMO +
									deductions.mandatoryCIMR +
									deductions.complementaryCIMR +
									deductions.professionalExpenses +
									deductions.homeFinancingPayments +
									ir
								).toFixed(2)}{" "}
								DH
							</p>
						</div>
					</div>

					<div className="mt-4 pt-4 border-t-2 border-gray-300">
						<div className="flex justify-between items-center">
							<span className="text-lg font-bold text-gray-900">
								NET À PAYER (Net Salary)
							</span>
							<span className="text-3xl font-bold text-green-600">
								{netAPayer.toFixed(2)} DH
							</span>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Summary;

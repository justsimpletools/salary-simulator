import React from "react";
import RowItem from "./RowItem";
import SectionHeader from "./SectionHeader";

import { IDeductions } from "@/types/payslip";

interface IDeductionsProps {
	deductions: IDeductions;
	homeFinancingPayments: number;
	rni: number;
	ir: number;
	expandedSections: {
		[key: string]: boolean;
	};
	toggleSection: (section: string) => void;
}

const Deductions: React.FC<IDeductionsProps> = ({
	deductions,
	homeFinancingPayments,
	rni,
	ir,
	expandedSections,
	toggleSection,
}) => {
	return (
		<>
			<SectionHeader
				title="COTISATIONS ET DÉDUCTIONS"
				section="deductions"
				expandedSections={expandedSections}
				toggleSection={toggleSection}
			/>
			{expandedSections.deductions && (
				<div className="bg-gray-50 rounded-lg p-4 mb-6">
					<p className="font-semibold text-gray-800 px-3 py-2 bg-white rounded mb-2">
						Cotisations Sociales
					</p>
					<RowItem
						label="Cotisation CNSS (4.68%)"
						value={deductions.contributionCNSS}
					/>
					<RowItem
						label="Cotisation AMO (2.3%)"
						value={deductions.contributionAMO}
					/>

					{deductions.mandatoryCIMR > 0 && (
						<RowItem
							label="Cotisation CIMR obligatoire"
							value={deductions.mandatoryCIMR}
						/>
					)}

					{deductions.complementaryCIMR > 0 && (
						<RowItem
							label="Retraite complémentaire"
							value={deductions.complementaryCIMR}
						/>
					)}

					<p className="font-semibold text-gray-800 px-3 py-2 bg-white rounded mt-4 mb-2">
						Déductions Fiscales
					</p>

					{deductions.professionalExpenses > 0 && (
						<RowItem
							label="Frais professionnels"
							value={deductions.professionalExpenses}
						/>
					)}

					{homeFinancingPayments > 0 && (
						<RowItem
							label="Intérêts crédit logement"
							value={deductions.homeFinancingPayments}
						/>
					)}

					<RowItem
						label="Total déductions"
						value={
							deductions.contributionCNSS +
							deductions.contributionAMO +
							deductions.mandatoryCIMR +
							deductions.complementaryCIMR +
							deductions.professionalExpenses +
							deductions.homeFinancingPayments
						}
						isBold={true}
						isSeparator={true}
					/>

					<RowItem
						label="Revenu Net Imposable (RNI)"
						value={rni}
						isBold={true}
						isSeparator={true}
					/>

					<RowItem label="Impôt sur le revenu (IR)" value={ir} />
				</div>
			)}
		</>
	);
};

export default Deductions;

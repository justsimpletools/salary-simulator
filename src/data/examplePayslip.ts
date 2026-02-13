import IPayslip from "@/types/payslip";

import { IBonus } from "./bonus";
import { IAllowance } from "./allowance";

const examplePayslip: IPayslip = {
	employee: {
		position: {
			profession: "Ingénieur Développement",
			type: "Cadre",
			sector: "Technologie",
			seniority: 3,
		},
		familySituation: {
			maritalStatus: "Marié",
			nbChildren: 2,
		},
		salaryData: {
			baseSalary: 15000,
			benefitsInKind: 1000,
			bonuses: [
				{
					label: "Prime de rendement",
					name: "prime_rendement",
					value: 3000,
					exemptedPortion: 500,
					exemptionFun: (bonus: IBonus) => Math.min(500, bonus.value),
				},
				{
					label: "Prime d'assiduité",
					name: "prime_assiduite",
					value: 1000,
					exemptedPortion: 200,
					exemptionFun: (bonus: IBonus) => Math.min(200, bonus.value),
				},
			],
			allowances: [
				{
					label: "Indemnité de transport",
					name: "indemnite_transport",
					value: 800,
					exemptedPortion: 500,
					specificInfo: { type: "urbain" },
					exemptionFun: (allowance: IAllowance) =>
						Math.min(500, allowance.value),
				},
				{
					label: "Indemnité de représentation",
					name: "indemnite_representation",
					value: 2000,
					exemptedPortion: 1500,
					exemptionFun: (allowance: IAllowance) =>
						Math.min(1500, allowance.value),
				},
			],
		},
		socialContributions: {
			complementaryCIMRRate: 0.03,
		},
		homeFinancingPayments: 500,
	},
	rawSalary: 22800,
	exemptions: {
		exemptBonuses: 700,
		exemptAllowances: 2000,
	},
	rbi: 20100,
	deductions: {
		professionalExpenses: 4020,
		contributionCNSS: 940.32,
		contributionAMO: 462.3,
		mandatoryCIMR: 0,
		complementaryCIMR: 450,
		homeFinancingPayments: 500,
	},
	rni: 13727.38,
	ir: 1309.21,
	netAPayer: 12418.17,
};
export default examplePayslip;

import { IEmployee } from "./employee";

interface IPayslip {
	employee: IEmployee;
	rawSalary: number;
	exemptions: IExemptions;
	rbi: number;
	deductions: IDeductions;
	rni: number;
	ir: number;
	netAPayer: number;
}

export interface IExemptions {
	exemptBonuses: number;
	exemptAllowances: number;
}

export interface IDeductions {
	professionalExpenses: number; // Frais professionnels
	contributionCNSS: number; // Cotisation CNSS
	contributionAMO: number; // Cotisation AMO
	mandatoryCIMR: number; // Cotisation CIMR
	complementaryCIMR: number; // Retraite complémentaire
	homeFinancingPayments: number; // Intérêts crédit logement
}

export default IPayslip;

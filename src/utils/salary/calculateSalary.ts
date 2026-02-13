import IPayslip from "@/types/payslip";
import calculateIR from "./calculateIR";
import calculateAMO from "./calculateAMO";
import calculateCNSS from "./calculateCNSS";
import calculateCIMR from "./calculateCIMR";
import makeSeniorityBonus from "./makeSeniorityBonus";
import calculateProfessionalExpenses from "./calculateProfessionalExpenses";

import { IEmployee } from "@/types/employee";

const calculateSalary = (employee: IEmployee): IPayslip => {
	const {
		position,
		familySituation,
		salaryData,
		socialContributions,
		homeFinancingPayments,
	} = employee;
	// Calculer le salaire brut
	//		Ajouter la prime d'anciennete selon l'anciennete saisie
	salaryData.bonuses.unshift(
		makeSeniorityBonus(position.seniority, salaryData.baseSalary)
	);
	//		Calculer le montant des primes imposables
	let taxedBonuses = 0;
	for (const bonus of salaryData.bonuses) {
		taxedBonuses += bonus.value;
	}
	//		Calculer le montant des indemnités imposables
	let taxedAllowances = 0;
	for (const allowance of salaryData.allowances) {
		taxedAllowances += allowance.value;
	}

	//	 	Determiner le montant du salaire brut
	const rawSalary =
		salaryData.baseSalary +
		salaryData.benefitsInKind +
		taxedBonuses +
		taxedAllowances;

	// Calculer le salaire brut imposable
	//		Calculer le montant des primes exonérées
	let exemptBonuses = 0;
	for (const bonus of salaryData.bonuses) {
		bonus.exemptedPortion = bonus.exemptionFun(bonus, employee);
		exemptBonuses += bonus.exemptedPortion;
	}
	//		Calculer le montant des indemnités exonérées
	let exemptAllowances = 0;
	for (const allowance of salaryData.allowances) {
		allowance.exemptedPortion = allowance.exemptionFun(allowance, employee);
		exemptAllowances += allowance.exemptedPortion;
	}
	//		Calculer le montant des elements exonérés
	const exemptElements = exemptBonuses + exemptAllowances;

	//		Determiner le montant du revenu brut imposable
	const rbi = rawSalary - exemptElements;

	// Calculer les deductions
	//		Calculer les frais professionnels
	const professionalExpenses = calculateProfessionalExpenses(rbi);

	//		Calculer les cotisations sociales
	const cnss = calculateCNSS(rbi);
	const amo = calculateAMO(rbi);
	//		CIMR
	const cimr = calculateCIMR(rbi, socialContributions.complementaryCIMRRate);
	const mandatoryCIMR = cimr.mandatoryContribution;
	const complementaryCIMR = cimr.complementaryContribution;

	//		Determiner le montant total des deductions
	const totalDeductions =
		professionalExpenses +
		cnss +
		amo +
		mandatoryCIMR +
		complementaryCIMR +
		homeFinancingPayments;

	// Calculer le revenu net imposable
	const rni = Math.max(0, rbi - totalDeductions);

	// IR
	const ir = calculateIR(
		rni,
		familySituation.maritalStatus,
		familySituation.nbChildren
	);

	// Net
	const netAPayer =
		Math.max(0, rni - ir) +
		exemptElements +
		professionalExpenses +
		homeFinancingPayments;

	const updatedEmployee: IEmployee = {
		position,
		familySituation,
		salaryData,
		socialContributions,
		homeFinancingPayments,
	};

	return {
		employee: updatedEmployee,
		rawSalary,
		exemptions: {
			exemptBonuses,
			exemptAllowances,
		},
		rbi,
		deductions: {
			professionalExpenses,
			contributionCNSS: cnss,
			contributionAMO: amo,
			mandatoryCIMR,
			complementaryCIMR,
			homeFinancingPayments,
		},
		rni,
		ir,
		netAPayer,
	};
};

export default calculateSalary;

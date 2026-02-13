import TAX_RULES from "@/data/taxRules";

const calculateProfessionalExpenses = (sbi: number) => {
	const deduction = sbi * TAX_RULES.PROFESSIONAL_DEDUCTION_RATE;
	return Math.min(deduction, TAX_RULES.PROFESSIONAL_DEDUCTION_MAX);
};

export default calculateProfessionalExpenses;

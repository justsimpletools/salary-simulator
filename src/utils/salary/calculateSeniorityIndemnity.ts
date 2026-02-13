import TAX_RULES from "@/data/taxRules";

const calculateSeniorityAllowance = (
	salaireBase: number,
	anciennete: number
) => {
	if (anciennete < 1) return 0;
	if (anciennete >= 2) return salaireBase * TAX_RULES.SENIORITY_INDEMNITY[2];
	return salaireBase * TAX_RULES.SENIORITY_INDEMNITY[1];
};

export default calculateSeniorityAllowance;

import TAX_RULES from "@/data/taxRules";

const calculateCIMR = (sbi: number, complementaryRate: number) => {
	const ceiling = TAX_RULES.CNSS.ceiling * 4;
	const basis = Math.min(sbi, ceiling);

	const mandatoryContribution = basis * TAX_RULES.CIMR.rate;
	const complementaryContribution = sbi * complementaryRate;
	return { mandatoryContribution, complementaryContribution };
};

export default calculateCIMR;

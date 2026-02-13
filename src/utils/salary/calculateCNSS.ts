import TAX_RULES from "@/data/taxRules";

const calculateCNSS = (sbi: number) => {
	const ceiling = TAX_RULES.CNSS.ceiling;
	const basis = Math.min(sbi, ceiling);
	return basis * TAX_RULES.CNSS.rate;
};

export default calculateCNSS;

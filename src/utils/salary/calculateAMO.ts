import TAX_RULES from "@/data/taxRules";

const calculateAMO = (sbi: number) => {
	return sbi * TAX_RULES.AMO.rate;
};

export default calculateAMO;

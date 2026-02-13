import TAX_RULES from "@/data/taxRules";

const calculateIR = (
	rni: number,
	situationFamiliale: string,
	nombreEnfants = 0
) => {
	// Abattement familial
	let familialDeduction = 0;
	if (situationFamiliale === "Marié")
		familialDeduction += TAX_RULES.FAMILIAL_DEDUCTION.rate;
	familialDeduction += nombreEnfants * TAX_RULES.FAMILIAL_DEDUCTION.rate;

	familialDeduction = Math.min(
		familialDeduction,
		TAX_RULES.FAMILIAL_DEDUCTION.ceilng
	);

	const incomeAfterDeduction = Math.max(0, rni - familialDeduction);

	// Calculate IR based on brackets
	let ir = 0;
	for (let bracket of TAX_RULES.IR_BRACKETS) {
		if (incomeAfterDeduction > bracket.min) {
			const taxableInBracket =
				Math.min(incomeAfterDeduction, bracket.max) - bracket.min;
			ir += taxableInBracket * bracket.rate;
		}
	}
	const bracket = TAX_RULES.IR_BRACKETS.find(
		(b: unknown) =>
			rni >= (b as any).min && rni <= (b as any).max
	);
	ir = ir - (bracket ? (bracket as any).deduction : 0);

	return Math.min(0, ir);
};

export default calculateIR;

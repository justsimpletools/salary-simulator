import TAX_RULES from "@/data/taxRules";
import { IBonus, seniorityBonusRef } from "@/data/bonus";

const makeSeniorityBonus = (seniority: number, baseSalary: number): IBonus => {
	const bracket = TAX_RULES.SENIORITY_BONUS_BRACKETS.find(
		(b: unknown) =>
			seniority >= (b as any).minYears && seniority <= (b as any).maxYears
	);
	const rate = bracket ? bracket.rate : 0;

	return {
		...seniorityBonusRef,
		value: baseSalary * rate,
		exemptedPortion: 0,
	};
};
export default makeSeniorityBonus;

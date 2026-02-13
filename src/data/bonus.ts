import TAX_RULES from "./taxRules";
import { IEmployee } from "@/types/employee";

const bonusRefs: IBonusRef[] = [
	{
		label: "Prime d'outillage",
		name: "prime_d_outillage",
		exemptionFun: (bonus: IBonus, _employee: IEmployee) =>
			Math.min(100, bonus.value),
	},
	{
		label: "Prime de salissure",
		name: "prime_de_salissure",
		exemptionFun: (bonus: IBonus, _employee: IEmployee) =>
			Math.min(200, bonus.value),
	},
	{
		label: "Prime d’usure de vêtements",
		name: "prime_d_usure_de_vetements",
		exemptionFun: (bonus: IBonus, _employee: IEmployee) =>
			Math.min(100, bonus.value),
	},
	{
		label: "prime de tournée",
		name: "prime_de_tournee",
		exemptionFun: (bonus: IBonus, _employee: IEmployee) =>
			Math.min(1500, bonus.value),
	},
	{
		label: "Prime de panier",
		name: "prime_de_panier",
		exemptionFun: (bonus: IBonus, employee: IEmployee) =>
			Math.min(
				TAX_RULES.SMIG.hourly *
					2 *
					employee.position.nbDaysWorkedInMonth,
				bonus.value
			),
	},
	{
		label: "Ticket-Restaurant",
		name: "ticket_restaurant",
		exemptionFun: (bonus: IBonus, employee: IEmployee) =>
			Math.min(
				TAX_RULES.SMIG.hourly *
					2 *
					employee.position.nbDaysWorkedInMonth,
				bonus.value
			),
	},
	{
		label: "Repas servis en ramadan",
		name: "repas_servis_en_ramadan",
		exemptionFun: (bonus: IBonus, _employee: IEmployee) => bonus.value,
	},
	{
		label: "Primes achat mouton",
		name: "primes_achat_mouton",
		exemptionFun: (bonus: IBonus, _employee: IEmployee) =>
			Math.min(2000, bonus.value),
	},
	{
		label: "Postes téléphoniques",
		name: "postes_telephoniques",
		exemptionFun: (bonus: IBonus, _employee: IEmployee) => bonus.value,
	},
	{
		label: "Dispense ou réduction intérêts",
		name: "dispense_ou_reduction_interets",
		exemptionFun: (bonus: IBonus, _employee: IEmployee) => bonus.value,
	},
];

export const seniorityBonusRef: IBonusRef = {
	label: "Prime d'ancienneté",
	name: "prime_d_anciennete",
	exemptionFun: (_bonus: IBonus, _employee: IEmployee) => 0,
};

export interface IBonusRef {
	label: string;
	name: string;
	specificInfo?: any;
	exemptionFun: Function;
}

export interface IBonus extends IBonusRef {
	value: number;
	exemptedPortion: number;
}

export default bonusRefs;

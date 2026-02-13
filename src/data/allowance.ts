import { IEmployee } from "@/types/employee";

const allowanceRefs: IAllowanceRef[] = [
	{
		name: "indemnite_de_lait",
		label: "Indemnité de lait",
		exemptionFun: (allowance: IAllowance, _employee: IEmployee) =>
			Math.min(150, allowance.value),
	},
	{
		name: "indemnite_utilisation_vehicule_personnel",
		label: "Indemnité d’utilisation de véhicule personnel",
		exemptionFun: (allowance: IAllowance, _employee: IEmployee) =>
			Math.min(150, allowance.value),
	},
	{
		name: "indemnite_de_caisse",
		label: "Indemnité de caisse",
		exemptionFun: (allowance: IAllowance, _employee: IEmployee) =>
			Math.min(150, allowance.value),
	},
	{
		name: "indemnite_de_transport",
		label: "Indemnité de transport",
		exemptionFun: (allowance: IAllowance, _employee: IEmployee) =>
			Math.min(
				allowance.specificInfo?.type === "urbain" ? 500 : 750,
				allowance.value
			),
	},
	{
		name: "indemnite_de_representation",
		label: "Indemnité de représentation",
		exemptionFun: (allowance: IAllowance, employee: IEmployee) =>
			Math.min(0.1 * employee.salaryData.baseSalary, allowance.value),
	},
];

export interface IAllowanceRef {
	label: string;
	name: string;
	specificInfo?: any;
	exemptionFun: Function;
}

export interface IAllowance extends IAllowanceRef {
	value: number;
	exemptedPortion: number;
}

export default allowanceRefs;

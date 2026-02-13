import allowances from "@/data/allowance";

export interface IAllowance {
	name: string;
	value: number;
}

export const defaultIndemnities: IAllowance[] = allowances.map(
	(indemnity) => ({
		name: indemnity.name,
		value: 0,
	})
);

import bonusRefs, { IBonus } from "@/data/bonus";
import allowances, { IAllowance } from "@/data/allowance";

// =============================================================
// Employee Family Situation
// =============================================================
export interface IEmployeeFamilySituation {
	maritalStatus: "Célibataire" | "Marié";
	nbChildren: number;
}

export const defaultEmployeeFamilySituation: IEmployeeFamilySituation = {
	maritalStatus: "Célibataire",
	nbChildren: 0,
};

// =============================================================
// Employee Position
// =============================================================
export interface IEmployeePosition {
	type: string;
	profession: string;
	sector: string;
	seniority: number;
	nbDaysWorkedInMonth: number;
}

export const defaultEmployeePosition: IEmployeePosition = {
	profession: "",
	type: "",
	sector: "",
	seniority: 0,
	nbDaysWorkedInMonth: 24,
};

// =============================================================
// Employee Salary Data
// =============================================================
export interface IEmployeeSalaryData {
	baseSalary: number;
	benefitsInKind: number;
	allowances: IAllowance[];
	bonuses: IBonus[];
}

export const defaultEmployeeSalaryData: IEmployeeSalaryData = {
	baseSalary: 0,
	benefitsInKind: 0,
	allowances: [],
	bonuses: [],
};

// =============================================================
// Employee Social Contributions
// =============================================================
export interface IEmployeeSocialContributions {
	complementaryCIMRRate: number;
}

export const defaultEmployeeSocialContributions = {
	complementaryCIMRRate: 0,
};

// =============================================================
// Employee
// =============================================================
export interface IEmployee {
	position: IEmployeePosition;
	familySituation: IEmployeeFamilySituation;
	salaryData: IEmployeeSalaryData;
	socialContributions: IEmployeeSocialContributions;
	homeFinancingPayments: number;
}

export const defaultEmployee = (): IEmployee => ({
	familySituation: { ...defaultEmployeeFamilySituation },
	position: { ...defaultEmployeePosition },
	salaryData: {
		...defaultEmployeeSalaryData,
	},
	socialContributions: { ...defaultEmployeeSocialContributions },
	homeFinancingPayments: 0,
});

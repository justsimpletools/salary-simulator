const TAX_RULES = {
	CNSS: {
		rate: 0.0429, // 4.29%
		ceiling: 8000, // monthly ceiling
	},
	AMO: {
		rate: 0.0226, // 2.26%
	},
	CIMR: {
		rate: 0.0204, // 2.04%
	},
	IR_BRACKETS: [
		{ min: 0, max: 3333, rate: 0.0, deduction: 0 },
		{ min: 3334, max: 5000, rate: 0.1, deduction: 333.33 },
		{ min: 5001, max: 6667, rate: 0.2, deduction: 833.33 },
		{ min: 6668, max: 8333, rate: 0.3, deduction: 1500 },
		{ min: 8334, max: 15000, rate: 0.34, deduction: 1833.33 },
		{ min: 15001, max: Infinity, rate: 0.37, deduction: 2283.33 },
	],
	PROFESSIONAL_DEDUCTION_RATE: 0.2, // 20%
	PROFESSIONAL_DEDUCTION_MAX: 2500, // max 30,000 DH par an
	SENIORITY_INDEMNITY: {
		// per year of service
		1: 48,
		2: 96,
	},
	FAMILIAL_DEDUCTION: {
		rate: 360, // par enfant ou conjoint
		ceilng: 2160, // max 2160 DH
	},
	SENIORITY_BONUS_BRACKETS: [
		{ minYears: 0, maxYears: 2, rate: 0.0 },
		{ minYears: 2, maxYears: 5, rate: 0.05 },
		{ minYears: 5, maxYears: 12, rate: 0.1 },
		{ minYears: 12, maxYears: 20, rate: 0.15 },
		{ minYears: 20, maxYears: 25, rate: 0.2 },
		{ minYears: 25, maxYears: Infinity, rate: 0.25 },
	],
	SMIG: {
		monthly: 3268.01,
		hourly: 17.10,
	},
	SMAG: {
		monthly: 2418.00,
		daily: 93.00,
	},

};
export default TAX_RULES;

import calculateIR from "./calculateIR";
import calculateAMO from "./calculateAMO";
import calculateCNSS from "./calculateCNSS";

interface ICalculateSimplifiedSalaryParams {
	salaireBase: number;
	situationFamiliale: string;
	nombreEnfants: number;
	anciennete: number;
	exemptAllowance: number;
	allowanceImposable: number;
	avantagesNature: number;
	retraiteComplementaire: number;
	interetCreditLogement: number;
}

const calculateSimplifiedSalary = ({
	salaireBase,
	situationFamiliale,
	nombreEnfants,
	anciennete,
	exemptAllowance,
	allowanceImposable,
	avantagesNature,
	retraiteComplementaire,
	interetCreditLogement,
}: ICalculateSimplifiedSalaryParams) => {
	// Brut imposable = Salaire de base + indemnités imposables + avantages en nature imposables
	const brutImposable = salaireBase + allowanceImposable + avantagesNature;

	// Cotisations
	const cnss = calculateCNSS(brutImposable);
	const amo = calculateAMO(brutImposable);

	// RNI = Brut imposable - cotisations sociales - déductions
	const rni = Math.max(
		0,
		brutImposable -
			cnss -
			amo -
			retraiteComplementaire -
			interetCreditLogement
	);

	// IR calculation
	const ir = calculateIR(rni, situationFamiliale, nombreEnfants);

	// Net = RNI - IR
	const netAPayer = Math.max(0, rni - ir);

	return {
		brutImposable: Math.round(brutImposable * 100) / 100,
		exemptAllowance: Math.round(exemptAllowance * 100) / 100,
		cnss: Math.round(cnss * 100) / 100,
		amo: Math.round(amo * 100) / 100,
		rni: Math.round(rni * 100) / 100,
		ir: Math.round(ir * 100) / 100,
		netAPayer: Math.round(netAPayer * 100) / 100,
		retraiteComplementaire: Math.round(retraiteComplementaire * 100) / 100,
		interetCreditLogement: Math.round(interetCreditLogement * 100) / 100,
	};
};

export default calculateSimplifiedSalary;

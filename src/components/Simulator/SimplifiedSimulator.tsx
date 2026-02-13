import React, { useState } from "react";

import { Home } from "lucide-react";
import Card from "@/components/UI/Card/Card";
import Input from "@/components/UI/Input/Input";
import Select from "@/components/UI/Select/Select";
import ResultCard from "@/components/UI/Card/ResultCard";
import calculateSimplifiedSalary from "@/utils/salary/calculateSimplifiedSalary";
import { defaultEmployee, IEmployeeBasicInfo } from "@/types/employee";
import Allowances from "../Employee/allowances";
import { IAllowance } from "@/data/allowance";
import BenefitsInKind from "../Employee/BaseSalaryAndBenefitsInKind";

interface ISimplifiedSimulatorProps {
	onBack: () => void;
}

const SimplifiedSimulator: React.FC<ISimplifiedSimulatorProps> = ({
	onBack,
}) => {
	const [result, setResult] = useState(null);
	const [formData, setFormData] = useState(defaultEmployee);


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: parseFloat(value) || 0,
		}));
	};

	function updateBasicInfo(newInfo: IEmployeeBasicInfo) {
		setFormData((prev) => ({
			...prev,
			basicInfo: newInfo,
		}));
	}

	function updateIndemnities(newIndemnities: IAllowance[]) {
		setFormData((prev) => ({
			...prev,
			allowances: newIndemnities,
		}));
	}

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleCalculate = () => {
		const calculationResult = calculateSimplifiedSalary(formData);
		setResult(calculationResult);
	};

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4">
			<div className="max-w-4xl mx-auto">
				<button
					onClick={onBack}
					className="flex items-center text-blue-600 font-semibold mb-6 hover:text-blue-800"
				>
					<Home size={18} className="mr-2" /> Retour à l'accueil
				</button>

				<h1 className="text-3xl font-bold text-gray-900 mb-6">
					Simulateur Simplifié
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
					
					<Allowances
						allowances={formData.allowances}
						setAllowances={updateIndemnities}
					/>
					

					<Card>
						<h3 className="text-lg font-bold mb-4 text-gray-800">
							Déductions
						</h3>
						<Input
							label="Retraite complémentaire (DH)"
							name="retraiteComplementaire"
							value={formData.retraiteComplementaire}
							onChange={handleChange}
						/>
						<Input
							label="Intérêts crédit logement (DH)"
							name="interetCreditLogement"
							value={formData.interetCreditLogement}
							onChange={handleChange}
						/>
					</Card>
				</div>

				<button
					onClick={handleCalculate}
					className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors mb-8"
				>
					Calculer le salaire net
				</button>

				{result && <ResultCard result={result} />}
			</div>
		</div>
	);
};

export default SimplifiedSimulator;

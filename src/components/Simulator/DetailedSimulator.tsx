import { Home } from "lucide-react";
import React, { useState } from "react";

import IPayslip from "@/types/payslip";
import Salary from "@/components/Employee/Salary";
import Position from "@/components/Employee/Position";
import calculateSalary from "@/utils/salary/calculateSalary";
import FamilySituation from "@/components/Employee/FamilySituation";
import SocialContributions from "@/components/Employee/SocialContributions";

import {
	defaultEmployee,
	IEmployeeFamilySituation,
	IEmployeePosition,
	IEmployeeSalaryData,
	IEmployeeSocialContributions,
} from "@/types/employee";
import Payslip from "../Payslip/Payslip";

interface IDetailedSimulatorProps {
	onBack: () => void;
}

const DetailedSimulator: React.FC<IDetailedSimulatorProps> = ({ onBack }) => {
	const [formData, setFormData] = useState(defaultEmployee);

	const [result, setResult] = useState<IPayslip | null>(null);

	function updateFamilySituation(newSituation: IEmployeeFamilySituation) {
		setFormData((prev) => ({
			...prev,
			familySituation: newSituation,
		}));
	}
	function updatePosition(newPosition: IEmployeePosition) {
		setFormData((prev) => ({
			...prev,
			position: newPosition,
		}));
	}
	function updateSalaryData(newSalaryData: IEmployeeSalaryData) {
		setFormData((prev) => ({
			...prev,
			salaryData: newSalaryData,
		}));
	}

	function updateSocialContributions(
		newSocialContributions: IEmployeeSocialContributions
	) {
		setFormData((prev) => ({
			...prev,
			socialContributions: newSocialContributions,
		}));
	}

	const handleCalculate = () => {
		const calculationResult = calculateSalary(formData);
		setResult(calculationResult);
	};

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4">
			<div className="max-w-4xl mx-auto flex flex-col gap-8">
				<button
					onClick={onBack}
					className="flex items-center text-blue-600 font-semibold mb-6 hover:text-blue-800"
				>
					<Home size={18} className="mr-2" /> Retour à l'accueil
				</button>

				<h1 className="text-3xl font-bold text-gray-900 mb-6">
					Simulateur Détaillé
				</h1>

				<FamilySituation
					familySituation={formData.familySituation}
					setFamilySituation={updateFamilySituation}
				/>

				<Position
					position={formData.position}
					setPosition={updatePosition}
				/>

				<Salary
					salaryData={formData.salaryData}
					setSalaryData={updateSalaryData}
				/>

				<SocialContributions
					socialContributions={formData.socialContributions}
					setSocialContributions={updateSocialContributions}
				/>

				<button
					onClick={handleCalculate}
					className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors mb-8"
				>
					Calculer le salaire net
				</button>

				{result && <Payslip {...result} />}
			</div>
		</div>
	);
};

export default DetailedSimulator;

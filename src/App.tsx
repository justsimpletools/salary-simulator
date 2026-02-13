import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

import Card from "./components/UI/Card/Card";
import DetailedSimulator from "@/components/Simulator/DetailedSimulator";
import SimplifiedSimulator from "@/components/Simulator/SimplifiedSimulator";

interface IHomePageProps {
	onSelectSimulator: (simulator: "simplified" | "detailed") => void;
}

const HomePage: React.FC<IHomePageProps> = ({ onSelectSimulator }) => (
	<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
		<div className="max-w-2xl mx-auto">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold text-gray-900 mb-2">
					Calculatrice Salariale Marocaine
				</h1>
				<p className="text-gray-600">
					Calculez votre salaire net selon les normes marocaines
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card
					className="cursor-pointer hover:shadow-lg transition-shadow"
					onClick={() => onSelectSimulator("simplified")}
				>
					<h2 className="text-2xl font-bold text-gray-900 mb-2">
						Simulateur Simplifié
					</h2>
					<p className="text-gray-600 mb-4">
						Entrez vos informations de base pour un calcul rapide
					</p>
					<div className="flex items-center text-blue-600 font-semibold">
						Commencer <ChevronRight className="ml-2" size={20} />
					</div>
				</Card>

				<Card
					className="cursor-pointer hover:shadow-lg transition-shadow"
					onClick={() => onSelectSimulator("detailed")}
				>
					<h2 className="text-2xl font-bold text-gray-900 mb-2">
						Simulateur Détaillé
					</h2>
					<p className="text-gray-600 mb-4">
						Entrez tous les détails pour un calcul précis
					</p>
					<div className="flex items-center text-blue-600 font-semibold">
						Commencer <ChevronRight className="ml-2" size={20} />
					</div>
				</Card>
			</div>
		</div>
	</div>
);

export default function App() {
	const [currentPage, setCurrentPage] = useState("home");

	const handleSelectSimulator = (simulator: "simplified" | "detailed") => {
		setCurrentPage(simulator);
	};

	const handleBack = () => {
		setCurrentPage("home");
	};

	return (
		<>
			{currentPage === "home" && (
				<HomePage onSelectSimulator={handleSelectSimulator} />
			)}
			{/* {currentPage === "simplified" && (
				<SimplifiedSimulator onBack={handleBack} />
			)} */}
			{currentPage === "detailed" && (
				<DetailedSimulator onBack={handleBack} />
			)}
		</>
	);
}

import React from "react";
import { IEmployeeFamilySituation, IEmployeePosition } from "@/types/employee";

interface IHeaderProps {
	payslipNumber: string;
	month: string;
	year: number;
	position: IEmployeePosition;
	familySituation: IEmployeeFamilySituation;
}

const Header: React.FC<IHeaderProps> = ({
	payslipNumber,
	month,
	year,
	position,
	familySituation,
}) => {
	return (
		<div className="border-b-4 border-blue-600 pb-6 mb-6">
			<div className="flex justify-between items-start mb-4">
				<div>
					<h1 className="text-3xl font-bold text-gray-900">
						BULLETIN DE SALAIRE
					</h1>
					<p className="text-gray-600 mt-1">
						Payslip / Fiche de paie
					</p>
				</div>
				<div className="text-right">
					<p className="text-sm text-gray-600">
						<span className="font-semibold">N°:</span>{" "}
						{payslipNumber}
					</p>
					<p className="text-sm text-gray-600">
						<span className="font-semibold">Période:</span> {month}/
						{year}
					</p>
				</div>
			</div>

			{/* Employee Info */}
			<div className="grid grid-cols-2 gap-6">
				<div>
					<h4 className="font-bold text-gray-900 mb-2">Employé</h4>
					<div className="text-sm space-y-1 text-gray-700">
						<p>
							<span className="font-semibold">Profession:</span>{" "}
							{position.profession || "N/A"}
						</p>
						<p>
							<span className="font-semibold">Type:</span>{" "}
							{position.type || "N/A"}
						</p>
						<p>
							<span className="font-semibold">Secteur:</span>{" "}
							{position.sector || "N/A"}
						</p>
						<p>
							<span className="font-semibold">Ancienneté:</span>{" "}
							{position.seniority} ans
						</p>
					</div>
				</div>
				<div>
					<h4 className="font-bold text-gray-900 mb-2">
						Situation Personnelle
					</h4>
					<div className="text-sm space-y-1 text-gray-700">
						<p>
							<span className="font-semibold">État civil:</span>{" "}
							{familySituation.maritalStatus}
						</p>
						<p>
							<span className="font-semibold">Enfants:</span>{" "}
							{familySituation.nbChildren}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;

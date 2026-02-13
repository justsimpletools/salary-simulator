import React from "react";
import { IBonus } from "@/data/bonus";

interface ISummaryProps {
	bonuses: IBonus[];
}

const Summary: React.FC<ISummaryProps> = ({ bonuses }) => {
	return (
		<>
			{bonuses.length > 0 && (
				<div className="mt-6 pt-4 border-t border-gray-200 space-y-2">
					<div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
						<span className="font-semibold text-gray-800">
							Total des primes
						</span>
						<span className="text-lg font-bold text-blue-600">
							{bonuses
								.reduce((sum, bonus) => sum + bonus.value, 0)
								.toFixed(2)}{" "}
							DH
						</span>
					</div>
					<div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
						<span className="font-semibold text-gray-800">
							Total exonéré
						</span>
						<span className="text-lg font-bold text-green-600">
							{bonuses
								.reduce(
									(sum, bonus) => sum + bonus.exemptedPortion,
									0
								)
								.toFixed(2)}{" "}
							DH
						</span>
					</div>
				</div>
			)}
		</>
	);
};

export default Summary;

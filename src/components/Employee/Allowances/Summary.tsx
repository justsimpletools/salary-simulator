import React from "react";
import { IAllowance } from "@/data/allowance";

interface ISummaryProps {
	allowances: IAllowance[];
}

const Summary: React.FC<ISummaryProps> = ({ allowances }) => {
	return (
		<>
			{allowances.length > 0 && (
				<div className="mt-6 pt-4 border-t border-gray-200 space-y-2">
					<div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
						<span className="font-semibold text-gray-800">
							Total des primes
						</span>
						<span className="text-lg font-bold text-blue-600">
							{allowances
								.reduce((sum, allowance) => sum + allowance.value, 0)
								.toFixed(2)}{" "}
							DH
						</span>
					</div>
					<div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
						<span className="font-semibold text-gray-800">
							Total exonéré
						</span>
						<span className="text-lg font-bold text-green-600">
							{allowances
								.reduce(
									(sum, allowance) => sum + allowance.exemptedPortion,
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

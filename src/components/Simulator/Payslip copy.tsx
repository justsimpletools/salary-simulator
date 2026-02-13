import IPayslip from "@/types/payslip";

interface IPayslipProps extends IPayslip {}

const Payslip: React.FC<IPayslipProps> = ({ employee, rawSalary }) => {
	return (
		<div className="max-w-4xl mx-auto bg-white border rounded-lg shadow-sm p-6 text-sm text-gray-800">
			{/* Header */}
			<div className="flex justify-between items-center border-b pb-4 mb-4">
				<div>
					<h1 className="text-xl font-semibold">Payslip</h1>
					<p className="text-gray-500">January 2025</p>
				</div>
				<div className="text-right">
					<p className="font-medium">Company Name</p>
					<p className="text-gray-500">Casablanca, Morocco</p>
				</div>
			</div>

			{/* Employee Info */}
			<div className="grid grid-cols-2 gap-4 mb-6">
				<div>
					<p>
						<span className="font-medium">Employee:</span> John Doe
					</p>
					<p>
						<span className="font-medium">Position:</span>
						{employee.position.profession}
					</p>
					<p>
						<span className="font-medium">Department:</span> IT
					</p>
				</div>
				<div>
					<p>
						<span className="font-medium">Employee ID:</span> 4589
					</p>
					<p>
						<span className="font-medium">Pay Date:</span>{" "}
						{new Date().toLocaleDateString()}
					</p>
					<p>
						<span className="font-medium">Payment Method:</span>{" "}
						Bank Transfer
					</p>
				</div>
			</div>

			{/* Earnings & Deductions */}
			<div className="grid grid-cols-2 gap-6 mb-6">
				{/* Earnings */}
				<div>
					<h2 className="font-semibold mb-2 border-b pb-1">
						Earnings
					</h2>
					<ul className="space-y-2">
						<li className="flex justify-between">
							<span>Base Salary</span>
							<span>{employee.salaryData.baseSalary}</span>
						</li>
						<li className="flex justify-between">
							<span>Seniority Bonus</span>
							<span>1,000 MAD</span>
						</li>
						<li className="flex justify-between">
							<span>Allowances</span>
							<span>500 MAD</span>
						</li>
					</ul>
				</div>

				{/* Deductions */}
				<div>
					<h2 className="font-semibold mb-2 border-b pb-1">
						Deductions
					</h2>
					<ul className="space-y-2">
						<li className="flex justify-between">
							<span>CNSS</span>
							<span>- 400 MAD</span>
						</li>
						<li className="flex justify-between">
							<span>Income Tax (IR)</span>
							<span>- 1,200 MAD</span>
						</li>
						<li className="flex justify-between">
							<span>Retirement</span>
							<span>- 300 MAD</span>
						</li>
					</ul>
				</div>
			</div>

			{/* Totals */}
			<div className="border-t pt-4">
				<div className="flex justify-between mb-2">
					<span className="font-medium">Gross Salary</span>
					<span>11,500 MAD</span>
				</div>
				<div className="flex justify-between mb-2">
					<span className="font-medium">Total Deductions</span>
					<span>- 1,900 MAD</span>
				</div>
				<div className="flex justify-between text-lg font-semibold text-green-700">
					<span>Net Salary</span>
					<span>9,600 MAD</span>
				</div>
			</div>

			{/* Footer */}
			<div className="text-xs text-gray-500 mt-6 text-center">
				This document is generated electronically and does not require a
				signature.
			</div>
		</div>
	);
};

export default Payslip;

import React, { useState } from "react";

import Header from "./Header";
import Salary from "./Salary";
import Footer from "./Footer";
import Summary from "./Summary";
import Deductions from "./Deductions";
import IPayslip from "@/types/payslip";

interface IPayslipProps extends IPayslip {}

const Payslip: React.FC<IPayslipProps> = (payslip) => {
	const [expandedSections, setExpandedSections] = useState<{
		[key: string]: boolean;
	}>({
		salary: true,
		deductions: true,
		summary: true,
	});

	const toggleSection = (section: string) => {
		setExpandedSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

	const today = new Date();
	const month = (today.getMonth() + 1).toString().padStart(2, "0");
	const year = today.getFullYear();
	const payslipNumber = `BS-${year}${month}-001`;

	const handlePrint = () => {
		window.print();
	};

	const handleDownload = () => {
		// Simple implementation - in production would use a PDF library
		alert("Téléchargement PDF - à implémenter avec une librairie PDF");
	};

	const {
		employee,
		rawSalary,
		exemptions,
		rbi,
		deductions,
		rni,
		ir,
		netAPayer,
	} = payslip;
	const { position, familySituation, salaryData, homeFinancingPayments } =
		employee;

	return (
		<div className="w-full max-w-4xl mx-auto p-4 bg-white">
			<Header
				payslipNumber={payslipNumber}
				month={month}
				year={year}
				familySituation={familySituation}
				position={position}
			/>

			<Salary
				salaryData={salaryData}
				rawSalary={rawSalary}
				rbi={rbi}
				exemptions={exemptions}
				expandedSections={expandedSections}
				toggleSection={toggleSection}
			/>

			<Deductions
				deductions={deductions}
				homeFinancingPayments={homeFinancingPayments}
				rni={rni}
				ir={ir}
				expandedSections={expandedSections}
				toggleSection={toggleSection}
			/>
			<Summary
				deductions={deductions}
				rawSalary={rawSalary}
				netAPayer={netAPayer}
				ir={ir}
				expandedSections={expandedSections}
				toggleSection={toggleSection}
			/>
			<Footer handlePrint={handlePrint} handleDownload={handleDownload} />
		</div>
	);
};

export default Payslip;

import React from "react";
import { Download, Printer } from "lucide-react";

interface IFooterProps {
	handlePrint: () => void;
	handleDownload: () => void;
}

const Footer: React.FC<IFooterProps> = ({ handlePrint, handleDownload }) => {
	return (
		<div className="flex gap-4 mt-8 pt-6 border-t-2 border-gray-300">
			<button
				onClick={handlePrint}
				className="flex items-center gap-2 flex-1 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
			>
				<Printer size={20} /> Imprimer
			</button>
			<button
				onClick={handleDownload}
				className="flex items-center gap-2 flex-1 bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
			>
				<Download size={20} /> Télécharger PDF
			</button>
		</div>
	);
};

export default Footer;

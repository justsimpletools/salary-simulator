import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ISectionHeaderProps {
	title: string;
	section: string;
	expandedSections: { [key: string]: boolean };
	toggleSection: (section: string) => void;
}

const SectionHeader: React.FC<ISectionHeaderProps> = ({
	title,
	section,
	expandedSections,
	toggleSection,
}) => {
	return (
		<button
			onClick={() => toggleSection(section)}
			className="w-full flex justify-between items-center bg-blue-600 text-white p-4 rounded-lg mt-4 mb-2 hover:bg-blue-700 transition-colors"
		>
			<h3 className="font-bold text-lg">{title}</h3>
			{expandedSections[section] ? (
				<ChevronUp size={20} />
			) : (
				<ChevronDown size={20} />
			)}
		</button>
	);
};

export default SectionHeader;

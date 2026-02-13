import React from "react";
import Card from "@/components/UI/Card/Card";
import Input from "@/components/UI/Input/Input";

import { IEmployeeSocialContributions } from "@/types/employee";

interface ISocialContributionsProps {
	socialContributions: IEmployeeSocialContributions;
	setSocialContributions: (
		newSocialContributions: IEmployeeSocialContributions
	) => void;
}

const SocialContributions: React.FC<ISocialContributionsProps> = ({
	socialContributions,
	setSocialContributions,
}) => {
	const [complementaryCIMRRate, setComplementaryCIMRRate] = React.useState(
		() => `${socialContributions.complementaryCIMRRate * 100}`
	);

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value, type } = e.target;
		let parsedValue: number | string = value;

		if (type === "number") {
			const num = parseFloat(value);
			if (!isNaN(num)) {
				parsedValue = name.endsWith("Rate") ? num / 100 : num;
			}
		}
		setComplementaryCIMRRate(value);
		setSocialContributions({
			...socialContributions,
			[name]: parsedValue,
		});
	};

	return (
		<Card>
			<h3 className="text-lg font-bold mb-4 text-gray-800">
				Informations sur les cotisations sociales
			</h3>
			<Input
				label="Taux de CIMR Complémentaire (%)"
				name="complementaryCIMRRate"
				value={complementaryCIMRRate}
				onChange={onChange}
				type="number"
				pattern="[0-9]*[.]?[0-9]*"
			/>
		</Card>
	);
};

export default SocialContributions;

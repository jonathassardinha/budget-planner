import { currencyFormatter } from "@/utils/currencyFormatter";

export type ResultsProps = {
	title: string;
	expected: number;
	real: number;
};

export function Results({ title, expected, real }: ResultsProps) {
	return (
		<div className="flex flex-col text-xl">
			<p className="mb-4 self-center text-2xl font-medium uppercase">{title}</p>
			<div className="mb-2 grid grid-cols-2 place-items-center">
				<span className="font-medium text-gray-500">Planejado</span>
				<span className="text-gray-500">
					{currencyFormatter.format(expected)}
				</span>
			</div>
			<div className=" grid grid-cols-2 place-items-center">
				<span className="font-medium">Real</span>
				<span>{currencyFormatter.format(real)}</span>
			</div>
		</div>
	);
}

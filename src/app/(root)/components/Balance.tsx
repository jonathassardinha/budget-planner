import { currencyFormatter } from "@/utils/currencyFormatter";

export type BalanceProps = {
	title: string;
	amount: number;
	accentColor?: boolean;
};

export function Balance({ title, amount, accentColor }: BalanceProps) {
	const colorClass = accentColor ? "text-orange-500" : "";

	return (
		<div className="flex flex-col items-center gap-4 py-4">
			<span className={`text-xl font-medium uppercase ${colorClass}`}>
				{title}
			</span>
			<span className={`text-2xl font-medium uppercase ${colorClass}`}>
				{currencyFormatter.format(amount)}
			</span>
		</div>
	);
}

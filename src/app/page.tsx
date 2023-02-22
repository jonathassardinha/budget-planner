import { Balance } from "./components/Balance";
import { Results } from "./components/Results";
import { Tabs } from "./components/Tabs";

export default function Home() {
	return (
		<main className="flex flex-1 flex-col gap-8 px-6 py-10 overflow-hidden">
			<div className="flex justify-between">
				<Balance title="Saldo Inicial" amount={0} />
				<div className="border-l border-gray-400" />
				<Balance accentColor title="Saldo Final" amount={320250.12} />
			</div>

			<Tabs />
		</main>
	);
}

import { Balance } from "./components/Balance";
import { Results } from "./components/Results";

export default function Home() {
	return (
		<main className="flex flex-1 flex-col gap-8 px-6 py-10">
			<div className="flex justify-between">
				<Balance title="Saldo Inicial" amount={0} />
				<div className="border-l border-gray-400" />
				<Balance accentColor title="Saldo Final" amount={320250.12} />
			</div>

			<div className="flex flex-1 flex-col justify-between pt-10 ">
				<Results title="Guardado esse mês" expected={0} real={-100} />
				<Results title="Entradas" expected={0} real={100} />
				<Results title="Saídas" expected={0} real={100} />
			</div>
		</main>
	);
}

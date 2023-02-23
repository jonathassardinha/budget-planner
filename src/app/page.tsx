import { Balance } from "./localComponents/Balance";
import { Results } from "./localComponents/Results";
import { Tabs } from "./localComponents/Tabs";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col py-6 px-4 overflow-hidden">
      <div className="flex justify-around mb-6">
        <Balance title="Saldo Inicial" amount={0} />
        <div className="border-l border-gray-400" />
        <Balance accentColor title="Saldo Final" amount={320250.12} />
      </div>

      <Tabs />
    </main>
  );
}

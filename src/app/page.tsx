import { Balance } from './localComponents/Balance';
import { Tabs } from './localComponents/Tabs';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-hidden py-6 px-4">
      <div className="mb-6 flex justify-around">
        <Balance title="Saldo Inicial" amount={0} />
        <div className="border-l border-gray-400" />
        <Balance accentColor title="Saldo Final" amount={320250.12} />
      </div>

      <Tabs />
    </main>
  );
}

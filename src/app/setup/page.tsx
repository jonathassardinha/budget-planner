import { IconButton } from '@/ui/IconButton';
import Image from 'next/image';

export default function Other() {
  return (
    <main className="flex flex-1 flex-col gap-8 px-6 py-10">
      <div>
        <div>
          <p>Categoria 1</p>
          <IconButton icon="ArrowRight" />
        </div>
      </div>
    </main>
  );
}

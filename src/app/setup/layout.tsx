import { LayoutProps } from '.next/types/app/layout';

export const metadata = {
  title: 'Configuração',
};

export default function ProxyLayout({ children }: LayoutProps) {
  return children;
}

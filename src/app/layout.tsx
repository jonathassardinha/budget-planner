import './globals.css';
import Header from './localComponents/Header';
import { Navbar } from './localComponents/Navbar';

export const metadata = {
  title: 'Budget Planner',
  description: 'Budget planner app',
  icons: '/dollar-sign.ico',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className="flex h-screen max-h-screen flex-col overflow-hidden">
        <Header />
        <div className="flex flex-1 flex-col justify-between overflow-hidden">
          {children}
          <Navbar />
        </div>
      </body>
    </html>
  );
}

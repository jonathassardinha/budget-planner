import "./globals.css";
import { Navbar } from "./components/Navbar";

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<head />
			<body className="max-w-screen flex h-screen max-h-screen w-screen flex-col overflow-hidden">
				<header className="flex justify-center border-b border-gray-500 py-3 text-lg font-bold uppercase">
					Budget Planner
				</header>
				<div className="flex flex-1 flex-col justify-between overflow-hidden">
					{children}
					<Navbar />
				</div>
			</body>
		</html>
	);
}

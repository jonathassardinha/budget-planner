"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const getActiveClass = (linkPath: string, currentPath: string | null) =>
	linkPath === currentPath ? "text-orange-400" : "";

export function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="flex gap-10 border-t border-gray-400 px-8 py-6">
			<Link href="/" className={getActiveClass("/", pathname)}>
				Resumo
			</Link>
			<Link href="/setup" className={getActiveClass("/setup", pathname)}>
				Config.
			</Link>
		</nav>
	);
}

import { navLinks } from "@/constants/links";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
	return (
		<nav className="sticky flex justify-between items-center">
			<Image
				src="/android-chrome-512x512.png"
				alt="Profile Logo"
				width={80}
				height={80}
			/>
			<div className="flex gap-6">
				{
					navLinks.map((navLink, index) => {
						return (
							<Link
								key={index}
								href={navLink.url}
								className="hover:underline hover:text-highlight hover:scale-110 transition-transform duration-200"
							>
								{navLink.name}
							</Link>
						)
					})
				}
			</div>
		</nav>
	)
};
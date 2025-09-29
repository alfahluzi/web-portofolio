import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Contact from "./sections/Contact";

function App() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [currentSection, setCurrentSection] = useState(0);
	const isScrolling = useRef(false);
	const sectionOnChange = (i: number) => {
		setCurrentSection(i);
	};
	const totalSections = 4;
	useEffect(() => {
		const handleWheel = (e: any) => {
			// Jika sedang dalam transisi scroll, abaikan event baru
			if (isScrolling.current || !containerRef.current) {
				e.preventDefault();
				return;
			}

			// Mencegah scroll default browser
			e.preventDefault();

			const scrollDirection = e.deltaY > 0 ? "down" : "up";
			let nextSection = currentSection;

			if (scrollDirection === "down" && currentSection < totalSections - 1) {
				nextSection++;
			} else if (scrollDirection === "up" && currentSection > 0) {
				nextSection--;
			} else {
				return; // Sudah di ujung (atas atau bawah), tidak melakukan apa-apa
			}

			// Tandai bahwa kita sedang memulai transisi scroll
			isScrolling.current = true;
			setCurrentSection(nextSection);

			// Scroll ke section berikutnya
			const sectionElement = containerRef.current.children[nextSection];
			if (sectionElement) {
				sectionElement.scrollIntoView({ behavior: "smooth" });
			}

			// Beri jeda sebelum user bisa scroll lagi.
			// Sesuaikan durasi (misalnya 1000ms = 1 detik) dengan kecepatan transisi yang Anda inginkan.
			setTimeout(() => {
				isScrolling.current = false;
			}, 1000);
		};

		const container = containerRef.current;
		// Gunakan event 'wheel' untuk mendeteksi scroll mouse
		container?.addEventListener("wheel", handleWheel, { passive: false });

		// Cleanup function untuk menghapus event listener
		return () => {
			container?.removeEventListener("wheel", handleWheel);
		};
	}, [currentSection]);
	return (
		<div className="text-[#F9FAFB] font-[Inter] ">
			<Navbar sectionOnChange={sectionOnChange} />
			<div
				ref={containerRef}
				className="h-screen overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
			>
				<About />
				<Experience />
				<Project />
				<Contact />
			</div>
		</div>
	);
}

export default App;

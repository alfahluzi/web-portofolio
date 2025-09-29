import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "../components/Card";
const myProjects: Project[] = [
	{
		id: 1,
		title: "GENTA",
		description:
			"Gerbang Informasi Terpadu untuk Akses Publik. Sebuah platform untuk melakukan akses layanan pemerintah yang dipandu oleh AI.",
		imageUrl: "https://placehold.co/600x400/000000/FFFFFF/png?text=GENTA",
		projectUrl: "#",
	},
	{
		id: 2,
		title: "Ljosalfar.bot",
		description:
			"A Discord bot to help you planning schedule, reminder schedule, money managerial, just like a personal assistance through Discord",
		imageUrl:
			"https://placehold.co/600x400/E8117F/FFFFFF/png?text=Ljosalfar.bot",
		projectUrl: "#",
	},
	{
		id: 3,
		title: "Paiwitan.AI",
		description:
			"Sebuah platform konstruksi model machine learning secara grafis dengan minim kode.",
		imageUrl: "https://placehold.co/600x400/3498DB/FFFFFF/png?text=Paiwitan.AI",
		projectUrl: "#",
	},
	{
		id: 4,
		title: "Neurometheus",
		description:
			"Core System of AI Combining idea of AGI, MLOps, DevOps, AutoML, and self-evolving software.",
		imageUrl:
			"https://placehold.co/600x400/2ECC71/FFFFFF/png?text=Neurometheus",
		projectUrl: "#",
	},
];
function Project() {
	return (
		<div
			id="projects"
			className="py-14 px-7 md:px-24 lg:px-40 xl:px-56 content-center bg-[#030712]  h-screen w-full"
		>
			<p className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
				My Personal Projects!
			</p>
			<ProjectCarousel projects={myProjects} />
		</div>
	);
}

export default Project;

interface Project {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	projectUrl: string;
}
interface ProjectCarouselProps {
	projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
	// 1. Klone data untuk efek loop
	const clonedProjects = [
		projects[projects.length - 2],
		projects[projects.length - 1],
		...projects,
		projects[0],
		projects[1],
	];

	// 2. State untuk index dan kontrol transisi
	const [currentIndex, setCurrentIndex] = useState(2); // Mulai dari item asli pertama
	const [isTransitioning, setIsTransitioning] = useState(false);
	const carouselRef = useRef<HTMLDivElement>(null);
	console.log("Car Ref", [
		carouselRef.current?.clientWidth,
		carouselRef.current?.offsetWidth,
		carouselRef.current?.scrollWidth,
	]);

	useEffect(() => {
		const timer = setTimeout(() => setIsTransitioning(true), 50);
		return () => clearTimeout(timer);
	}, []);
	useEffect(() => {
		if (!isTransitioning) {
			setTimeout(() => {
				setIsTransitioning(true);
			}, 50);
		}
	}, [isTransitioning]);

	const handleTransitionEnd = () => {
		if (currentIndex <= 1) {
			setIsTransitioning(false);
			setCurrentIndex(projects.length + 1);
		} else if (currentIndex >= clonedProjects.length - 2) {
			setIsTransitioning(false);
			setCurrentIndex(2);
		}
	};

	const handlePrev = () => {
		if (!isTransitioning) return;
		setCurrentIndex((prevIndex) => prevIndex - 1);
	};

	const handleNext = () => {
		if (!isTransitioning) return;
		setCurrentIndex((prevIndex) => prevIndex + 1);
	};

	// Menghitung index dot yang aktif
	const getActiveDotIndex = () => {
		if (currentIndex === 1) return projects.length - 1;
		if (currentIndex === clonedProjects.length - 2) return 0;
		return currentIndex - 2;
	};

	const CARD_WIDTH = carouselRef.current?.offsetWidth || 0; // pixel
	const sliderOffset = `calc(50% - ${CARD_WIDTH / 2}px)`;
	const transformValue = `translateX(calc(${sliderOffset} - ${
		currentIndex * CARD_WIDTH
	}px))`;

	return (
		<div className="relative w-full mx-auto">
			<div className="overflow-hidden relative p-5">
				<div
					className="flex"
					style={{
						transform: transformValue,
						transition: isTransitioning ? "transform 0.5s ease-out" : "none",
					}}
					onTransitionEnd={handleTransitionEnd}
				>
					{clonedProjects.map((project, index) => (
						<div key={index} className="w-fit flex-shrink-0">
							<div ref={carouselRef} className="px-1 md:px-4">
								<Card
									project={project}
									isActive={index === currentIndex}
									isTransitioning={isTransitioning}
								/>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Tombol Navigasi Kiri */}
			<button
				onClick={handlePrev}
				className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition z-10"
				aria-label="Previous Project"
			>
				<FaChevronLeft size={24} />
			</button>

			{/* Tombol Navigasi Kanan */}
			<button
				onClick={handleNext}
				className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition z-10"
				aria-label="Next Project"
			>
				<FaChevronRight size={24} />
			</button>

			{/* Indikator Titik (Dots) */}
			<div className="flex justify-center mt-4">
				{projects.map((_, index) => (
					<div
						onClick={() => setCurrentIndex(index + 2)}
						key={index}
						className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-colors ${
							getActiveDotIndex() === index ? "bg-blue-600" : "bg-gray-400"
						}`}
					></div>
				))}
			</div>
		</div>
	);
};

import React from "react";
interface Project {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	projectUrl: string;
}
interface CardProps {
	project: Project;
	isActive: boolean;
	isTransitioning: boolean;
}

const Card: React.FC<CardProps> = ({ project, isActive, isTransitioning }) => {
	return (
		<div
			className={`
                w-48 md:w-96 mx-4 ${
									isTransitioning && "transition-all duration-500"
								}
                ${isActive ? "scale-105 opacity-100" : "scale-90 opacity-60"}
            `}
		>
			<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
				<img
					src={project.imageUrl}
					alt={project.title}
					className="w-full h-24 lg:h-48 object-cover"
				/>
				<div className="p-3 md:p-4 lg:p-6">
					<h3 className="text-xs lg:text-md font-bold text-gray-900 dark:text-white mb-2">
						{project.title}
					</h3>
					<p className="text-xs lg:text-md text-gray-700 dark:text-gray-300 mb-4">
						{project.description}
					</p>
					<a
						href={project.projectUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-xs md:text-base bg-blue-600 text-white font-semibold py-1 px-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
					>
						Lihat Proyek
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;

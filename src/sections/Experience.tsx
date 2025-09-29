import logo_isi from "../assets/logo/isi.png";
import logo_codingcamp from "../assets/logo/codingcamp.png";
import logo_peruri from "../assets/logo/peruri.png";
import logo_uteam from "../assets/logo/uteam.png";

import icon_express from "../assets/icon/express.png";
import icon_nextjs from "../assets/icon/nextjs.png";
import icon_postgresql from "../assets/icon/postgresql.png";
import icon_react from "../assets/icon/react.png";
import icon_typescript from "../assets/icon/typescript.png";
import icon_prisma from "../assets/icon/prisma.png";
import icon_php from "../assets/icon/php.png";
import icon_phalcon from "../assets/icon/phalcon.png";

const data = [
	{
		role: "Full Stack Developer",
		place: "Ihsan Solusi Informatika",
		time: "Feb 2025 - now",
		desc: `Maintained DPLK BRI’s Core Banking system by developing web platforms and collaborating remotely with cross-fuctional teams.`,
		desc_full: [
			"Develop and maintenance of the Core Banking system for Dana Pensiun Lembaga Keuangan (DPLK) at BRI.",
			"Focused on building an intuitive, high-performance web platform with seamless back-end integration. ",
			"Collaborate with cross-functional teams to address UI/UX challenges, implement innovative solutions, and ensure effective communication in a remote work environment.",
		],
		pic: logo_isi,
		tech_stacs: [icon_nextjs, icon_typescript],
	},
	{
		role: "Machine Learning Mentor",
		place: "Coding Camp by DBS Foundation",
		time: "Feb 2025 - Jul 2025",
		desc: `Led mentoring sessions and guided students effectively, earning a 4.69/5 communication rating and a 4.6/5 overall score.`,
		desc_full: [
			"Led team coordination and communication with earned 4.69/5 rating for communication effectiveness from students. ",
			"Earned an average rating of 4.6/5 across mentoring aspects, including answering questions and consultation sessions.",
		],
		pic: logo_codingcamp,
		tech_stacs: [],
	},
	{
		role: "Full Stack Developer",
		place: "PERURI",
		time: "Jul 2024 - Des 2024",
		desc: `Developed a React TS Procurement dashboard and Express TS server with PostgreSQL and resolved technical issues with cross-functional teams.`,
		desc_full: [
			"Developed a web dashboard for managing information requests between the Preparation & Procurement Department and vendors using the React TS framework.",
			"Built a backend server using Express TS with PostgreSQL and implemented Prisma ORM for database management.",
			"Applied best practices in React TS and Express TS development to enhance performance and maintainability.",
			"Collaborated with cross-functional teams to troubleshoot and resolve complex technical issues.",
		],
		pic: logo_peruri,
		tech_stacs: [
			icon_typescript,
			icon_react,
			icon_express,
			icon_postgresql,
			icon_prisma,
		],
	},
	{
		role: "Full Stack Developer",
		place: "Usaha Teknologi Madani",
		time: "Apr 2022 - Mar 2024",
		desc: `Built and maintained dashboards for OSN, O2SN, and FLS2N participant data.`,
		desc_full: [
			"Developed and maintained a web dashboard for managing OSN, O2SN, and FLS2N participant data.",
			"Designed, implemented, and tested system applications and supporting web services.",
			"Collaborated with cross-functional teams to troubleshoot and resolve complex technical issues, ensuring system reliability and efficiency.",
		],
		pic: logo_uteam,
		tech_stacs: [icon_php, icon_phalcon, icon_postgresql],
	},
];

function Experience() {
	return (
		<div
			id="experiences"
			className="p-14 md:px-36 lg:px-56 content-center bg-[#111827]  h-screen w-full"
		>
			<div className="mx-auto w-fit mb-4 md:text-lg lg:text-2xl">
				Work Experiences
			</div>
			<div className="md:hidden h-[75vh] overflow-auto">
				{data.map((job, i) => {
					return (
						<div
							key={`exp-small-${i}`}
							className={`my-4 border border-gray-800 rounded-md p-1 bg-gray-500/${
								i === 0 ? "20" : "10"
							} bg-clip-padding backdrop-filter backdrop-blur-sm`}
						>
							<div className="grid grid-cols-3">
								<img src={job.pic} className="col-span-1 rounded-2xl p-2" />
								<div className="col-span-2 content-center">
									<p className="">{job.place}</p>
									<p className="font-extralight text-xs">{job.role}</p>
									<p className="font-extralight text-xs">{job.time}</p>
								</div>
							</div>
							<div className="flex gap-1 mx-4 my-1.5">
								<div className="font-extralight text-xs">Tech Stack: </div>
								{job.tech_stacs.map((img) => {
									return <img src={img} className="w-auto h-[20px] mx-0.5" />;
								})}
							</div>
							<div className="ml-4 text-xs lg:text-lg">
								<ul className="list-disc font-extralight">
									{job.desc_full.map((d) => {
										return <li>{d}</li>;
									})}
								</ul>
							</div>
						</div>
					);
				})}
			</div>
			<div className="hidden md:block h-[65vh] overflow-auto">
				{data.map((job, i) => {
					return (
						<div
							key={`exp-large-${i}`}
							className={`mb-4 p-2 grid grid-cols-12 border border-gray-800 rounded-md bg-gray-500/${
								i === 0 ? "20" : 10
							} bg-clip-padding backdrop-filter backdrop-blur-sm`}
						>
							<div className="col-span-2">
								<img
									src={job.pic}
									className="rounded-2xl p-2 text-center w-full"
								/>
								<p className="w-full text-center">{job.place}</p>
							</div>
							<div className={`col-span-10 ml-1`}>
								<div className="grid grid-cols-2 lg:text-2xl">
									<p className="w-full text-start ">{job.role}</p>
									<p className="w-full text-end font-light">{job.time}</p>
								</div>
								<div className="flex gap-1 mx-4 my-1.5">
									<div className="font-light">Tech Stack: </div>
									{job.tech_stacs.map((img) => {
										return <img src={img} className="w-auto h-[20px] mx-0.5" />;
									})}
								</div>
								<div className="ml-4 text-xs lg:text-lg font-light">
									<ul className="list-disc">
										{job.desc_full.map((d) => {
											return <li>{d}</li>;
										})}
									</ul>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Experience;

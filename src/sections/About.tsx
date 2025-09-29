import { LuGithub, LuLinkedin } from "react-icons/lu";
import foto from "../assets/pics/profil.jpg";

function About() {
	return (
		<div
			id="about"
			className="p-16 md:px-24 lg:px-48 xl:px-56 content-center bg-[#030712]  h-screen w-full md:grid md:grid-cols-12"
		>
			<div id="picture" className="md:hidden m-4">
				<img
					src={foto}
					className="mx-auto my-auto w-[150px] max-w-full h-auto rounded-full"
				/>
			</div>
			<div id="info" className="md:col-span-7 ">
				<div id="greeting" className="text-3xl md:text-6xl mb-3 font-bold">
					Hi, I'am Aldi!
				</div>
				<div id="description" className="text-xs md:text-xl font-light">
					I'am a full-stack developer and machine learning enthusiast based in
					Bandung. I love building things that matter from web apps that
					streamline workflows to AI models that help machines understand the
					world a bit better.
				</div>
				<div className="flex justify-center md:justify-start mt-8">
					<a
						href={"https://github.com/alfahluzi"}
						target="_blank"
						className=" m-2 bg-white/0 transition hover:bg-white/20 p-1 rounded-lg"
					>
						<LuGithub className="h-auto w-6" />
					</a>
					<a
						href={"https://www.linkedin.com/in/aldi-fahluzi-muharam"}
						target="_blank"
						className=" m-2 bg-white/0 transition hover:bg-white/20 p-1 rounded-lg"
					>
						<LuLinkedin className="h-auto w-6" />
					</a>
					{/* <a
                                    href={""}
                                    target="_blank"
                                    className=" m-2 bg-white/0 transition hover:bg-white/20 p-1 rounded-lg"
                                >
                                    <SiSubstack className="h-auto w-6" />
                                </a> */}
				</div>
			</div>
			<div
				id="picture"
				className="hidden md:block md:col-span-5 m-4 content-center"
			>
				<img
					src={foto}
					className="mx-auto my-auto w-40 sm:w-60 md:w-72 lg:w-80 xl:w-96 max-w-full h-auto rounded-full"
				/>
			</div>
		</div>
	);
}

export default About;

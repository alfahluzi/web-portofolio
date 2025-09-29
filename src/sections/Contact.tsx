import { MdOutlineEmail } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
// import { SiSubstack } from "react-icons/si";

function Contact() {
	return (
		<div
			id="contacts"
			className="p-10 md:p-20 md:px-36 lg:px-56 content-center text-center justify-center bg-[#030712]  h-screen w-full"
		>
			<div className="bg-white/20 rounded-2xl w-fit mx-auto px-4 py-1 mb-8">
				Get In Touch
			</div>
			<div className="mx-auto md:text-xl md:w-[50vw] lg:text-2xl ">
				Feel free to reach out me if you're looking for a developer, have a
				query, or simply want to connect
			</div>
			<div className="md:text-2xl lg:text-4xl md:mx-4 my-8 font-bold md:flex items-center justify-center">
				<MdOutlineEmail className="h-auto w-5 md:w-8 mx-auto md:mx-0" />
				<p className="mx-4">aldifahluzi.muharam@gmail.com</p>
				<IoCopyOutline className="h-auto w-5 md:w-8 mx-auto md:mx-0 bg-white/0 transition hover:bg-white/20 p-1 rounded-lg" />
			</div>
			<div className="md:text-xl">You may also find me on these platforms!</div>
			<div className="flex justify-center">
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
	);
}

export default Contact;

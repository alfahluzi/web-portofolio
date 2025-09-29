interface NavbarProps {
	sectionOnChange: (i: number) => void;
}
const Navbar: React.FC<NavbarProps> = ({ sectionOnChange }) => {
	return (
		<div className="h-10 md:h-16 fixed z-10 content-center w-full bg-gray-500/10 bg-clip-padding backdrop-filter backdrop-blur-sm ">
			<div className="text-xs md:text-xl font-medium ml-auto w-fit my-auto ">
				<a className="mx-3" onClick={() => sectionOnChange(0)} href="#about">
					About
				</a>
				<a
					className="mx-3"
					onClick={() => sectionOnChange(1)}
					href="#experiences"
				>
					Experience
				</a>
				<a className="mx-3" onClick={() => sectionOnChange(2)} href="#projects">
					Projects
				</a>
				<a className="mx-3" onClick={() => sectionOnChange(3)} href="#contacts">
					Contact
				</a>
			</div>
		</div>
	);
};

export default Navbar;

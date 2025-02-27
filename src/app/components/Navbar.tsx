import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-transparent">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="assets/logo.svg"
            alt="logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Philip Ukanwoke <span className="sm:block hidden"> | Full Stack Developer</span>
          </p>
        </Link>
        <div className="flex gap-4">
            <Link
              href="https://github.com/Kaditcuy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer"
            >
              <Image
                src="/assets/github.png"
                alt="github"
                width={48}
                height={48}
                className="object-contain"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/philip-ukanwoke-81a611209/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer"
            >
              <Image
                src="/assets/linkedin.svg"
                alt="linkedin"
                width={48}
                height={48}
                className="object-contain"
              />
            </Link>
          </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <Link href="#about">About</Link>
          </li>
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <Link href="#work">Work</Link>
          </li>
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
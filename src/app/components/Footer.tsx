import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-auto absolute inset-0 z-[-1]">
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <canvas
          style={{ display: "block", width: "100%", height: "100%" }}
          data-engine="three.js r149"
        />
      </div>

      <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Philip Ukanwoke <span className="sm:block hidden"> | Full Stack Developer</span>
            </p>
          </div>

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

          <p className="text-secondary text-[14px] text-center">
            © 2025 Philip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
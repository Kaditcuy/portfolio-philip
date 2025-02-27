"use client";

import Image from "next/image";
import Link from "next/link";

export default function Work() {
    return (
    <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <span className="hash-span" id="work">&nbsp;</span>
      <div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Work Experience.
        </h2>
      </div>

      {/* Vertical Timeline */}
      <div className="mt-20 flex flex-col space-y-8">
        {/* Timeline Node 1 */}
        <div className="flex items-start">
          <div className="w-1 h-full bg-[#915EFF] mx-4 relative">
            <div className="absolute -left-3 top-0 w-7 h-7 rounded-full bg-[#915EFF] flex items-center justify-center">
              <Image src="/assets/asiainfo.png" alt="AsiaInfo Technologies" width={24} height={24} className="object-contain" />
            </div>
          </div>

          <div className="bg-tertiary p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-white text-[24px] font-bold">Backend Developer</h3>
            <p className="text-secondary text-[16px] font-semibold">AsiaInfo Technologies</p>
            <ul className="mt-4 list-disc ml-5 space-y-2 text-white-100 text-[14px] tracking-wider">
              <li>Engaged in development and refactoring of legacy platforms.</li>
              <li>Developed backend services for multiple web applications.</li>
              <li>Contributed to frontend features and improvements.</li>
              <li>Performed testing and debugging of web applications.</li>
              <li>Troubleshooting and resolving software issues.</li>
            </ul>
            <p className="mt-4 text-secondary text-[14px]">April 2011 - January 2014</p>
          </div>
        </div>

        {/* Timeline Node 2 */}
        <div className="flex items-start">
          <div className="w-1 h-full bg-[#915EFF] mx-4 relative">
            <div className="absolute -left-3 top-0 w-7 h-7 rounded-full bg-[#915EFF] flex items-center justify-center">
              <Image src="/assets/hdzb.png" alt="HDZB co. Ltd." width={24} height={24} className="object-contain" />
            </div>
          </div>

          <div className="bg-tertiary p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-white text-[24px] font-bold">Full Stack Developer</h3>
            <p className="text-secondary text-[16px] font-semibold">HDZB co. Ltd.</p>
            <ul className="mt-4 list-disc ml-5 space-y-2 text-white-100 text-[14px] tracking-wider">
              <li>Involved in product design and technology selection.</li>
              <li>Developed backend services and APIs.</li>
              <li>Built and enhanced frontend user interfaces.</li>
              <li>Created internal tooling and libraries for development efficiency.</li>
              <li>Debugging and bug fixing of production issues.</li>
            </ul>
            <p className="mt-4 text-secondary text-[14px]">October 2014 - September 2022</p>
          </div>
        </div>

        {/* Timeline Node 3 */}
        <div className="flex items-start">
          <div className="w-1 h-full bg-[#915EFF] mx-4 relative">
            <div className="absolute -left-3 top-0 w-7 h-7 rounded-full bg-[#915EFF] flex items-center justify-center">
              <Image src="/assets/web.png" alt="Freelancer" width={24} height={24} className="object-contain" />
            </div>
          </div>

          <div className="bg-tertiary p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-white text-[24px] font-bold">Full Stack Developer</h3>
            <p className="text-secondary text-[16px] font-semibold">Freelancer</p>
            <ul className="mt-4 list-disc ml-5 space-y-2 text-white-100 text-[14px] tracking-wider">
              <li>Developing and maintaining web applications using the MERN stack.</li>
              <li>Collaborating with designers, product managers, and developers.</li>
              <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
              <li>Participating in code reviews and providing technical feedback.</li>
            </ul>
            <p className="mt-4 text-secondary text-[14px]">January 2023 - Present</p>
          </div>
        </div>

        {/* Timeline Node 4: Download Resume */}
        <div className="flex items-start">
          <div className="w-1 h-full bg-[#915EFF] mx-4 relative">
            <div className="absolute -left-3 top-0 w-7 h-7 rounded-full bg-[#915EFF] flex items-center justify-center">
              <Image src="/assets/resume-icon.png" alt="Resume" width={24} height={24} className="object-contain" />
            </div>
          </div>

          <div className="bg-tertiary p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-white text-[24px] font-bold">Resume</h3>
            <p className="text-secondary text-[16px] font-semibold">
              Download my resume to learn more about my skills and experience.
            </p>
            <div className="mt-4">
              <Link href="/Resume_Phil.pdf" download="Philip_Resume.pdf" className="inline-flex items-center px-6 py-3 bg-[#915EFF] text-white font-semibold rounded-lg hover:bg-[#7b4ae2] transition-colors">
                <span>Download Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

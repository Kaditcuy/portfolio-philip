import Image from "next/image";

export default function About() {
  return (
    <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0" id="about">
      <span className="hash-span">&nbsp;</span>
      <div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </div>
      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a skilled software developer with experience in C, PHP, Java, Python, TypeScript, and
        JavaScript, and expertise in frameworks like React, Node.js, and Next.js. I'm a
        quick learner and collaborate closely with clients to create efficient, scalable,
        and user-friendly solutions that solve real-world problems. Let's work together to
        bring your ideas to life!
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        <div className="xs:w-[250px] w-full">
          <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <Image
                src="/assets/web.png"
                alt="web-development"
                width={64}
                height={64}
                className="object-contain"
              />
              <h3 className="text-white text-[20px] font-bold text-center">
                Frontend Developer
              </h3>
            </div>
          </div>
        </div>

        <div className="xs:w-[250px] w-full">
          <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <Image
                src="/assets/mobile.png"
                alt="mobile-development"
                width={64}
                height={64}
                className="object-contain"
              />
              <h3 className="text-white text-[20px] font-bold text-center">
                React Developer
              </h3>
            </div>
          </div>
        </div>

        <div className="xs:w-[250px] w-full">
          <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <Image
                src="/assets/backend.png"
                alt="backend-development"
                width={64}
                height={64}
                className="object-contain"
              />
              <h3 className="text-white text-[20px] font-bold text-center">
                Backend Developer
              </h3>
            </div>
          </div>
        </div>

        <div className="xs:w-[250px] w-full">
          <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <Image
                src="/assets/creator.png"
                alt="full-stack-development"
                width={64}
                height={64}
                className="object-contain"
              />
              <h3 className="text-white text-[20px] font-bold text-center">
                Full Stack Developer
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
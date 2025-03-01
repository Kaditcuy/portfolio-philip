import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <span className="hash-span" id="projects">&nbsp;</span>
      <div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through real-world examples
          of my work. Each project is briefly described with links to code repositories and
          live demos. It reflects my ability to solve complex problems, work with different
          technologies, and manage projects effectively.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {/* Project 1 */}
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
            <Image
              src="/assets/EFS.png"
              alt="EFS"
              fill
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <Image
                  src="/assets/github.png"
                  alt="github"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">
              <Link
                href="https://emoji-feedback-sys.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-600"
              >
                EFS
              </Link>
            </h3>
            <p className="mt-2 text-secondary text-[14px]">
              Emoji feedback App that allows users to give feedback on their just visited restaurant and using sentiment analysis generates actionable insights for restaurant admins.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <p className="text-[14px] blue-text-gradient">#react native</p>
            <p className="text-[14px] blue-text-gradient">#next js</p>
            <p className="text-[14px] green-text-gradient">#firebase</p>
            <p className="text-[14px] green-text-gradient">#railway</p>
            <p className="text-[14px] pink-text-gradient">#nativewind</p>
            <p className="text-[14px] blue-text-gradient">#typescript</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
            <Image
              src="/assets/FIRA.png"
              alt="FIRA"
              fill
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <Image
                  src="/assets/github.png"
                  alt="github"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-600"
              >
                FIRA
              </Link>
            </h3>
            <p className="mt-2 text-secondary text-[14px]">
              Web-based AI-powered system that automates financial requisitions, approvals, and tracking.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <p className="text-[14px] blue-text-gradient">#react</p>
            <p className="text-[14px] blue-text-gradient">#nextjs</p>
            <p className="text-[14px] green-text-gradient">#nodejs</p>
            <p className="text-[14px] pink-text-gradient">#Material-UI</p>
            <p className="text-[14px] pink-text-gradient">#Oauth</p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
            <Image
              src="/assets/my-ecommerce.png"
              alt="My E-commerce"
              fill
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <Image
                  src="/assets/github.png"
                  alt="github"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">
              <Link
                href="https://my-ecommerce-landing.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-600"
              >
                My E-commerce
              </Link>
            </h3>
            <p className="mt-2 text-secondary text-[14px]">
              The landing page for my E-commerce.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <p className="text-[14px] blue-text-gradient">#react</p>
            <p className="text-[14px] green-text-gradient">#vite</p>
            <p className="text-[14px] pink-text-gradient">#tailwind</p>
          </div>
        </div>

        {/* Project 4 */}
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
            <Image
              src="/assets/propertygirl.png"
              alt="Diary of a Property Girl"
              fill
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <Image
                  src="/assets/github.png"
                  alt="github"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">
              <Link
                href="https://diaryofapropertygirl.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-600"
              >
                Diary of A Property Girl
              </Link>
            </h3>
            <p className="mt-2 text-secondary text-[14px]">
              A website dedicated for listing houses for sale and rent.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <p className="text-[14px] blue-text-gradient">#PHP</p>
            <p className="text-[14px] green-text-gradient">#MYSQL</p>
            <p className="text-[14px] pink-text-gradient">#JavaScript</p>
            <p className="text-[14px] blue-text-gradient">#AJAX</p>
            <p className="text-[14px] green-text-gradient">#CSS</p>
            <p className="text-[14px] pink-text-gradient">#Html</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import resume from "../../assets/Guru-mern-stack.pdf";
import profileImage from "../../assets/Guru-Portfolio.jpeg";

const HeroSection = () => {
  const handleProjectsScroll = () => {
    const section = document.getElementById("projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleResumeOpen = () => {
    window.open(resume, "_blank");
  };

  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        pt-24
        bg-slate-50
        dark:bg-slate-950
        transition-colors
        duration-300
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <span
              className="
                text-blue-600
                font-semibold
                tracking-wider
                uppercase
              "
            >
              Welcome To My Portfolio
            </span>

            <h1
              className="
                mt-4
                text-5xl
                md:text-6xl
                font-extrabold
                text-slate-900
                dark:text-white
                leading-tight
              "
            >
              Hi, I'm
              <span className="text-blue-600">
                {" "}
                Gurumurthi
              </span>
            </h1>

            <h2
              className="
                mt-4
                text-2xl
                md:text-3xl
                font-semibold
                text-slate-700
                dark:text-slate-300
                min-h-[50px]
              "
            >
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "React TypeScript Developer",
                  "Node.js Developer",
                  "Full Stack Engineer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h2>
          </div>

          <p
            className="
              text-lg
              leading-8
              text-slate-600
              dark:text-slate-400
              max-w-2xl
            "
          >
            Full Stack Developer with hands-on experience
            building scalable MERN applications using
            React.js, TypeScript, Node.js, Express.js and
            MongoDB. Passionate about creating reusable
            components through Atomic Design principles
            and delivering modern, responsive user
            experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleProjectsScroll}
              className="
                px-6
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-1
                cursor-pointer
              "
            >
              View Projects
            </button>

            <button
              onClick={handleResumeOpen}
              className="
                px-6
                py-3
                rounded-xl
                border
                border-slate-300
                dark:border-slate-700
                font-semibold
                hover:scale-105
                transition-all
                duration-300
                cursor-pointer
                text-slate-900
                dark:text-white
              "
            >
              View Resume
            </button>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <a
              href="https://www.linkedin.com/in/guru-murthi/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-2xl
                text-slate-600
                dark:text-slate-400
                hover:text-blue-600
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/gurumurthi02"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-2xl
                text-slate-600
                dark:text-slate-400
                hover:text-blue-600
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-2xl
                text-slate-600
                dark:text-slate-400
                hover:text-pink-500
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* RIGHT - IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Glow effect behind the image */}
            <div
              className="
                absolute
                inset-0
                blur-3xl
                bg-blue-500/20
                rounded-full
              "
            />

            {/* Profile Image Container */}
            <div
              className="
                relative
                h-[320px]
                w-[320px]
                md:h-[400px]
                md:w-[400px]
                rounded-full
                border-4
                border-blue-500
                overflow-hidden
                shadow-2xl
              "
            >
              <img
                src={profileImage}
                alt="Gurumurthi"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
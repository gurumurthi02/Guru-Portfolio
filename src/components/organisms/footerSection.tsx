import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiDownload,
} from "react-icons/fi";

const Footer = () => {
  const navigation = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Experience", href: "experience" },
    { label: "Contact", href: "contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleResumeOpen = () => {
    window.open("/Guru-mern-stack.pdf", "_blank");
  };

  const handleNavigation = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer
      className="
        relative
        overflow-x-hidden
        bg-slate-950
        text-white
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />
      </div>

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          w-full
        "
      >
        {/* CTA SECTION */}

        <section
          className="
            py-24
            border-b
            border-slate-800
            text-center
          "
        >
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Let's Build Something Great Together
          </motion.h2>

          <p
            className="
              mt-6
              max-w-2xl
              mx-auto
              text-slate-400
              leading-8
            "
          >
            I'm passionate about creating scalable,
            responsive and user-friendly web
            applications. Let's connect and build
            something impactful together.
          </p>

          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >
            <button
              onClick={() =>
                handleNavigation("contact")
              }
              className="
                px-6
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                transition-all
                duration-300
                cursor-pointer
              "
            >
              Contact Me
            </button>

            <button
              onClick={handleResumeOpen}
              className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                border
                border-slate-700
                hover:border-blue-500
                hover:bg-slate-900
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <FiDownload />
              View Resume
            </button>
          </div>
        </section>

        {/* MAIN FOOTER */}

        <section
          className="
            py-16
            grid
            gap-12
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {/* BRAND */}

          <div>
            <h3
              className="
                text-3xl
                font-bold
              "
            >
              Gurumurthi
            </h3>

            <p
              className="
                mt-5
                text-slate-400
                leading-8
              "
            >
              Frontend Developer specializing in
              React, TypeScript, Tailwind CSS,
              Atomic Design System and scalable
              web application development.
            </p>

            <div
              className="
                mt-6
                flex
                gap-4
              "
            >
              <a
                href="https://www.linkedin.com/in/guru-murthi/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  h-12
                  w-12
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-900
                  flex
                  items-center
                  justify-center
                  hover:border-blue-500
                  hover:-translate-y-1
                  transition-all
                "
              >
                <FiLinkedin size={20} />
              </a>

              <a
                href="https://github.com/gurumurthi02"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  h-12
                  w-12
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-900
                  flex
                  items-center
                  justify-center
                  hover:border-blue-500
                  hover:-translate-y-1
                  transition-all
                "
              >
                <FiGithub size={20} />
              </a>

              <a
                href="mailto:gurumurthideveloper@gmail.com"
                className="
                  h-12
                  w-12
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-900
                  flex
                  items-center
                  justify-center
                  hover:border-blue-500
                  hover:-translate-y-1
                  transition-all
                "
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}

          <div>
            <h4
              className="
                text-lg
                font-semibold
                mb-5
              "
            >
              Quick Navigation
            </h4>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() =>
                      handleNavigation(item.href)
                    }
                    className="
                      text-slate-400
                      hover:text-white
                      transition-colors
                      cursor-pointer
                    "
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h4
              className="
                text-lg
                font-semibold
                mb-5
              "
            >
              Get In Touch
            </h4>

            <div className="space-y-4">
              <p className="text-slate-400">
                 Cuddalore, Tamil Nadu
              </p>

              <p className="text-slate-400">
                 gurumurthideveloper@gmail.com
              </p>

              <p className="text-slate-400">
                 Open to Frontend &
                Full Stack Opportunities
              </p>
            </div>
          </div>
        </section>

        {/* BOTTOM BAR */}

        <section
          className="
            py-6
            border-t
            border-slate-800
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <div className="text-center md:text-left">
            <p
              className="
                text-sm
                text-slate-500
              "
            >
              © 2026 Gurumurthi.
              All Rights Reserved.
            </p>

            <p
              className="
                mt-2
                text-xs
                text-slate-600
              "
            >
              Built with React • TypeScript •
              Tailwind CSS • Framer Motion
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll To Top"
            className="
              h-12
              w-12
              rounded-full
              bg-blue-600
              hover:bg-blue-700
              flex
              items-center
              justify-center
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <FiArrowUp size={18} />
          </button>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
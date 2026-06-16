import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="
      relative
      py-32
      px-6
      bg-white
      dark:bg-slate-950
      overflow-hidden
      "
    >
      {/* Background Blur */}

      <div
        className="
        absolute
        top-20
        left-10
        h-72
        w-72
        rounded-full
        bg-blue-500/10
        blur-3xl
        "
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span
            className="
            text-blue-600
            uppercase
            tracking-[0.3em]
            text-sm
            font-semibold
            "
          >
            About Me
          </span>

          <h2
            className="
            mt-5
            text-4xl
            md:text-6xl
            font-bold
            text-slate-900
            dark:text-white
            "
          >
            Building Software
            <br />
            With Purpose.
          </h2>
        </motion.div>

        {/* Main Content */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
          mt-16
          max-w-4xl
          mx-auto
          "
        >
          {!expanded ? (
            <>
              <p
                className="
                text-lg
                md:text-xl
                leading-9
                text-slate-600
                dark:text-slate-400
                text-center
                "
              >
                I'm Gurumurthi, a Full Stack Developer who
                enjoys transforming ideas into scalable and
                meaningful web applications. My passion lies
                in creating clean user experiences, writing
                maintainable code, and continuously learning
                modern technologies that solve real-world
                problems.
              </p>

              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setExpanded(true)}
                  className="
                  px-6
                  py-3
                  rounded-full
                  border
                  border-blue-500
                  text-blue-600
                  hover:bg-blue-600
                  hover:text-white
                  transition-all
                  duration-300
                  "
                >
                  Read More
                </button>
              </div>
            </>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
              >
                <div
                  className="
                  space-y-6
                  text-lg
                  leading-9
                  text-slate-600
                  dark:text-slate-400
                  "
                >
                  <p>
                    I'm Gurumurthi, a passionate Full Stack
                    Developer who believes that great software
                    is not just about writing code—it's about
                    solving problems and creating experiences
                    that people genuinely enjoy using.
                  </p>

                  <p>
                    During my internship, I worked on real
                    business modules where I learned how
                    scalable applications are designed,
                    developed, and maintained in professional
                    environments. That experience strengthened
                    my understanding of software architecture,
                    clean code practices, and collaboration.
                  </p>

                  <p>
                    What excites me most about development is
                    the process of turning complex challenges
                    into elegant solutions. Whether building a
                    booking platform, an eCommerce system, or
                    a reusable component library, I focus on
                    performance, maintainability, and user
                    experience.
                  </p>

                  <p>
                    I'm constantly exploring better ways to
                    design software, improve application
                    architecture, and deliver products that
                    make a real impact. My goal is to grow as
                    an engineer who creates technology that is
                    both technically strong and meaningful to
                    users.
                  </p>
                </div>

                <div className="flex justify-center mt-10">
                  <button
                    onClick={() => setExpanded(false)}
                    className="
                    px-6
                    py-3
                    rounded-full
                    border
                    border-blue-500
                    text-blue-600
                    hover:bg-blue-600
                    hover:text-white
                    transition-all
                    duration-300
                    "
                  >
                    Show Less
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>

        {/* Quote Card */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          mt-20
          "
        >
          <div
            className="
            p-8
            rounded-3xl
            bg-slate-100
            dark:bg-slate-900
            border
            border-slate-200
            dark:border-slate-800
            text-center
            "
          >
            <p
              className="
              text-xl
              italic
              text-slate-700
              dark:text-slate-300
              "
            >
              "Clean architecture, reusable components,
              and meaningful user experiences are the
              foundation of every product I build."
            </p>

            <p
              className="
              mt-4
              text-sm
              text-blue-600
              font-semibold
              "
            >
              — Gurumurthi
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
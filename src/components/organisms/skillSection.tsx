import { motion } from "framer-motion";

import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiGit,
  SiPostman,
  SiZod,
  SiReacthookform,
} from "react-icons/si";

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

const skills = [
  {
    title: "Frontend",
    icon: <FaCode />,
    items: [
      { name: "React.js", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },

  {
    title: "Backend",
    icon: <FaServer />,
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "JWT Auth", icon: "🔐" },
      { name: "REST APIs", icon: "⚡" },
    ],
  },

  {
    title: "Database",
    icon: <FaDatabase />,
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL", icon: <SiMysql /> },
    ],
  },

  {
    title: "Tools",
    icon: <FaTools />,
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "React Hook Form", icon: <SiReacthookform /> },
      { name: "Zod", icon: <SiZod /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="
      py-28
      px-6
      bg-white
      dark:bg-slate-900
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-16">
          <span
            className="
            uppercase
            tracking-[0.3em]
            text-blue-600
            text-sm
            font-semibold
            "
          >
            Skills
          </span>

          <h2
            className="
            mt-4
            text-4xl
            md:text-5xl
            font-bold
            text-slate-900
            dark:text-white
            "
          >
            Technologies I Work With
          </h2>

          <p
            className="
            mt-5
            text-slate-500
            dark:text-slate-400
            max-w-2xl
            mx-auto
            "
          >
            Tools and technologies I use to build
            modern, scalable and performant applications.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-8
          "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              dark:border-slate-800
              bg-slate-50
              dark:bg-slate-950
              p-6
              "
            >
              {/* Glow */}

              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                bg-gradient-to-br
                from-blue-500/10
                via-purple-500/10
                to-cyan-500/10
                "
              />

              <div className="relative z-10">
                <div
                  className="
                  flex
                  items-center
                  gap-3
                  mb-6
                  "
                >
                  <div
                    className="
                    text-2xl
                    text-blue-600
                    "
                  >
                    {skill.icon}
                  </div>

                  <h3
                    className="
                    text-xl
                    font-bold
                    text-slate-900
                    dark:text-white
                    "
                  >
                    {skill.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <div
                      key={item.name}
                      className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-full
                      bg-white
                      dark:bg-slate-800
                      border
                      border-slate-200
                      dark:border-slate-700
                      text-sm
                      font-medium
                      hover:border-blue-500
                      transition
                      "
                    >
                      <span className="text-lg">
                        {item.icon}
                      </span>

                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="
          mt-16
          rounded-3xl
          p-8
          text-center
          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-purple-600
          text-white
          "
        >
          <h3 className="text-2xl font-bold">
            Always Learning & Building
          </h3>

          <p className="mt-3 opacity-90">
            Passionate about creating scalable MERN
            applications with modern frontend architecture,
            clean backend design, and exceptional user
            experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
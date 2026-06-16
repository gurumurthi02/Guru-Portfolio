import { motion } from "framer-motion";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="
      py-28
      px-6
      bg-white
      dark:bg-slate-900
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="text-center mb-20">
          <span
            className="
            uppercase
            tracking-[0.3em]
            text-blue-600
            text-sm
            font-semibold
            "
          >
            Contact
          </span>

          <h2
            className="
            mt-4
            text-5xl
            font-bold
            text-slate-900
            dark:text-white
            "
          >
            Let's Build Something Amazing
          </h2>

          <p
            className="
            mt-5
            max-w-2xl
            mx-auto
            text-slate-500
            dark:text-slate-400
            "
          >
            Have a project in mind, internship opportunity,
            freelance work, or just want to connect?
            Let's discuss and create something impactful.
          </p>
        </div>

        <div
          className="
          grid
          lg:grid-cols-[380px_1fr]
          gap-10
          "
        >
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
            rounded-3xl
            p-8
            bg-gradient-to-br
            from-blue-600
            via-indigo-600
            to-purple-600
            text-white
            "
          >
            <h3
              className="
              text-3xl
              font-bold
              "
            >
              Contact Information
            </h3>

            <p
              className="
              mt-4
              text-white/80
              leading-8
              "
            >
              Currently open to work,
              Python developer roles,
              MERN stack opportunities and
              freelance projects.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4 items-center">
                <FiMail size={22} />
                <span>gurumurthideveloper@gmail.com</span>
              </div>

              <div className="flex gap-4 items-center">
                <FiPhone size={22} />
                <span>+91 87789 09419</span>
              </div>

              <div className="flex gap-4 items-center">
                <FiMapPin size={22} />
                <span>Cuddalore, Tamil Nadu</span>
              </div>
            </div>

            {/* Availability */}

            <div
              className="
              mt-10
              p-5
              rounded-2xl
              bg-white/10
              backdrop-blur-md
              "
            >
              <h4 className="font-semibold">
                Availability
              </h4>

              <p className="mt-2 text-white/80">
                Open for Full-Time Opportunities
                and Frontend Development Roles.
              </p>
            </div>

            {/* Socials */}

            <div className="mt-10">
              <h4 className="font-semibold mb-4">
                Connect With Me
              </h4>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="
                  h-12
                  w-12
                  rounded-xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-white/20
                  transition
                  "
                >
                  <FiLinkedin size={22} />
                </a>

                <a
                  href="#"
                  className="
                  h-12
                  w-12
                  rounded-xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-white/20
                  transition
                  "
                >
                  <FiGithub size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
            rounded-3xl
            border
            border-slate-200
            dark:border-slate-800
            bg-slate-50
            dark:bg-slate-950
            p-8
            "
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  className="
                  block
                  mb-2
                  font-medium
                  "
                >
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                  w-full
                  rounded-xl
                  border
                  border-slate-300
                  dark:border-slate-700
                  bg-transparent
                  px-4
                  py-3
                  outline-none
                  focus:border-blue-500
                  "
                />
              </div>

              <div>
                <label
                  className="
                  block
                  mb-2
                  font-medium
                  "
                >
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="
                  w-full
                  rounded-xl
                  border
                  border-slate-300
                  dark:border-slate-700
                  bg-transparent
                  px-4
                  py-3
                  outline-none
                  focus:border-blue-500
                  "
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                className="
                block
                mb-2
                font-medium
                "
              >
                Subject
              </label>

              <input
                type="text"
                placeholder="Project Discussion"
                className="
                w-full
                rounded-xl
                border
                border-slate-300
                dark:border-slate-700
                bg-transparent
                px-4
                py-3
                outline-none
                focus:border-blue-500
                "
              />
            </div>

            <div className="mt-6">
              <label
                className="
                block
                mb-2
                font-medium
                "
              >
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="
                w-full
                rounded-xl
                border
                border-slate-300
                dark:border-slate-700
                bg-transparent
                px-4
                py-3
                outline-none
                resize-none
                focus:border-blue-500
                "
              />
            </div>

            <button
              type="submit"
              className="
              mt-8
              inline-flex
              items-center
              gap-3
              px-8
              py-4
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-medium
              transition
              "
            >
              <FiSend />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
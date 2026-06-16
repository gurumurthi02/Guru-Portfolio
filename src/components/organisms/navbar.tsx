// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMenu, FiX } from "react-icons/fi";
// import { ThemeToggle } from "../atoms/themeToggle";
// import { useTheme } from "../../hooks/useTheme";

// const navItems = [
//   "About",
//   "Skills",
//   "Experience",
//   "Projects",
//   "Contact",
// ];

// export const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const { theme, toggleTheme } = useTheme();

//   return (
//     <header
//       className="
//       fixed
//       top-0
//       left-0
//       right-0
//       z-50
//       backdrop-blur-lg
//       bg-white/70
//       dark:bg-slate-950/70
//       border-b
//       border-slate-200
//       dark:border-slate-800
//       "
//     >
//       <nav
//         className="
//         max-w-7xl
//         mx-auto
//         px-6
//         h-20
//         flex
//         items-center
//         justify-between
//         "
//       >
//         {/* Logo */}

//         <a
//           href="#"
//           className="
//           text-xl
//           font-bold
//           tracking-wide
//           "
//         >
//           GM.
//         </a>

//         {/* Desktop */}

//         <div className="hidden md:flex items-center gap-8">
//           {navItems.map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="
//               text-sm
//               font-medium
//               text-slate-600
//               dark:text-slate-300
//               hover:text-blue-500
//               transition
//               "
//             >
//               {item}
//             </a>
//           ))}

//           <ThemeToggle
//             theme={theme}
//             onToggle={toggleTheme}
//           />
//         </div>

//         {/* Mobile */}

//         <div className="md:hidden flex items-center gap-3">
//           <ThemeToggle
//             theme={theme}
//             onToggle={toggleTheme}
//           />

//           <button
//             onClick={() => setOpen(!open)}
//           >
//             {open ? (
//               <FiX size={24} />
//             ) : (
//               <FiMenu size={24} />
//             )}
//           </button>
//         </div>
//       </nav>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{
//               opacity: 0,
//               height: 0,
//             }}
//             animate={{
//               opacity: 1,
//               height: "auto",
//             }}
//             exit={{
//               opacity: 0,
//               height: 0,
//             }}
//             className="
//             md:hidden
//             overflow-hidden
//             bg-white
//             dark:bg-slate-950
//             "
//           >
//             <div className="flex flex-col p-6 gap-5">
//               {navItems.map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   onClick={() => setOpen(false)}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { ThemeToggle } from "../atoms/themeToggle";
import { useTheme } from "../../hooks/useTheme";

const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        backdrop-blur-lg
        bg-white/80
        dark:bg-slate-950/80
        border-b
        border-slate-200
        dark:border-slate-800
        transition-colors
        duration-300
      "
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white">
          GM<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}

          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          <button 
            onClick={() => setOpen(!open)}
            className="p-2 text-slate-600 dark:text-slate-300"
          >
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
          >
            <div className="flex flex-col p-6 gap-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-slate-700 dark:text-slate-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
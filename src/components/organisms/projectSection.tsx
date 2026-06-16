

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../../data/project";

// Note: Ensure your ProjectCard component handles these props correctly
import ProjectCard from "../molecules/projectCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const ProjectsSection = () => {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-28 px-6 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[0.3em] text-blue-600 text-sm font-semibold">
            Projects
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Featured Work
          </h2>
          <p className="mt-5 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Production-grade applications built with performance, scalability,
            and user experience in mind.
          </p>
        </motion.div>

        {/* Featured Project Card */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[32px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg mb-20"
          >
            <div className="grid lg:grid-cols-2">
              <div className="h-[350px] lg:h-full overflow-hidden">
                <img
                  loading="lazy"
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div>
                  <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 text-sm font-medium">
                    Featured Project
                  </span>
                  <h3 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                    {featuredProject.title}
                  </h3>
                  <p className="mt-6 text-slate-600 dark:text-slate-400 leading-8">
                    {featuredProject.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mt-8">
                  {featuredProject.metrics?.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-xl p-3 text-center bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {metric}
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {featuredProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-10">
                  <a
                    href={featuredProject.github}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
                  >
                    <FiGithub />
                    GitHub
                  </a>
                  <a
                    href={featuredProject.live}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {otherProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FiGithub, 
//   FiExternalLink, 
//   FiX, 
//   FiInfo, 
//   FiMonitor, 
//   FiCheckCircle 
// } from "react-icons/fi";
// import { projects } from "../../data/project";

// // Component for the Project Card in the grid
// const ProjectCard = ({ project, onPreview }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -8 }}
//       className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
//     >
//       <div className="relative h-52 w-full overflow-hidden rounded-2xl mb-6">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
//           <button 
//             onClick={() => onPreview(project)}
//             className="w-full py-2 bg-white text-slate-900 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
//           >
//             <FiMonitor size={16} /> Quick Preview
//           </button>
//         </div>
//       </div>
      
//       <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
//         {project.title}
//       </h3>
      
//       <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
//         {project.description}
//       </p>

//       <div className="flex flex-wrap gap-2 mb-6">
//         {project.tech.map((t) => (
//           <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-[10px] uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">
//             {t}
//           </span>
//         ))}
//       </div>

//       <div className="flex gap-4">
//         <a href={project.github} className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
//           <FiGithub size={18} /> Code
//         </a>
//         <button 
//           onClick={() => onPreview(project)}
//           className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline"
//         >
//           <FiExternalLink size={18} /> Live Demo
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// const ProjectsSection = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const featuredProject = projects.find((p) => p.featured);
//   const otherProjects = projects.filter((p) => !p.featured);

//   return (
//     <section id="projects" className="relative py-28 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <span className="uppercase tracking-[0.3em] text-blue-600 text-sm font-semibold">
//             Projects
//           </span>
//           <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
//             Featured Work
//           </h2>
//           <p className="mt-5 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
//             Production-grade applications built with modern stacks. 
//             Click "Live Demo" to see the project overview.
//           </p>
//         </motion.div>

//         {/* Featured Project */}
//         {featuredProject && (
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="overflow-hidden rounded-[32px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl mb-20"
//           >
//             <div className="grid lg:grid-cols-2">
//               <div className="relative h-[300px] lg:h-auto group overflow-hidden">
//                 <img
//                   src={featuredProject.image}
//                   alt={featuredProject.title}
//                   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors" />
//               </div>

//               <div className="p-10 lg:p-14 flex flex-col justify-center">
//                 <span className="w-fit px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 text-sm font-bold">
//                   Featured Project
//                 </span>
//                 <h3 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
//                   {featuredProject.title}
//                 </h3>
//                 <p className="mt-6 text-slate-600 dark:text-slate-400 leading-8">
//                   {featuredProject.description}
//                 </p>

//                 <div className="flex flex-wrap gap-3 mt-8">
//                   {featuredProject.tech.map((t) => (
//                     <span key={t} className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{t}</span>
//                   ))}
//                 </div>

//                 <div className="flex gap-4 mt-10">
//                   <a
//                     href={featuredProject.github}
//                     className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-black transition-all"
//                   >
//                     <FiGithub /> GitHub
//                   </a>
//                   <button
//                     onClick={() => setSelectedProject(featuredProject)}
//                     className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all"
//                   >
//                     <FiExternalLink /> Live Demo
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}

//         {/* Other Projects Grid */}
//         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {otherProjects.map((project) => (
//             <ProjectCard 
//               key={project.id} 
//               project={project} 
//               onPreview={(p) => setSelectedProject(p)} 
//             />
//           ))}
//         </div>
//       </div>

//       {/* --- PREVIEW MODAL (Fake Browser) --- */}
//       <AnimatePresence>
//         {selectedProject && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedProject(null)}
//               className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
//             />

//             {/* Modal Content */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 40 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 40 }}
//               className="relative w-full max-w-6xl bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
//             >
//               {/* Browser Header */}
//               <div className="bg-slate-100 dark:bg-slate-800 px-6 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-700">
//                 <div className="flex gap-2">
//                   <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-inner" />
//                   <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-inner" />
//                   <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-inner" />
//                 </div>
                
//                 <div className="hidden md:flex items-center gap-2 bg-white dark:bg-slate-950 px-4 py-1.5 rounded-full text-[11px] text-slate-400 border border-slate-200 dark:border-slate-800 w-1/2 justify-center">
//                   <span className="opacity-50">https://</span>
//                   {selectedProject.title.toLowerCase().replace(/ /g, "-")}.app
//                 </div>

//                 <button 
//                   onClick={() => setSelectedProject(null)}
//                   className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors"
//                 >
//                   <FiX className="text-slate-500" size={20} />
//                 </button>
//               </div>

//               {/* Main Body */}
//               <div className="relative aspect-video bg-slate-200 dark:bg-slate-950 overflow-hidden">
//                 <img 
//                   src={selectedProject.image} 
//                   alt="Preview" 
//                   className="w-full h-full object-cover blur-[2px]"
//                 />
                
//                 {/* Information Overlay */}
//                 <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-6 backdrop-blur-sm">
//                    <motion.div 
//                      initial={{ y: 20, opacity: 0 }}
//                      animate={{ y: 0, opacity: 1 }}
//                      transition={{ delay: 0.2 }}
//                      className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-lg text-center border border-white/20"
//                    >
//                       <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-white shadow-xl shadow-blue-500/40 rotate-12">
//                          <FiMonitor size={36} />
//                       </div>
                      
//                       <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
//                         Project Preview
//                       </h4>
                      
//                       <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
//                         The live version of <strong>{selectedProject.title}</strong> is currently being optimized for global deployment.
//                       </p>

//                       <div className="space-y-4">
//                         <div className="flex items-center gap-3 text-left p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
//                           <FiCheckCircle className="text-green-500 shrink-0" size={20} />
//                           <p className="text-sm text-slate-600 dark:text-slate-400">Project Backend & Database Ready</p>
//                         </div>
//                         <div className="flex items-center gap-3 text-left p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
//                           <FiCheckCircle className="text-green-500 shrink-0" size={20} />
//                           <p className="text-sm text-slate-600 dark:text-slate-400">Frontend Mockups Finalized</p>
//                         </div>
//                       </div>

//                       <button 
//                          onClick={() => setSelectedProject(null)}
//                          className="mt-10 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 active:scale-95"
//                       >
//                         Close Preview
//                       </button>
//                    </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default ProjectsSection;
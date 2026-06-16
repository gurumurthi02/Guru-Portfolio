import {
  memo,
  useState,
} from "react";

import {
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    live: string;
  };
}

const ProjectCard = ({
  project,
}: ProjectProps) => {
  const [loaded, setLoaded] =
    useState(false);

  return (
    <article
  className="
  group
  h-full
  flex
  flex-col
  rounded-3xl
  overflow-hidden
  border
  border-slate-200
  dark:border-slate-800
  bg-white
  dark:bg-slate-900
  transition-all
  duration-300
  hover:-translate-y-2
  "
>
      <div className="relative">
        {!loaded && (
          <div
            className="
            absolute
            inset-0
            animate-pulse
            bg-slate-200
            dark:bg-slate-800
            "
          />
        )}

        <img
          loading="lazy"
          src={project.image}
          alt={project.title}
          onLoad={() =>
            setLoaded(true)
          }
          className="
          h-56
          w-full
          object-cover
          "
        />
      </div>

      <div className="p-6">
        <h3
          className="
          text-xl
          font-bold
          text-slate-900
          dark:text-white
          "
        >
          {project.title}
        </h3>

        <p
          className="
          mt-3
          text-sm
          leading-7
          text-slate-500
          dark:text-slate-400
          "
        >
          {project.description}
        </p>

        <div
          className="
          flex
          flex-wrap
          gap-2
          mt-5
          "
        >
          {project.tech.map(
            (tech) => (
              <span
                key={tech}
                className="
                px-3
                py-1
                rounded-full
                text-xs
                bg-slate-100
                dark:bg-slate-800
                "
              >
                {tech}
              </span>
            )
          )}
        </div>

        <div
          className="
          flex
          gap-4
          mt-6
          "
        >
          <a
            href={project.github}
          >
            <FiGithub size={20} />
          </a>

          <a
            href={project.live}
          >
            <FiExternalLink
              size={20}
            />
          </a>
        </div>
      </div>
    </article>
  );
};

export default memo(ProjectCard);
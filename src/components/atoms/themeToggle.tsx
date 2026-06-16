import { FiMoon, FiSun } from "react-icons/fi";

interface Props {
  theme: string;
  onToggle: () => void;
}

export const ThemeToggle = ({ theme, onToggle }: Props) => {
  return (
    <button
      onClick={onToggle}
      className="
        p-2.5
        rounded-xl
        border
        border-slate-200
        dark:border-slate-700
        bg-white
        dark:bg-slate-900
        text-slate-700
        dark:text-yellow-400
        hover:bg-slate-50
        dark:hover:bg-slate-800
        transition-all
        duration-300
        shadow-sm
      "
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <FiSun size={20} className="animate-pulse" />
      ) : (
        <FiMoon size={20} className="text-slate-600" />
      )}
    </button>
  );
};
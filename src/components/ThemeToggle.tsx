import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme/useTheme";

export function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 shadow"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Briefcase, Users, BarChart, ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

export function Sidebar() {
  const [open, setOpen] = useState(true);

  const links = [
    { to: "jobs", label: "Jobs", icon: <Briefcase size={18} /> },
    { to: "candidates", label: "Candidates", icon: <Users size={18} /> },
    { to: "analytics", label: "Analytics", icon: <BarChart size={18} /> }
  ];

  return (
    <aside
      className={clsx(
        "border-r border-slate-200 bg-white dark:bg-slate-800 transition-all",
        open ? "w-64" : "w-16"
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="absolute -right-3 top-4 rounded-full bg-white dark:bg-slate-800 border p-1 shadow"
        aria-label="Collapse sidebar"
      >
        {open ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
      </button>

      <nav className="mt-20 space-y-2 px-2">
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              clsx(
                "flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium",
                isActive
                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
              )
            }
          >
            {l.icon}
            {open && l.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

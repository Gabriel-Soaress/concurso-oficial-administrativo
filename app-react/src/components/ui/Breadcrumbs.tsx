import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-xs text-mut">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx} className="inline-flex items-center gap-1.5 min-w-0">
            {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-mut/60 shrink-0" />}
            {item.to && !isLast ? (
              <Link
                to={item.to}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium truncate max-w-[160px] sm:max-w-none"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-pri truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

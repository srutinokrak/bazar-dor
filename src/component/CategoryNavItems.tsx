"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Nav {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

export default function CategoryNavItems({ items }: { items: Nav[] }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="পণ্যের বিভাগ"
      className="mt-5 flex w-full flex-wrap gap-2 border border-base-200 p-3"
    >
      {items.map((item) => {
        const href = `/category/${item.slug}`;
        const isActive = pathname === href;

        return (
          <Link
            key={item.id}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-md px-3 py-2 transition-colors ${
              isActive
                ? "bg-green-700 text-white"
                : "hover:bg-base-200"
            }`}
          >
            {item.icon} {item.nameBn}
          </Link>
        );
      })}
    </nav>
  );
}
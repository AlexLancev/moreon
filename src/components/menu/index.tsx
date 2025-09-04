import { menuData } from "constans";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";

type MenuPropsType = {
  className?: string;
  isVisibleSubMenu?: boolean;
};

export const Menu = ({
  className,
  isVisibleSubMenu = false,
}: MenuPropsType) => {
  const pathname = useLocation().pathname;
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseOver = (path: string): void => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(path);
  };

  const handleMouseOut = (): void => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const handleFocus = (path: string): void => {
    setActiveMenu(path);
  };

  if (!menuData || menuData.length === 0) return null;

  return (
    <nav>
      <ul
        className={cn(
          "flex-wrap gap-x-8 gap-y-5 text-sm text-[rgba(255,255,255,0.8)] xl:gap-x-10 2xl:gap-x-12 3xl:gap-x-14",
          className,
        )}
      >
        {menuData.map(({ path, nameLink, subMenu }) => {
          if (!path || !nameLink) return null;

          return (
            <li key={path} className="relative">
              <div
                onMouseOver={() => handleMouseOver(path)}
                onMouseOut={handleMouseOut}
                onFocus={() => handleFocus(path)}
              >
                <Link
                  to={path}
                  className={cn(
                    "text-[rgb(191,191,191)] transition duration-300 hover:text-white xl:text-lg 2xl:text-xl 3xl:text-2xl",
                    {
                      "cursor-default text-white": pathname === path,
                    },
                  )}
                >
                  {nameLink}
                </Link>
                {isVisibleSubMenu && subMenu && (
                  <ul
                    className={cn(
                      "absolute left-0 top-[30px] z-[99999] flex w-max flex-col items-start gap-y-2 rounded-lg bg-[rgb(0,9,8)] p-4 transition duration-300 before:absolute before:left-28 before:top-28 before:h-[138px] before:w-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px] xl:text-lg 2xl:gap-y-4 2xl:p-8 2xl:text-xl 3xl:text-2xl",
                      {
                        "visible opacity-100": activeMenu === path,
                        "invisible opacity-0": activeMenu !== path,
                      },
                    )}
                  >
                    {subMenu?.map(
                      ({ path: subToLink, nameLink: subNameLink }) => (
                        <li key={subToLink}>
                          <Link
                            to={subToLink}
                            className="transition duration-300 hover:text-white"
                          >
                            {subNameLink}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

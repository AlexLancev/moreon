import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import { menu_data } from "constans";

type Menu_props_type = {
  className?: string;
  isVisibleSubMenu?: boolean;
};

export const Menu = ({
  className,
  isVisibleSubMenu = false,
}: Menu_props_type) => {
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

  if (!menu_data || menu_data.length === 0) return null;

  return (
    <nav>
      <ul
        className={classNames(
          "flex-wrap text-[rgba(255,255,255,0.8)] text-sm gap-x-8 xl:gap-x-10 2xl:gap-x-12 3xl:gap-x-14 gap-y-5",
          className,
        )}
      >
        {menu_data.map(({ path, name_link, sub_menu }) => {
          if (!path || !name_link) return null;

          return (
            <li key={path} className="relative">
              <div
                onMouseOver={() => handleMouseOver(path)}
                onMouseOut={handleMouseOut}
                onFocus={() => handleFocus(path)}
              >
                <Link
                  to={path}
                  className={classNames(
                    "transition duration-300 text-[rgb(191,191,191)] hover:text-white xl:text-lg 2xl:text-xl 3xl:text-2xl",
                    {
                      "text-white cursor-default": pathname === path,
                    },
                  )}
                >
                  {name_link}
                </Link>
                {isVisibleSubMenu && sub_menu && (
                  <ul
                    className={classNames(
                      "absolute top-[30px] left-0 z-[99999] p-4 2xl:p-8 flex flex-col items-start gap-y-2 2xl:gap-y-4 xl:text-lg 2xl:text-xl 3xl:text-2xl w-max bg-[rgb(0,9,8)] rounded-lg transition duration-300 before:absolute before:left-28 before:top-28 before:w-[138px] before:h-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px]",
                      {
                        "opacity-100 visible": activeMenu === path,
                        "opacity-0 invisible": activeMenu !== path,
                      },
                    )}
                  >
                    {sub_menu?.map(
                      ({ path: subToLink, name_link: subNameLink }) => (
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

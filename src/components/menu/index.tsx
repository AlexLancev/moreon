import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import { menu_data } from "constans";

export const Menu = () => {
  const pathname = useLocation().pathname;
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseOver = (patch: string): void => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(patch);
  };

  const handleMouseOut = (): void => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const handleFocus = (patch: string): void => {
    setActiveMenu(patch);
  };

  if (!menu_data || menu_data.length === 0) return null;

  return (
    <nav>
      <ul className="flex items-center gap-x-10 text-[rgba(255,255,255,0.8)] text-sm">
        {menu_data.map(({ patch, name_link, sub_menu }) => {
          if (!patch || !name_link) return null;

          return (
            <li key={patch} className="relative">
              <div
                onMouseOver={() => handleMouseOver(patch)}
                onMouseOut={handleMouseOut}
                onFocus={() => handleFocus(patch)}
              >
                <Link
                  to={patch}
                  className={classNames(
                    "transition duration-300 text-[rgb(191,191,191)] hover:text-white 2xl:text-[1.25rem]",
                    {
                      "text-white cursor-default": pathname === patch,
                    },
                  )}
                >
                  {name_link}
                </Link>
                {sub_menu && (
                  <ul
                    className={classNames(
                      "absolute top-[30px] left-0 z-[99999] flex flex-col items-start gap-3 w-[320px] 2xl:w-[450px] bg-[rgb(0,9,8)] rounded-lg p-5 transition duration-300 before:absolute before:left-28 before:top-28 before:w-[138px] before:h-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px]",
                      {
                        "opacity-100 visible": activeMenu === patch,
                        "opacity-0 invisible": activeMenu !== patch,
                      },
                    )}
                  >
                    {sub_menu?.map(
                      ({ patch: subToLink, name_link: subNameLink }) => (
                        <li key={subToLink}>
                          <Link
                            to={subToLink}
                            className="transition duration-300 hover:text-white 2xl:text-[1.25rem]"
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

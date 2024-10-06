"use client";

import { usePathname } from "next/navigation";
import { Fragment } from "react";

function Breadcrumb() {
  const pathname = usePathname();
  let currentBreadCrumb = pathname.split("/"); // [ "", "admin", "products" ]
  currentBreadCrumb = currentBreadCrumb.slice(1); // sup first  element is empty because of the first split ("").

  return (
    <>
      {/* Breadcrumb */}
      <nav
        className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          {currentBreadCrumb.map((i, index) => (
            <Fragment key={index}>
              <li>
                <div className="flex items-center">
                  {index >= 1 && (
                    <svg
                      className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  )}
                  <a
                    href="#"
                    className=" capitalize ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    {i}
                  </a>
                </div>
              </li>
            </Fragment>
          ))}
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumb;

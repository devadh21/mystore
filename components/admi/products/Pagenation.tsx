"use client";
import { useRouter} from "next/navigation";

export default function Pagenation({
  searchParams,
}: {
  searchParams: {
    page: string | string[] | undefined;
    per_page: string | string[] | undefined;
  };
}) {
  const router = useRouter();
  const { page, per_page } = searchParams;
  const page_S = page ?? "1"; // if there is no param in url show the first page by default.
  const per_page_S = per_page ?? "5";

  return (   
       
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1-10
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1000
          </span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            {page_S !== "1" &&          <a
              // href="#"
              onClick={() => {
                router.push(`?page=${Number(page_S)-1}&per_page=${per_page_S}`);
              }}
              className="flex cursor-pointer items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>}
   
          </li>       
          <li>
            <a
                onClick={() => {
                  router.push(`?page=1&per_page=${per_page_S}`);
                }}
              className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
                  onClick={() => {
                    router.push(`?page=2&per_page=${per_page_S}`);
                  }}
              className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              // href="#"
              onClick={() => {
                router.push(`?page=${Number(page_S)+1}&per_page=${per_page_S}`);
              }}
              className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    
  );
}

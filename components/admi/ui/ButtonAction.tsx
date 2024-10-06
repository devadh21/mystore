import Spinner from "@/elements/Spinner";
import { useFormStatus } from "react-dom";

function ButtonAction({ title }: { title: string }) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button
          disabled
          type="submit"
          className=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          <div className="flex">
            <Spinner /> wait...
          </div>
        </button>
      ) : (
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {title}
        </button>
      )}
    </>
  );
}
export default ButtonAction;

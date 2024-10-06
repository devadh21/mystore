import Image from "next/image";
import ButtonLink from "@/elements/ButtonLink";

export default function About() {
  return (
    <section className="bg-white   " id="about_us">
      <div className="container    ">
        <div className="content-center px-4">
          <h1 className="text-secondary2 text-4xl  text-center font-bold pt-4">
            About Us
          </h1>
          <h2 className="text-center  text-secondary4 pb-4  capitalize font-bold ">
            Quality Specialty Honey Direct From The Honey Farm
          </h2>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            illum, quia minima perferendis veniam repudiandae sapiente eveniet
            illo quo sed. Laborum illo iste voluptatem magnam alias voluptate
            architecto exercitationem distinctio.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row px-4 py-8">
          {/* ************************************ left part ****************************** */}
          <div className="basis-1/3 py-4">
            <h4 className="text-secondary1 font-bold">
              Purveyors of the Finest Honey in the World
            </h4>
            <h2 className="py-4 text-3xl font-bold">
              It's a wonderful Time to Be a Beekeerper in.{" "}
            </h2>
            <div className="flex items-center pt-3">
              <svg
                className="w-3.5 h-3.5 me-2 text-secondary dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <p>
                <span className="text-secondary font-bold">Professional</span>{" "}
                Beekeepers.
              </p>
            </div>
            <div className="flex items-center pt-3">
              <svg
                className="w-3.5 h-3.5 me-2 text-secondary dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <p>
                <span className="text-secondary font-bold">Natural</span>{" "}
                Honey.
              </p>
            </div>
            <div className="flex items-center pt-3 mb-4">
              <svg
                className="w-3.5 h-3.5 me-2 text-secondary dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <p>
                <span className="text-secondary font-bold">Organic</span>{" "}
                 Honey.
              </p>
            </div>
            <ButtonLink label="Read More" bt_href="/" className="mt-12 " />
          </div>
          {/* ************************************ midle part ****************************** */}

          <div className="basis-1/3  flex justify-center">
            <Image
              src="/img/about-honey.png"
              alt="Me, standing in front of"
              height={284}
              width={376}
            />
          </div>
          {/* ************************************ right part ****************************** */}
          <div className="basis-1/3 px-4">
            <h2 className="text-2xl py-4">
              Useful properties{" "}
              <span className="text-secondary font-bold ">of honey</span>
            </h2>
            <div className="flex items-center pt-3">
              <svg
                className="w-3.5 h-3.5 me-2 text-secondary dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <p>
                <span className="text-secondary font-bold">regulates</span>{" "}
                metabolic processes.
              </p>
            </div>
            <div className="flex items-center pt-3">
              <svg
                className="w-3.5 h-3.5 me-2 text-secondary dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <p>
                <span className="text-secondary font-bold">honey</span> improves
                blood composition.
              </p>
            </div>
            <div className="flex items-center pt-3">
              <svg
                className="w-3.5 h-3.5 me-2 text-secondary dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <p>
                <span className="text-secondary font-bold">increases</span>{" "}
                immunity.
              </p>
            </div>
            <div className="flex items-center pt-3">
              <svg
                className="w-3.5 h-3.5 me-2 text-secondary dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <p>
                <span className="text-secondary font-bold">helps</span> to cope
                with insomnia.
              </p>
            </div>
            <div className="flex items-center pt-3">
              <svg
                className="w-3.5 h-3.5 me-2 text-secondary dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <p>
                gives <span className="text-secondary font-bold">energy</span>{" "}
                to the body, restores strength.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

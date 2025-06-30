"use client";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BorderBeam } from "@/components/magicui/border-beam";
export default function Home() {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-black">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="xl:text-6xl md:text-6xl font-bold  text-gray-900 sm:text-5xl text-4xl dark:text-white">
            Unleash Your Potential with{" "}
            <AuroraText>
              {" "}
              Thynk Tech{" "}
            </AuroraText>{" "}
            Store
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Our advanced technology is your strategic asset. Outperform and
            achieve unprecedented growth with data-driven insights and
            automation. Invest in your success.
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="relative inline-block text-md  text-gray-50 rounded-full border border-gray-200 px-5 py-2.5 font-bold  shadow-sm transition-colors bg-gradient-to-r from-blue-500 to-purple-500   hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 hover:bg-white"
              href="#"
            >
              Get Started
              <BorderBeam duration={6} size={30} />
            </a>

            <a
              className="relative inline-block text-md rounded-full border border-gray-200 px-5 py-2.5 font-bold text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-500"
              href="#"
            >
              Learn More
              <BorderBeam duration={6} size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

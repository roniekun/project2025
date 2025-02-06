
import { twMerge } from "tailwind-merge";
import Header from "./components/layout/Header";

export default function Home() {
  const buttonStyle = "border-none p-3 text-neutral-800 text-lg";
  return (
    <div className="gap-4 min-h-screen relative flex flex-col justify-start items-center text-neutral-200">
      <Header />
      <div className="px-[10vw] flex flex-col font-medium gap-4 z-10">
        <h2 className="md:text-6xl text-4xl font-bold text-balance text-center mt-56">
          Hire the best people <br /> you want to work with
        </h2>
        <p className="text-2xl text-center text-neutral-300">
          Find the perfect artist for your next project
        </p>
      </div>

      <div className="flex gap-2 ">
        <button className={twMerge(buttonStyle, "bg-violet-500")}>
          Get Started{" "}
        </button>
        <button className={twMerge(buttonStyle,"bg-zinc-300")}>Browse people</button>
      </div>
    </div>
  );
}

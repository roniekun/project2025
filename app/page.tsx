import Button from "@/components/common/ui/libs/Button";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const buttonStyle = "border-none p-3 text-neutral-800 text-lg";
  return (
    <div className="gap-4 min-h-screen relative flex flex-col justify-start items-center text-neutral-200">
      <div className="px-[10vw] flex flex-col font-medium gap-4 z-10">
        <h2 className="md:text-6xl text-4xl font-bold text-balance text-center mt-56">
          Hire the best people <br /> you want to work with
        </h2>
        <p className="text-2xl text-center text-neutral-300">
          Find the perfect artist for your next project
        </p>
      </div>

      <div className="flex z-10">
        <Button className={twMerge(buttonStyle,"bg-violet-500")}>Get Started </Button>
        <Button className={twMerge(buttonStyle)}>Browse people</Button>
      </div>

      <div className="w-full left-0 absolute top-0 z-0 h-4/5 lg:h-3/4 object-cover ">
        <Image
          alt="img"
          objectFit="cover"
          layout="fill"
          src="https://drive.google.com/uc?id=1FRIMQ8JYalF2J5xmZVznSB_3-8VDeD0V"
        />
      </div>
    </div>
  );
}

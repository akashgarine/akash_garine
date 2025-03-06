"use client"; 
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic"; 

// ✅ Dynamically import GradientBg.tsx with ssr: false
const BackgroundGradientAnimation = dynamic(
  () => import("./GradientBg").then((mod) => mod.default), // ✅ Explicitly access default export
  { ssr: false }
);

import Lottie from "react-lottie";
import { cn } from "@/utils/cn";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("pranavirao14@gmail.com");
    setCopied(true);
  };

  return (
    <div className={cn("row-span-1 relative overflow-hidden rounded-xl border border-white/[0.1]", className)}>
      {id === 6 && (
        <BackgroundGradientAnimation>
          {/* ✅ Now, children will be properly handled inside GradientBg.tsx */}
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            Gradient Background
          </div>
        </BackgroundGradientAnimation>
      )}
      <div className="p-5">
        <div className="text-[#C1C2D3]">{description}</div>
        <div className="text-lg lg:text-3xl max-w-96 font-bold">{title}</div>
        {id === 6 && (
          <div className="mt-5 relative">
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              handleClick={handleCopy}  
              position="left"
              otherClasses="!bg-[#161A31]"
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default BackgroundGradientAnimation; 
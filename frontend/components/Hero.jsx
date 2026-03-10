"use client";
import { Instrument_Serif } from "next/font/google";
import Container from "./Container";
import { RainbowButton } from "./ui/rainbow-button";
import { DM_Sans, Geist } from "next/font/google";
import { Safari } from "./ui/safari";
import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";
import ScrollReveal from "./TextReveal";
import ChoosePage from "./Choose";
const instrumentalSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const HeroPage = () => {
  return (
    <div className="py-35">
      <Container>
        <div className="flex flex-col items-center justify-center gap-6">
          <h1
            className={`  font-medium text-6xl  tracking-tighter text-center text-primary `}
          >
            Code into a beautiful image <br></br>{" "}
            <Highlighter action="underline" color="#FF9800">
              Ai-Powered Code{" "}
            </Highlighter>
            &nbsp;to<br></br>
            <span className={`${instrumentalSerif.className} text-7xl`}>
              "Image generator"
            </span>
          </h1>

          <p className="text-lg text-secondary text-center tracking-normal w-full max-w-xl">
            Transform your code into stunning visuals with our AI-powered code
            to image generator. Whether you're a developer, designer, or content
            creator, our tool allows you to effortlessly convert your code into
          </p>

          <RainbowButton
            size="lg"
            variant="default"
            className={`${dmSans.className} text-lg mt-3`}
          >
            Get Started
          </RainbowButton>

          <div className="py-14 w-300.75">
            <Safari
              url="magicui.design"
              imageSrc="https://placehold.co/1200x750?text=Hello+World"
            />
          </div>

          {/* Add textReveal component by urself if that does not work iterate with below */}
          {/* <div className="h-screen flex justify-center items-center">
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={3}
              blurStrength={5}
              staggerDelay={0.05}
              containerClassName="text-center leading-[3rem]"
              textClassName="max-w-2xl mx-auto block"
            >
              Simplicity, performance, and security, empowering you to navigate
              the digital world with confidence and agility.
            </ScrollReveal>
          </div> */}
          <p className="py-18 mt-6  text-primary text-center tracking-tighter leading-13 max-w-4xl text-5xl font-medium ">
            Simplicity, performance, and security,<br></br> empowering you to navigate
            the digital <br></br>world with confidence and agility.
          </p>
        </div>
        <div>
          <ChoosePage />
        </div>
      </Container>
    </div>
  );
};
export default HeroPage;

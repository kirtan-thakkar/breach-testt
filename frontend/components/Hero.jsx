"use client";
import { Instrument_Serif } from "next/font/google";
import Container from "./Container";
import { RainbowButton } from "./ui/rainbow-button";
import { DM_Sans, Geist } from "next/font/google";
import { Safari } from "./ui/safari";
import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";
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
        <div className="container flex flex-col items-center justify-center gap-6">
          <h1
            className={`  font-medium text-6xl  tracking-tighter text-center bg-clip-text text-primary `}
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

          <p className="text-secondary text-center tracking-normal w-full max-w-xl">
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
          <div className="w-[1203px]">
            <Safari
              url="magicui.design"
              imageSrc="https://placehold.co/1200x750?text=Hello+World"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default HeroPage;

"use client";
import { Instrument_Serif } from "next/font/google";
import Container from "./Container";
import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";
const instrumentalSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroPage = () => {
  return (
    <div className="py-35">
      <Container>
        <div className="container flex flex-col items-center justify-center gap-6">
          <h1
            className={`  font-medium text-6xl  tracking-tighter text-center bg-clip-text text-primary `}
          >
            Convert your code into a beautiful image <br></br>
            using our{" "}
            <Highlighter action="underline" color="#FF9800">
              Ai-Powered Code{" "}
            </Highlighter>
            &nbsp;to<br></br>
            <span className={`${instrumentalSerif.className} text-7xl`}>
              "Image generator"
            </span>
          </h1>
          <Image
            src="/hero.jpg"
            width={200}
            height={200}
            alt="code to image"
            className="object-cover size-full rounded-xl"
          />
        </div>
      </Container>
    </div>
  );
};
export default HeroPage;

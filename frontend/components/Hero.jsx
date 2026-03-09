import { Instrument_Serif } from "next/font/google";
import Container from "./Container";


const instrumentalSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroPage = () => {
  return (
    <div className="py-35">
      <Container>
        <h1 className={` text-neutral-700 font-medium text-5xl  tracking-tight text-center`}>
          Convert your code into a beautiful image <br></br>
          using our Ai-Powered Code to <br></br>
          <span className={`${instrumentalSerif.className} text-7xl`}>
            Image generator
          </span>
        </h1>
      </Container>
    </div>
  );
};
export default HeroPage;

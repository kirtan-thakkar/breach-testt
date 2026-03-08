import Image from "next/image";
import Navabr from "../components/Navbar";
import Container from "@/components/Container";
import HeroPage from "@/components/Hero";
export default function Home() {
  return (
    <Container>
      <section>
      <Navabr />
      <HeroPage />
    </section>  
    </Container>
  );
}

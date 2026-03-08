import Image from "next/image";
import Navbar from "../components/Navbar";
import Container from "@/components/Container";
import HeroPage from "@/components/Hero";

export default function Home() {
  return (
    <Container>
      <section>
        <Navbar />
        <HeroPage />
      </section>
    </Container>
  );
}

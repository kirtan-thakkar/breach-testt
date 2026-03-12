import Image from "next/image";
import Navbar from "../components/Navbar";
import Container from "@/components/Container";
import HeroPage from "@/components/Hero";

export default function Home() {
  return (
    <Container>
      <section className="sticky z-100 top-4 backdrop-blur-md ">
        <Navbar />
      </section>
      <section>
        <HeroPage />
      </section>
    </Container>
  );
}

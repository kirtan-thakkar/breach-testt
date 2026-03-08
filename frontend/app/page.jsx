import Image from "next/image";
import Navabr from "../components/Navbar";
import Container from "@/components/Container";
export default function Home() {
  return (
    <Container>
      <section>
      <Navabr />
      <div className="py-12 text-center w-full h-screen">
        <h1 className="text-primary text-4xl tracking-tight font-medium">Home Page</h1>
        
      </div>
    </section>  
    </Container>
  );
}

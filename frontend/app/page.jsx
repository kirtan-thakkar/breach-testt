import Image from "next/image";
import Navabr from "../components/Navbar";
export default function Home() {
  return (
    <section>
      <Navabr />
      <div className="py-12px-12 h-screen">
        <h1 className="text-primary text-4xl tracking-tight font-medium">home Page</h1>
        
      </div>
    </section>
  );
}

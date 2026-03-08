import Link from "next/link";

const { default: Container } = require("./Container");

const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className="flex justify-between items-center py-8 px-6 rounded-lg shadow-aceternity">
          <Link href="/" className="text-primary cursor-pointer"> Logo</Link>
          <div className="flex justify-evenly items-center gap-4">
            <Link href="/login" className="text-primary cursor-pointer">Login</Link>
            <h3 className="text-primary cursor-pointer">Link2</h3>
            <h3 className="text-primary cursor-pointer">Link3</h3>
            <h3 className="text-primary cursor-pointer">Link4</h3>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
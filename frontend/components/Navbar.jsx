const { default: Container } = require("./Container");

const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className="flex justify-between items-center py-10 px-4">
          <h1 className="text-primary cursor-pointer"> Logo</h1>
          <div className="flex justify-evenly items-center gap-4">
            <h3 className="text-primary cursor-pointer">Link1</h3>
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
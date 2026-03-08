import Container from "./Container";

const Navbar = ()=>{
    return(
        <div className="">
            <Container >
            <div className="py-10 flex justify-between items-center">
                <h1 className="text-primary">Logo</h1>
                <div className="flex justify-evenly gap-4">
                    <h2>Link1</h2>
                    <h2>Link2</h2>
                    <h2>Link3</h2>

                </div>
                
            </div>
        </Container>

        </div>
        
    )
}
export default Navbar;
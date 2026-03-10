import Container from "./Container";

const ChoosePage = ()=>{
    return(
        <div>
            <Container>
                <div className="py-30 h-screen flex flex-col items-center gap-4">
                    <div>
                        <h1 className="text-primary tracking-tighter  text-5xl font-medium">Why Choose App-Name?</h1>
                    </div>
                    <div >
                        <p className="text-md text-secondary font-medium text-center">Benefits designed to provide a seamless,<br></br> secure, and accessible experience for all users.</p>
                    </div>

                </div>
            </Container>
        </div>
    )
}
export default ChoosePage;
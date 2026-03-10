import Container from "./Container";

const ChoosePage = ()=>{
    const whyChooseGrid = [
        {
            img:"IconHome",
            title:"Maximum Security",
            description:"Your assets are protected with cutting-edge security protocols."
        },
        {
            img:"IconBolt",
            title:"Instant Transactions",
            description:"Execute your transactions in real-time, without delays."
        },
        {
            title:"Optimized Fees",
            description:"Benefit from some of the lowest fees on the market."
        },
        {
            title:"Premium Interface ",
            description:"An intuitive design that’s easy to use, even for beginners."
        }
    ]
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

                    <div className="h-56 grid grid-cols-1 w-full md:grid-cols-4 gap-5    mt-10">
                        <div className="bg-gray-300 w-full">
                            <div className="flex flex-col items-start gap-4">
                                <div className="rounded-[50%] bg-red-400 size-20"></div>
                                <div className="flex flex-col items-start gap-2">
                                    <h4>Maximum Security</h4>
                                    <p>Your assets are protected with cutting-edge security protocols.</p>

                                </div>

                            </div>
                        </div>
                        <div className="bg-red-500 w-full">world</div>
                        <div className="bg-red-500 w-full">!   </div>
                        <div className="bg-red-500 w-full">!   </div>

                    </div>

                </div>
            </Container>
        </div>
    )
}
export default ChoosePage;
import { Badge } from "./ui/badge"
import Navbar from './shared/Navbar'
import { Button } from "./ui/button"

function JobDescription() {
    
    const isApplied = false;
    
   return (
       <>
            <Navbar />
            
        <div className="mx-5">
            
        {/* //~`--------------------------- ---------------------------------------------------- */}
        
            <div className="mx-auto mt-5 bg-white border border-gray-300 shadow shadow-2xl max-w-7xl p-7 rounded-2xl sm:px-6 lg:px-8">
                
        {/* //&`--------------------------- ---------------------------------------------------- */}
        
                <div className='flex items-center justify-between'> 
                    <div>
                        <h1 className="text-2xl font-bold ">Fronted Developer</h1>
                        <div className="flex items-center gap-2 mt-5 shadow shadow-2xl cursor-pointer">
                            <Badge className={"mr-2 text-blue-800 shadow shadow-2xl bg-gray-300"} variant="ghost">12 Position</Badge>
                            <Badge className={"mr-2 text-red-800 shadow shadow-lg bg-gray-300"} variant="solid">Full Time</Badge>
                            <Badge className={"mr-2 text-yellow-800 shadow shadow-lg bg-gray-300"} variant="ghost">12LPA</Badge>
                        </div>
                    </div>
                    
                    <Button disabled={isApplied} className={`rounded-bg ${isApplied ? `bg-blue-800 text-white cursor-not-allowed hover:bg-blue-900` : ` bg-violet-600 text-white	hover:bg-violet-700`}` } variant="outline-none"> 
                        {
                            isApplied ? "All ready Applied" : "Apply Now"
                        } 
                    </Button>
                </div>
                
        {/* //&`--------------------------- ---------------------------------------------------- */}

                <div className="mt-5">
                    <h1 className="my-5 text-xl font-bold border-b-2 border-gray-300 text-zinc-800">Job Description</h1>
                    <div>
                        <h1 className="my-1 font-bold">Role: <span className="pl-1 font-normal text-gray-800">Web Developer</span></h1>
                        <h1 className="my-1 font-bold">Location: <span className="pl-1 font-normal text-gray-800">Pune</span></h1>
                        <h1 className="my-1 font-bold">Description: <span className="pl-1 font-normal text-gray-800">Lorem ipsum dolor sit amet</span></h1>
                        <h1 className="my-1 font-bold">Experience: <span className="pl-1 font-normal text-gray-800">2 Years</span></h1>
                        <h1 className="my-1 font-bold">Salary: <span className="pl-1 font-normal text-gray-800">50k - 70k</span></h1>
                        <h1 className="my-1 font-bold">Total: <span className="pl-1 font-normal text-gray-800">5</span></h1>
                        <h1 className="my-1 font-bold">Posted Date: <span className="pl-1 font-normal text-gray-800">25-02-2022</span></h1>
                    </div>
                </div>       
                
        {/* //&`--------------------------- ---------------------------------------------------- */}
        
            </div>

        {/* //~`--------------------------- ---------------------------------------------------- */}

        </div>
       </>
    )
}

export default JobDescription;
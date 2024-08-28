import { Badge } from "./ui/badge"
import Navbar from './shared/Navbar'
import { Button } from "./ui/button"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/API";
import { setSingleJob } from "@/redux/jobSlice";

function JobDescription() {
    
    const isApplied = false;
    const params = useParams();
    const jobId = params.id;
    const {singleJob} = useSelector((store) => store.job);
    const {user} = useSelector((store) => store.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchSingleJob = async () => {
            try{
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}` , {
                    withCredentials: true
                });

                if(res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                }
            }catch(error){
                console.log(error)
            }
            
        }
        
        fetchSingleJob();
    }, [jobId , dispatch , user?._id]);

    
   return (
       <>
            <Navbar />
            
        <div className="mx-5">
            
        {/* //~`--------------------------- ---------------------------------------------------- */}
        
            <div className="mx-auto mt-5 bg-white border border-gray-300 shadow shadow-2xl max-w-7xl p-7 rounded-2xl sm:px-6 lg:px-8">
                
        {/* //&`--------------------------- ---------------------------------------------------- */}
        
                <div className='flex items-center justify-between'> 
                    <div>
                        <h1 className="text-2xl font-bold "> {singleJob?.title} </h1>
                        <div className="flex items-center gap-2 mt-5 shadow shadow-2xl cursor-pointer">
                            <Badge className={"mr-2 text-blue-800 shadow shadow-2xl bg-gray-300"} variant="ghost"> {singleJob?.position} Position</Badge>
                            <Badge className={"mr-2 text-red-800 shadow shadow-lg bg-gray-300"} variant="solid"> {singleJob?.jobType} </Badge>
                            <Badge className={"mr-2 text-yellow-800 shadow shadow-lg bg-gray-300"} variant="ghost">{singleJob?.salary} LPA</Badge>
                        </div>
                    </div>
                    
                    <div className="">
                        <Button disabled={isApplied} className={`rounded-bg ${isApplied ? `bg-blue-800 text-white cursor-not-allowed hover:bg-blue-900` : ` bg-violet-600 text-white	hover:bg-violet-700`}` } variant="outline-none"> 
                            {
                                isApplied ? "All ready Applied" : "Apply Now"
                            } 
                        </Button>
                    </div>
                </div>
                
        {/* //&`--------------------------- ---------------------------------------------------- */}

                <div className="mt-5">
                    <h1 className="my-5 text-xl font-bold border-b-2 border-gray-300 text-zinc-800">Job Description</h1>
                    <div>
                        <h1 className="my-1 font-bold">Role: <span className="pl-1 font-normal text-gray-800"> { singleJob?.title } </span></h1>
                        <h1 className="my-1 font-bold">Location: <span className="pl-1 font-normal text-gray-800"> { singleJob?.location } </span></h1>
                        <h1 className="my-1 font-bold">Description: <span className="pl-1 font-normal text-gray-800"> { singleJob?.description }</span></h1>
                        <h1 className="my-1 font-bold">Experience: <span className="pl-1 font-normal text-gray-800"> {singleJob?.experience} Years</span></h1>
                        <h1 className="my-1 font-bold">Salary: <span className="pl-1 font-normal text-gray-800"> {singleJob?.salary} LPA </span></h1>
                        <h1 className="my-1 font-bold">Total Application: <span className="pl-1 font-normal text-gray-800"> {singleJob?.application?.length} </span></h1>
                        <h1 className="my-1 font-bold">Posted Date: <span className="pl-1 font-normal text-gray-800"> {singleJob?.createdAt.split("T")[0]} </span></h1>
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
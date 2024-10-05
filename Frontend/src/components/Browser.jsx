import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar"
import { useEffect } from "react";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

//&------------------------------------------------------------------------------------------

// const randomJobs = [ 1,2,3,4,5,6,7,8,9,10,11,12];

//&------------------------------------------------------------------------------------------
function Browser() {

    useGetAllJobs();
    const {allJobs} = useSelector((store) => store.job);
    const dispatch = useDispatch();
    
    useEffect(() => {
       return () => {
           dispatch(setSearchedQuery(""));
       }
    })
    
  return (  
        <>
            <Navbar />

            <div className="mx-auto my-10 max-w-7xl sm:px-6 lg:px-8 ">
                <h1 className="text-lg font-bold text-zinc-800">Search Results ({allJobs.length })</h1>
                
                <div className="grid grid-cols-1 gap-4 my-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">      
                    {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job} />
                            )
                        })
                    }
                </div>
                
            </div>
            
    {/* //&---------------------------Footer-------------------------------- */}
            <div className="px-6 mx-auto my-[100px] max-w-8xl sm lg:px-8 ">   
                 <Footer />
            </div>       
        </>
    )
}

export default Browser
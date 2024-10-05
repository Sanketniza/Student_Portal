
import { useSelector } from "react-redux";
import LatestJobCards from "./LatestJobCards"
import { useNavigate } from "react-router-dom";
//&------------------------------------------------------------------------------------------

// const randomJobs = [ 1,2,3,4,5,6];

function LatestJobs() {

    const {allJobs} = useSelector((store) => store.job);
    const navigate = useNavigate();
  return (
        <>
            <div className="px-4 mx-auto my-20 max-w-7xl sm:px-6 lg:px-8">  {/*   text-center */}

                <h1 className="text-4xl font-bold text-zinc-800">
                    <span className="text-indigo-800">Latest & Top </span> Jobs Openings
                </h1>
                    
                <div className="grid grid-cols-1 gap-4 my-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {
                        allJobs.length <= 0 ? 
                        <h1>No Jobs Found</h1> 
                        : allJobs.slice(0 ,12).map((item) => (
                            <LatestJobCards  key={item._id} item={item}/>
                        ))
                    }
                </div>    

            </div>
        </>
    )
};

export default LatestJobs;
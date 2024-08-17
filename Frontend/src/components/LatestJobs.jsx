
import LatestJobCards from "./LatestJobCards"
//&------------------------------------------------------------------------------------------

const randomJobs = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14];

function LatestJobs() {
  return (
        <>
            <div className="max-w-7xl mx-auto px-4 my-20 sm:px-6 lg:px-8">  {/*   text-center */}

                <h1 className="text-4xl font-bold text-zinc-800">
                    <span className="text-indigo-800">Latest & Top </span> Jobs Openings
                </h1>
                    
                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-10">
                    {
                        randomJobs.slice(0 ,12).map((item) => (
                            <LatestJobCards key={item} />
                        ))
                    }
                </div>    

            </div>
        </>
    )
}

export default LatestJobs
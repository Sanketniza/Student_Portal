import FilterCard from "./FilterCard"
import Job from "./Job"
import Navbar from "./shared/Navbar"


//&------------------------------------------------------------------------------------------

const jobArray = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9];

//&------------------------------------------------------------------------------------------

function Jobs() {
  return (
        
        <>
             <Navbar />  

             <div className="mx-auto mt-5 max-w-7xl sm:px-6 lg:px-8">
                <div className="flex gap-4">
                    
                    <div className="w-[20%]">   
                        <FilterCard />
                    </div>
                    
                    <div className="w-[80%]">
                        {
                            jobArray.length <= 0 ? <h1>No Jobs Found</h1> : 
                                (
                                    <div className="flex-1 h-[80vh] overflow-y-auto pb-5">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:grid-mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                                            {
                                                jobArray.map((item, index) => (
                                                    <Job key={index} item={item} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                )
                        } 
                    </div>
    
                </div>
             </div>
        </>
    )
}

export default Jobs
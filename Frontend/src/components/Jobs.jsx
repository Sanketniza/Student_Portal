import { useEffect, useState } from "react";
import FilterCard from "./FilterCard"
import Job from "./Job"
import Navbar from "./shared/Navbar"
import { useSelector } from "react-redux";
import {motion} from 'framer-motion'


//&------------------------------------------------------------------------------------------

// const jobArray = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9];

//&------------------------------------------------------------------------------------------

function Jobs() {

    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase())
            })
            setFilterJobs(filteredJobs)
        } else {
            setFilterJobs(allJobs)
        }
    }, [allJobs, searchedQuery]);

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
                            filterJobs.length <= 0 ? <h1>No Jobs Found</h1> : 
                                (
                                    <div className="flex-1 h-[80vh] overflow-y-auto pb-5">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:grid-mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                                            {
                                                filterJobs.map((job) => (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: 100 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -100 }}
                                                        transition={{ duration: 0.5}}

                                                        key={job?._id} 
                                                    >
                                                            <Job job={job} />
                                                    </motion.div>
                                                    // <Job key={job} item={job} />
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
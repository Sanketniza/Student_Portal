import Navbar from "./shared/Navbar"

//&------------------------------------------------------------------------------------------

const randomJobs = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14];

//&------------------------------------------------------------------------------------------
function Browser() {
  return (  
        <>
            <Navbar />

            <div className="mx-auto my-10 max-w-7xl sm:px-6 lg:px-8 ">
                <h1 className="text-lg font-bold text-zinc-800">Search Results ({randomJobs.length})</h1>
            </div>
        </>
    )
}

export default Browser
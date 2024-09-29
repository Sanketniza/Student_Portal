
import PropTypes from 'prop-types';
import { Button } from "./ui/button"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { Badge } from "./ui/badge"
import { Bookmark } from "lucide-react"
import { useNavigate } from "react-router-dom"

// &-----------------------------------------------------------------------------------------------


function Job({job}) {

    const navigate = useNavigate();
    // const jobId = "asdjktjej4jkv3k43";

    const daysAgoFunction = (mongodbTime) => {
        // console.log(mongodbTime);
        const createAt = new Date(mongodbTime);
        const currentTIme = new Date();
        const diff = currentTIme - createAt;
        return Math.floor(diff / (1000 * 24* 60 * 60 ));
         
    }
    


  return (
        <>
            <div className="p-4 border border-gray-300 rounded-lg shadow shadow-2xl">
                
                <div className="flex items-center justify-between">
                    <p> { daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago `}  </p>
                    <Button variant="outline" className="bg-gray-300 rounded-full" size="icon"> <Bookmark/> </Button>
                </div>
    
                <div className="flex items-center gap-2">
                     <Button variant="outline" className="rounded-full bg-gray-00" size="icon">
                         <Avatar className="bg-gray-300 cursor-pointer">
                             <AvatarImage src={job?.company?.logo} alt="@shadcn" />
                         </Avatar>
                     </Button>

                     <div className="">
                        <h1 className="text-xl font-bold text-zinc-800"> {job?.company?.name}</h1>
                        <p className="text-sm">India</p>
                     </div>
                </div>

                <div className="my-2">
                    <h1 className="text-xl font-medium text-zinc-800"> {job?.title}</h1>
                    <p className="pt-3 pl-2 text-sm"> {job?.description} </p>
                </div>
           

                <div className="flex items-center gap-2 mt-5 shadow shadow-2xl cursor-pointer">
                    <Badge className={"mr-2 text-blue-800 shadow shadow-2xl bg-gray-300"} variant="ghost"> {job?.position} Position</Badge>
                    <Badge className={"mr-2 text-red-800 shadow shadow-lg bg-gray-300"} variant="solid"> {job?.jobType}</Badge>
                    <Badge className={"mr-2 text-yellow-800 shadow shadow-lg bg-gray-300"} variant="ghost"> {job?.salary} LPA</Badge>
                </div>

                <div className="flex items-center gap-4 ">
                    <Button onClick={() => navigate(`/description/${job?._id} `)} variant="outline" className="mt-5 bg-red-500 hover:bg-white hover:text-red-500">Details</Button>
                    <Button className="mt-5 bg-blue-500 ">Save for Later</Button>
                </div>
                
                
            </div>
        </>
    )
};

Job.propTypes = {
    job: PropTypes.object.isRequired, // Specify the type and make it required
  };

export default Job
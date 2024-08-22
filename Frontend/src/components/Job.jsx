import { Button } from "./ui/button"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { Badge } from "./ui/badge"
import { Bookmark } from "lucide-react"
import { useNavigate } from "react-router-dom"

// &-----------------------------------------------------------------------------------------------


function Job() {

    const navigate = useNavigate();
    const jobId = "asdjktjej4jkv3k43";
  return (
        <>
            <div className="p-4 border border-gray-300 rounded-lg shadow shadow-2xl">
                
                <div className="flex items-center justify-between">
                    <p>2 days ago</p>
                    <Button variant="outline" className="bg-gray-300 rounded-full" size="icon"> <Bookmark/> </Button>
                </div>
    
                <div className="flex items-center gap-2">
                     <Button variant="outline" className="rounded-full bg-gray-00" size="icon">
                         <Avatar className="bg-gray-300 cursor-pointer">
                             <AvatarImage src="https://i.pinimg.com/564x/80/4e/51/804e518f3feec6345be49df95fac5bff.jpg" alt="@shadcn" />
                         </Avatar>
                     </Button>

                     <div className="">
                        <h1 className="text-xl font-bold text-zinc-800">Amazon</h1>
                        <p className="text-sm">India</p>
                     </div>
                </div>

                <div className="my-2">
                    <h1 className="text-xl font-medium text-zinc-800">Job Title</h1>
                    <p className="pt-3 pl-2 text-sm">Lorem ipsum dolor sit amet sanket talekar is my name and i am a web developer </p>
                </div>
           

                <div className="flex items-center gap-2 mt-5 shadow shadow-2xl cursor-pointer">
                    <Badge className={"mr-2 text-blue-800 shadow shadow-2xl bg-gray-300"} variant="ghost">12 Position</Badge>
                    <Badge className={"mr-2 text-red-800 shadow shadow-lg bg-gray-300"} variant="solid">Full Time</Badge>
                    <Badge className={"mr-2 text-yellow-800 shadow shadow-lg bg-gray-300"} variant="ghost">12LPA</Badge>
                </div>

                <div className="flex items-center gap-4 ">
                    <Button onClick={() => navigate(`/description/${jobId} `)} variant="outline" className="mt-5 bg-red-500 hover:bg-white hover:text-red-500">Details</Button>
                    <Button className="mt-5 bg-blue-500 ">Save for Later</Button>
                </div>
                
                
            </div>
        </>
    )
}

export default Job

//&------------------------------------------------------------------------------------------

import { Search } from "lucide-react";
import { Button } from "./ui/button";

//&------------------------------------------------------------------------------------------

function HeroSection() {
  return (
        <>
            <div className="text-center">

                <div className="flex flex-col gap-5 my-10">
                    <span className="mx-auto py-2 px-4 rounded-full bg-gray-200 text-red-800 font-medium ">No.1 Job Hunt Website</span>
                    <h1 className="text-3xl font-bold text-zinc-800 py-2">Search , Apply & <br /> Get Your <span className="text-indigo-800"> Dream Job</span> </h1>
                    <p className="mx-auto">Lorem ipsum dolor sit amet, consectetur.ad  ex sed rem </p>

                    <div className="flex w-[40%] shadow-lg border border-gray-500 rounded-full mx-auto" >
                        <input type="text" 
                        placeholder="Search Jobs" 
                        className="w-[100%] py-2 px-4 border-2 border-gray-500 rounded-l-full"/>
                        
                        <Button className="bg-indigo-800 rounded-r-full h-[46px] ">
                            <Search className="" />
                        </Button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default HeroSection;
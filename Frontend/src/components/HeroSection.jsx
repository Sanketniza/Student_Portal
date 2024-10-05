
//&------------------------------------------------------------------------------------------

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

//&------------------------------------------------------------------------------------------

function HeroSection() {
    
    const [query , setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        
        dispatch(setSearchedQuery(query));

        navigate("/browser");
        
    }
    
    
  return (
        <>
            <div className="text-center">

                <div className="flex flex-col gap-5 my-10">
                    <span className="px-4 py-2 mx-auto font-medium text-red-800 bg-gray-200 rounded-full ">No.1 Job Hunt Website</span>
                    <h1 className="py-2 text-3xl font-bold text-zinc-800">Search , Apply & <br /> Get Your <span className="text-indigo-800"> Dream Job</span> </h1>
                    <p className="mx-auto">Lorem ipsum dolor sit amet, consectetur.ad  ex sed rem </p>

                    <div className="flex w-[40%] shadow-lg border border-gray-500 rounded-full mx-auto" >
                        
                        <input 
                            type="text" 
                            placeholder="Search Jobs" 
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-[100%] py-2 px-4 border-2 border-gray-500 rounded-l-full"
                        />
                        
                        <Button onClick={searchJobHandler} className="bg-indigo-800 rounded-r-full h-[46px] ">
                            <Search className="" />
                        </Button>
                        
                    </div>

                </div>

            </div>
        </>
    )
}

export default HeroSection;
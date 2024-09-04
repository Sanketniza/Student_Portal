import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CompaniesTable from "./CompaniesTable";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/redux/companySlice";


function Companies() {

    useGetAllCompanies();
    const [input , setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setSearchCompanyByText(input));
    });
    
  return (
       <>
            <Navbar />

            <div className="max-w-4xl mx-auto my-10 sm:px-6 lg:px-8 ">
     
     {/* //&------------------------------------------------------------------------------------------ */}
     
                <div className="flex items-center justify-between gap-4 mx-5">
                    <Input
                        className="border-2 rounded shadow shadow-xl outline-none border-zinc-400 w-fit"
                        placeholder="filter by name"
                        onChange={(e)=>setInput(e.target.value)}
                    />
                    <Button onClick={() => navigate("/admin/companies/create")} > New Company </Button>
                </div>
                
            {/* //?------------------------------------------------------------------------------------------ */}
            
                <div className="mx-5 my-5">
                    <CompaniesTable/>
                </div>
                
            {/* //?------------------------------------------------------------------------------------------ */}
            
      {/* //&------------------------------------------------------------------------------------------ */}          
      
            </div>
            
       </>
    )
}

export default Companies;
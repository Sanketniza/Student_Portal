import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CompaniesTable from "./CompaniesTable";


function Companies() {

    const navigate = useNavigate();
    
  return (
       <>
            <Navbar />

            <div className="max-w-6xl mx-auto my-10 sm:px-6 lg:px-8 ">
     
     {/* //&------------------------------------------------------------------------------------------ */}
     
                <div className="flex items-center justify-between gap-4 mx-5">
                    <Input
                        className="border-2 rounded shadow shadow-xl outline-none border-zinc-400 w-fit"
                        placeholder="filter by name"
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
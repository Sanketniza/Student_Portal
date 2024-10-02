import { useNavigate } from "react-router-dom"
import Navbar from "../shared/Navbar"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import axios from "axios"
import { COMPANY_API_END_POINT } from "@/utils/API"
import { useState } from "react"
import { toast } from "sonner"
import { useDispatch } from "react-redux"
import { setSingleCompany } from "@/redux/companySlice"

function CompanyCreate() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [companyName , setCompanyName] = useState();

    const registerNewCompany = async() => {
        
        try{ 
            
           const res = await axios.post(`${COMPANY_API_END_POINT}/register` , { companyName} , {
               headers: {
                   "Content-Type": "application/json"
                },
                withCredentials: true
            });

            console.log(res.data);
            console.log("sanket ",res.data);
            

            if(res?.data?.success) {
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            };
           
        }catch(e){
            console.log("error is found at post job page frontend side");
            toast.error("error is found at post job page frontend side");
            toast.error(e.response.data.message);
            console.log(e.message);
        }
    };
    
  return (
        <>
            <Navbar/>

            <div className="max-w-2xl mx-auto my-10 sm:px-6 lg:px-8 ">
    {/*//?------------------------------------------------------------------------------------------  */}

                <div className="">
                    
                    <div className="mx-5 my-5">
                        <h1 className="text-3xl font-bold"> Your Company Name </h1>
                        <p className="text-sm"> what would you like to give your company name ? you can change this name later</p>
                    </div>
                    
                    <div className="mx-5 my-5">
                        <Label> Company Name </Label>
                        <Input
                            type="text"
                            className="w-full my-3 border-2 rounded shadow shadow-xl"
                            placeholder="Student_Hub , Google , Microsoft , etc"
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <Button onClick={() => navigate("/admin/companies")} className="mx-5 space-x-3 text-white bg-red-500 hover:bg-red-600" variant="outline-secondary"> Cancel </Button>
                        <Button onClick={registerNewCompany} variant="" > Continue </Button>
                    </div>
                </div>
                
    {/*//?------------------------------------------------------------------------------------------  */}
            </div>

        </>
    )
}

export default CompanyCreate
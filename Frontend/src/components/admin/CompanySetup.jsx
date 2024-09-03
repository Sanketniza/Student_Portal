
import { ArrowLeft, Loader2 } from "lucide-react"
import Navbar from "../shared/Navbar"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import axios from "axios"
import { COMPANY_API_END_POINT } from "@/utils/API"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

{/* //*------------------------------------------------------------------------------------------ */}


function CompanySetup() {

    const [input , setInput] = useState({
        name:"",
        description:"",
        website:"",
        location:"",
        file:null
    });

    const {singleCompany} = useSelector((store) => store.company);

    const changeEventHandler = (e) => {
        setInput({
            ...input, [e.target.name]: e.target.value
        })
    }

    const changeFileHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({...input, file});
    }

    const [loading , setLoading] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("description", input.description);
        formData.append("website", input.website);
        formData.append("location", input.location);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            setLoading(true);
            const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/companies");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setInput({
            name: singleCompany.name || "",
            description: singleCompany.description || "",
            website: singleCompany.website || "",
            location: singleCompany.location || "",
            file: singleCompany.file || null,
        })

    }, [singleCompany]);

  return (
        <>
           <Navbar/>

           <div className="max-w-2xl mx-auto my-10 sm:px-6 lg:px-8 ">
              
{/* //?------------------------------------------------------------------------------------------ */}

                    <form onSubmit={submitHandler}>

                {/* //&------------------------------------------------------------------------------------------ */}

                        <div className="flex items-center gap-10 pointer-cursor ">
                            <div className="rounded shadow shadow-xl border-5 border-zinc-800">
                                <Button onClick={() => navigate("/admin/companies")} variant="outline" className="flex items-center gap-1 font-semibold hover:bg-zinc-300 outline outline-offset-2 outline-1">
                                    <ArrowLeft/>
                                    <span>Back</span>
                                </Button>
                            </div>

                            <h1 className="text-xl font-bold">Company Setup</h1>
                        </div>

                {/* //&------------------------------------------------------------------------------------------ */}

                      <div className="grid grid-cols-2 gap-10 mx-5 my-10"> 
                        <div>
                            <Label className="mt-5"> Company Name </Label>
                            <Input
                                type="text"
                                className="w-full my-3 rounded shadow shadow-xl outline-none outline outline-offset-2 outline-1"
                                name="name"
                                value={input.name}
                                onChange={changeEventHandler}
                                placeholder="Company Name"
                            />
                        </div>

                        <div>
                            <Label className="mt-5"> Description</Label>
                            <Input
                                type="text"
                                className="w-full my-3 rounded shadow shadow-xl outline outline-offset-2 outline-1 "
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                placeholder="Company description"
                            />
                        </div>

                        <div>
                            <Label className="mt-5"> Website </Label>
                            <Input
                                type="text"
                                className="w-full my-3 rounded shadow shadow-xl outline outline-offset-2 outline-1"
                                name="website"
                                value={input.website}
                                onChange={changeEventHandler}
                                placeholder="Company website"
                            />
                        </div>

                        <div>
                            <Label className="mt-5"> Location </Label>
                            <Input
                                type="text"
                                className="w-full my-3 rounded shadow shadow-xl outline outline-offset-2 outline-1"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                placeholder="Company location"
                            />
                        </div>

                        <div>
                            <Label className="mt-5"> Logo </Label>
                            <Input
                                type="file"
                                accept="image/*"
                                className="w-full my-3 rounded shadow shadow-xl outline outline-offset-2 outline-1"
                                onChange={changeFileHandler}
                            />
                        </div>
                      </div>

                      <div>
                      {
							loading ? <Button className="w-full mt-5"> <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Please Wait </Button> : 
							 <Button type="submit" variant="destructive" className="w-full mt-5"> Update </Button>
						 }
                      </div>

                    </form>

{/* //?------------------------------------------------------------------------------------------ */}
              
           </div>
        </>
    )
}

export default CompanySetup
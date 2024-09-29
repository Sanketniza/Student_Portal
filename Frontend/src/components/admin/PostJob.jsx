import { Label } from "@radix-ui/react-label"
import Navbar from "../shared/Navbar"
import { Input } from "../ui/Input"
import { useState } from "react";
import { Button } from "../ui/button";
import { JOB_API_END_POINT } from "@/utils/API";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Loader2 } from "lucide-react";

const companyArray = [];
function PostJob() {

    const [input , setInput] = useState({
        title: "",
        description: "",
        location: "",
        salary: "",
        requirements: "",
        jobType: "",
        experience: "",
        position:0,
        companyId: "",
    });

    const navigate = useNavigate();

    const [loading , setLoading] = useState(false);
    const {companies} = useSelector(store => store.company);

    const SubmitHandle = async (e) => {
        e.preventDefault();
        try{
            setLoading(true);
            const res = await axios.post(`${JOB_API_END_POINT}/post` , input , {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });

            if(res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/jobs");
            }

        }catch(error) {
            console.log("error is found at post job page frontend side");
            toast.error(error.response.data.message);
            console.log(error);
        }finally {
            setLoading(false);
        }
    };


    const selectChangeHandler = (value) => {
        
        const selectedCompany = companies.find((company) => company.name.toLowerCase() === value);
        setInput({
            ...input, companyId: selectedCompany._id
        });
    };

    const changeEventHandler = (e) => {
        setInput({
            ...input, [e.target.name]: e.target.value
        });
    };


  return (
        <>
            <Navbar />

            <div className="flex items-center justify-center w-screen my-5">
                <form onSubmit={SubmitHandle} className="max-w-4xl p-8 border border-gray-300 rounded-lg shadow shadow-2xl ">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:grid-mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">

                        <div>
                            <Label>Title</Label>
                            <Input 
                                type="text"
                                name="title"
                                value={input.title}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2 border border-slate-900"
                                placeholder="Title"
                            />
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Input 
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2 border border-slate-900"
                                placeholder="description"
                            />
                        </div>
                        <div>
                            <Label>Requirements</Label>
                            <Input 
                                type="text"
                                name="requirements"
                                value={input.requirements}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2 border border-slate-900"
                                placeholder="requirements"
                            />
                        </div>
                        <div>
                            <Label>Salary</Label>
                            <Input 
                                type="text"
                                name="salary"
                                value={input.salary}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2 border border-slate-900"
                                placeholder="salary"
                            />
                        </div>
                        <div>
                            <Label>Location</Label>
                            <Input 
                                type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2 border border-slate-900"
                                placeholder="location"
                            />
                        </div>
                        <div>
                            <Label>Job Types</Label>
                            <Input 
                                type="text"
                                name="jobType"
                                value={input.jobType}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2 border border-slate-900"
                                placeholder="job Types"
                            />
                        </div>
                        <div>
                            <Label>Experience Level</Label>
                            <Input 
                                type="text"
                                name="experience"
                                value={input.experience}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2 border border-slate-900"
                                placeholder="Title"
                            />
                        </div>
                        <div>
                            <Label>No of Position</Label>
                            <Input 
                                type="number"
                                name="position"
                                value={input.position}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2 border border-slate-900"
                                placeholder="Title"
                            />
                        </div>

                        {
                            companies.length > 0 && (
                                <Select onValueChange={selectChangeHandler}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a Company" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {
                                                companies.map((company) => {
                                                    return (
                                                        <SelectItem key={company._id} value={company?.name?.toLowerCase()}>{company.name}</SelectItem>
                                                    )
                                                })
                                            }

                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )
                        }

                    </div>

                    <div>
                  
                        {
							loading ? <Button className="w-full mt-5 "> <Loader2 className="w-4 h-4 mr-2 animate-spin" /> post new job </Button> : 
                            <Button type="submit" variant="destructive" className="w-full mt-5"> Update</Button>
                        }

                       {
                        companies.length === 0 && <p className="text-red-500 text-sm font-bold text-center my-3"> Please register your company first</p>
                       }

                    </div>

                </form>
                
            </div>
        </>
    )
}

export default PostJob
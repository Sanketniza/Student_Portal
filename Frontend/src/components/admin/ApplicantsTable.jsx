
import { useSelector } from "react-redux";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Table,TableBody,TableCaption, TableCell, TableHead, TableHeader, TableRow  } from "../ui/table"
import { MoreHorizontal, OctagonAlertIcon } from "lucide-react";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/API";
import { toast } from "sonner";

// ^ -----------------------------------------------------------------------------------------------

const shortlistingStatus = ["Accepted", "Rejected"];

// ^ -----------------------------------------------------------------------------------------------

const ApplicantsTable = () => {

        // this line gives the total number of applicants available in the database
        const { applicants } = useSelector(store => store.application);
    
        const statusHandler = async (status, id) => {  //* this function help to accept or reject the applicant status
            // console.log('called');
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
                console.log(res);
                if (res.data.success) {
                    toast.success(res.data.message);
                }
            } catch (error) {
                toast.error(error.response.data.message);
                toast.error("Error updating applicantTable ")
            }
        }


  return (

         <>
            <div>
            <Table>
                <TableCaption className="text-red-500 font-medium"> A list of your recent applied user</TableCaption>
                <TableHeader>
                    <TableRow >
                        <TableHead className="text-[16px] font-bold text-orange-500" > FullName</TableHead>
                        <TableHead className="text-[16px] font-bold text-orange-500" > Email</TableHead>
                        <TableHead className="text-[16px] font-bold text-orange-500" > Contact</TableHead>
                        <TableHead className="text-[16px] font-bold text-orange-500" > GitHub</TableHead>
                        <TableHead className="text-[16px] font-bold text-orange-500" > LinkedIn</TableHead>
                        <TableHead className="text-[16px] font-bold text-orange-500" > Resume</TableHead>
                        <TableHead className="text-[16px] font-bold text-orange-500" > Date</TableHead>
                        <TableHead className="text-[16px] font-bold text-orange-500 text-right ">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="text-zinc-900 font-medium">
                    {
                        applicants && applicants?.applications?.map((item) => (
                            <tr key={item._id}>
                                <TableCell>{item?.applicant?.fullname}</TableCell>
                                <TableCell>{item?.applicant?.email}</TableCell>
                                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                                <TableCell> 
                                    <a className="text-blue-600 cursor-pointer hover:underline" href = {item?.applicant?.github} target="_blank" rel="noopener noreferrer"> 
                                         {item?.applicant?.github}
                                    </a>
                                </TableCell>
                                <TableCell> 
                                    <a className="text-blue-600 cursor-pointer hover:underline" href = {item?.applicant?.linkedin} target="_blank" rel="noopener noreferrer">
                                     {item?.applicant?.linkedin}
                                    </a>
                                </TableCell>
                                <TableCell >
                                    {
                                        item.applicant?.profile?.resume ? <a className="text-blue-600 cursor-pointer" href={item?.applicant?.profile?.resume} target="_blank" rel="noopener noreferrer">{item?.applicant?.profile?.resumeOriginalName}</a> : <span className="text-rose-700"> NULL </span>
                                    }
                                </TableCell>
                                <TableCell>{item?.applicant.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="float-right cursor-pointer ">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32 text-amber-700" >
                                            {
                                                shortlistingStatus.map((status, index) => {
                                                    return (
                                                        <div onClick={() => statusHandler(status, item?._id)} key={index} className='text-[16px] font-medium flex w-fit items-center my-2 cursor-pointer hover:text-green-500'>
                                                            <OctagonAlertIcon className="w-4 mx-2" />
                                                            <span>{status}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </PopoverContent>
                                    </Popover>

                                </TableCell>

                            </tr>
                        ))
                    }

                </TableBody>

            </Table>
        </div>

         </>
    )
}

export default ApplicantsTable

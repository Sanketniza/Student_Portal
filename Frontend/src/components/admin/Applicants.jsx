import { useEffect } from "react";
import Navbar from "../shared/Navbar";
import ApplicantsTable from "./ApplicantsTable";
import { APPLICATION_API_END_POINT } from "@/utils/API";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setApplications } from "@/redux/applicationSlice";
import { toast } from "sonner";

//^ ------------------------------------------------------------------------------------------


//^ ------------------------------------------------------------------------------------------


const Applicants = () => {

    const params = useParams();
    const dispatch = useDispatch();

    const {applicants} = useSelector((state) => state.application);


    // useEffect(() => {  // to fetch the the data 3
    //    const fetchApplicants = async () => {

    //         try{

    //             const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants` , { 
    //                 withCredentials: true
    //             });

    //             console.log(res.data);
    //             console.log("sanket ",res.data);
    //            dispatch(setApplications(res.data.job));
                
    //         }catch(e){
    //             console.log("error is found at applicant page frontend side");
    //             toast.error("error is found at applicant page frontend side");
    //             toast.error(e.message);
    //             console.log(e);
    //         }
    //     }

    //     fetchApplicants();
       
    // });

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true });
                dispatch(setApplications(res.data.job));
            } catch (error) {
                toast.error(error.response.data.message);
                console.log("error is found at applicants page frontend side");
                console.log(error);
            }
        }
        fetchAllApplicants();
    }, []);

  return (
         <>
            <Navbar />

            <div className="max-w-6xl mx-auto">
                <h3 className="text-lg font-bold text-zinc-800 my-5">Applicants {applicants?.applications?.length}</h3>
                <ApplicantsTable/>
            </div>
            
         </>
    )
}

export default Applicants;

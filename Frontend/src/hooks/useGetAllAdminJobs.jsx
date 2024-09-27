import { setAllAdminJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/API";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useGetAllAdminJobs() {
 
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            
            try{

                const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs` , {
                    withCredentials: true
                });

                if(res.data.success) {
                    dispatch(setAllAdminJobs(res.data.jobs));
                }

            }catch(error){
                console.log("error is found at usegetalljobs hook page frontend side");
                console.log(error)
            }
            
        }
        
        fetchAllAdminJobs();
    }, [dispatch]);
}

export default useGetAllAdminJobs;
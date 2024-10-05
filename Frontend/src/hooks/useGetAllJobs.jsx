

import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/API";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//^ ------------------------------------------------------------------------------------------

function useGetAllJobs() {
 
    const dispatch = useDispatch();
    const {searchedQuery} = useSelector((state) => state.job);

    useEffect(() => {
        
        const fetchAllJobs = async () => {
            
            try{

                const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}` , {
                    withCredentials: true
                });

                if(res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                }

            }catch(error){
                console.log("error is found at usegetalljobs hook page frontend side");
                console.log(error)
            }
            
        }
        
        fetchAllJobs();
    });
}

export default useGetAllJobs;


import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT } from "@/utils/API";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";


const useGetAppliedJobs = () => {  // *this hook is create to handle accept and reject status of applied job by user. so this use we use in profile page .

    const dispatch = useDispatch(); 

    useEffect (() => {

        const fetchAppliedJobs = async () => {

            try {

                const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, {
                    withCredentials: true
                })

                if(res.data.success) {
                    dispatch(setAllAppliedJobs(res.data.application));
                }

            }catch(e) {
                console.log(e);
                toast.error(e);
                toast.error("error found in useGetApplied jobs hook");
            }
        }    

        fetchAppliedJobs();
    });
};

export default useGetAppliedJobs;

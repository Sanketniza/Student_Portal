
import { setCompanies } from "@/redux/companySlice";
import { COMPANY_API_END_POINT} from "@/utils/API";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useGetAllCompanies() {
  
    const dispatch = useDispatch();
    
    useEffect(() => {

        const fetchCompanies = async () => {

            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get` , {
                    withCredentials: true
                });

                console.log(res.data);
                console.log("sanket use get all companies",res.data);

                if(res.data.success) {
                    dispatch(setCompanies(res.data.companies));
                };
                
            }catch(error){
                console.log("error is found at usegetallcompanies hook page frontend side");
                console.log(error)
            }
        };
        
        fetchCompanies();
    },[dispatch]);
};

export default useGetAllCompanies;

/* import { setCompanies } from "@/redux/companySlice";
import { COMPANY_API_END_POINT } from "@/utils/API";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useGetAllCompanies() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {
                    withCredentials: true
                });

                if (res.data.success) {
                    dispatch(setCompanies(res.data.companies));  // Dispatch to update companies in Redux store
                }
            } catch (error) {
                console.error("Error fetching companies:", error.message);
            }
        };

        fetchCompanies();
    }, [dispatch]);  // Add dependency array to ensure this runs only once
};

export default useGetAllCompanies; */

import { Link, useNavigate } from "react-router-dom"
import Navbar from "../shared/Navbar"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RadioGroup } from "@/components/ui/radio-group"
import { useEffect, useState } from "react"
import axios from "axios"
import { USER_API_END_POINT } from "@/utils/API"
import { toast } from "sonner"
import { useDispatch, useSelector } from "react-redux"
import { SetLoading, setUser } from "@/redux/authSlice"
import { Loader2 } from "lucide-react"
// import store from "@/redux/store"


// &-----------------------------------------------------------------------------------------------

function Login() {

    const [input , setInput] = useState({
        email: "",
        password: "",
        role: "",
    });

		const navigate = useNavigate();  // this is to redirect to home page after login
		const dispatch = useDispatch(); // this is to redirect to home page after login.it use for redux toolkit store
		const {loading , user} = useSelector(store => store.auth);


    const changeEventHandler = (event) => {
        setInput({
            ...input, [event.target.name]:event.target.value
        });
    };

    const submitHandler = async (event) => {
		event.preventDefault();
	
		
		try{
			dispatch(SetLoading(true));
			const res = await axios.post(`${USER_API_END_POINT}/login`, input , {
				
				headers: {
					"Content-Type": "application/json"
				},
				withCredentials: true
			});
			
			if(res.data.success) {
				dispatch(setUser(res.data.user));
				navigate("/");
				toast.success(res.data.message);
			}

            else {
                toast.error(res.data.message);
            }
			    
		}catch(error){
			console.log(error);
		} finally { // loading animation will stop here
			dispatch(SetLoading(false));
		}
		
	};

	useEffect(() => {
		
		if(user) {
			navigate("/");
		}
	}, []);

	    
    
	return (
		<>
		<Navbar/>

		 		<div className="flex items-center justify-center mx-auto max-w-7xl">
					
					<form onSubmit={submitHandler} className="w-1/2 p-10 my-10 border border-slate-300">
						<h1 className="mb-5 text-xl font-bold">Login</h1>
						 
						
						 
						 <Label htmlFor="email">Email</Label>
							<Input
								 type="email" 
                                 value={input.email}
                                 name="email"
                                 onChange={changeEventHandler}
								 placeholder="abc@gmail.com"
								 className="w-full mt-2 mb-5"
							>
						 </Input>
						 
						 <Label htmlFor="password">Password</Label>
						 	<Input
								 type="password" 
                                 value={input.password}
                                 name="password"
                                 onChange={changeEventHandler}
								 placeholder="xyz132@"
								 className="w-full mt-2 mb-5"
						 	>
						 </Input>
						 

						 <Label htmlFor="role">Role</Label> 
						 <RadioGroup defaultValue="Student" className="flex space-x-4">
                         <div className="flex items-center space-x-2">
						    <Input
						    	 type="radio"
						    	 name="role"
                                 checked={input.role === "student"}
								 onChange={changeEventHandler}
						    	 value="student"
						    	 className="cursor-pointer"
						    >
						  </Input>
						    <Label htmlFor="student">Student</Label>
						  </div>
						  
						  <div className="flex items-center space-x-2">
						    <Input
						    	 type="radio"
						    	 name="role"
                                 checked={input.role === "hr"}
								 onChange={changeEventHandler}
						    	 value="hr"
						    	 className="cursor-pointer"
						    >
						  </Input>
						    <Label htmlFor="HR">HR</Label>
						  </div>
						</RadioGroup>

						 {
							loading ? <Button className="w-full mt-5"> <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Please Wait </Button> : 
							 <Button type="submit" variant="destructive" className="w-full mt-5"> LogIn</Button>
						 }

						 <p className="mt-5 text-center">Don`t have an account ? 
							<Link to="/signup" className="mx-2 text-blue-600">Sign Up</Link>
						</p>
						 
					</form>
					
				</div>	

		</>
		
	)
};

export default Login;
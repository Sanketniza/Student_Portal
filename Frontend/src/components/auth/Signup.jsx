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
import { SetLoading } from "@/redux/authSlice"
import { Loader2 } from "lucide-react"

//&-----------------------------------------------------------------------------------------------


function Signup() {

	const [input , setInput] = useState({
        fullname: "",
        email: "",
        password: "",
        role: "",
        phoneNumber: "",
        file: ""
    });

	const {loading , user} = useSelector(store => store.auth);
	const dispatch = useDispatch();
	
	const navigate = useNavigate();

    const changeEventHandler = (event) => {
        setInput({
            ...input, [event.target.name]:event.target.value
        });
    };

    const changeFileHandler = (event) => {
        setInput({
            ...input, file:event.target.files?.[0]
        });
    };

	const submitHandler = async (event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append("fullname", input.fullname);
		formData.append("email", input.email);
		formData.append("password", input.password);
		formData.append("role", input.role);
		formData.append("phoneNumber", input.phoneNumber);
			if(input.file){
				formData.append("file", input.file);
			}
		
		// console.log(input);

		
		try{

			dispatch(SetLoading(true));
			const res = await axios.post(`${USER_API_END_POINT}/register`, formData , {
				
				headers: {
					"Content-Type": "multipart/form-data"
				},
				withCredentials: true
			});
			
			if(res.data.success) {
				navigate("/login");
				toast.success(res.data.message);
			}
			    
		}catch(error){
			console.log(error);
			toast.error(error.response.data.message);
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
						<h1 className="mb-5 text-xl font-bold">Sign Up</h1>
						 
						 <Label htmlFor="name">Full Name</Label>
							<Input
								 type="text" 
								 value={input.fullname}
								 name="fullname"
								 onChange={changeEventHandler}
								 placeholder="sanket"
								 className="w-full mt-2 mb-5"	
							>
						 </Input>
						 
						 <Label htmlFor="name">Email</Label>
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
						 
						 <Label htmlFor="Phone No">Phone No</Label>
							<Input
								type="number" 
								value={input.phoneNumber}
								name="phoneNumber"
								onChange={changeEventHandler}
								placeholder="1234567890"
								className="w-full mt-2 mb-5"
							>
						 </Input>

						 <Label htmlFor="name">Role</Label> 
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

						<div className="flex items-center gap-3">
							<Label htmlFor="name">Profile</Label>
							<Input
								type="file" 
								accept="image/*"
								name="file"
								onChange={changeFileHandler}
								className="cursor-pointer"
							/>
						</div>
						 
						{
							loading ? <Button className="w-full mt-5"> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait </Button> : 
							 <Button type="submit" variant="destructive" className="w-full mt-5"> SignUp</Button>
						 }

						 <p className="mt-5 text-center">Already have an account ? 
							<Link to="/login" className="mx-2 text-blue-600">Log in</Link>
						</p>
						 
					</form>
					
				</div>	

		</>
		
	)
};

export default Signup;
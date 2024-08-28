import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@radix-ui/react-popover";
import { LogOut, User2 } from "lucide-react"; // icon 
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/API";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

function Navbar() {
	const  {user} = useSelector((store) => store.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	

	const logoutHandler = async () => {

		try{
			const res = await axios.get(`${USER_API_END_POINT}/logout` , {
				withCredentials: true});

				if(res.data.success) {
					dispatch(setUser(null));
					navigate("/login");
					toast.success(res.data.message);
				}
		}catch(error){
			console.log(error)
			toast.error(error.response.data.message);
		}
	}
	
return (
		<>
		
			<div className='flex items-center justify-between h-16 px-5 mx-auto max-w-7xl '>
{/* //&------------------------------------------------------------------------------------------  */}

				<div className="flex items-center ">
						<div className="flex ">
							<img className="w-16 h-16 rounded-md bg-transparent" src="https://i.pinimg.com/564x/ee/b8/88/eeb8887be49a50318564804d44e353f8.jpg" alt="asdf" />
						</div>
					<h1 className="text-3xl font-bold text-zinc-800">
						Student <span className="text-red-500">_Hub</span>{" "}
					</h1>
				</div>

{/* //&------------------------------------------------------------------------------------------  */}

				<div className="flex items-center gap-4">
					<ul className="flex items-center space-x-4 font-bold text-zinc-800">
						<li className="hover:underline "><Link to="/">Home</Link></li>
						<li className="hover:underline "><Link to="/jobs">Job</Link></li>
						<li className="hover:underline "><Link to="/browser">Browser</Link></li>
					</ul>
							
							{
						
								!user ? (
									
									<div className="flex items-center gap-4">
										<Link to="/login"><Button variant="outline" className="">LogIn</Button></Link>
										<Link to="/signup"><Button className="bg-red-500">Signup</Button></Link>
										</div>
										
								) : (
									<Popover >
									<PopoverTrigger asChild > 
										<Avatar className="cursor-pointer mx-5">
											<AvatarImage className="w-10 h-10 rounded-full "
												src={user?.profile?.profilephoto}
												alt="User Profile photo"/>
										</Avatar>
									</PopoverTrigger>
			 
									<PopoverContent className="p-4 mt-2 max-w-xs ">
										
										{/* //&------------------------------------------------------------------------------------------  */}

										<div className="flex items-start gap-4 space-y-2 ml-5">
											<Avatar className="cursor-pointer">
												<AvatarImage className="max-w-[40px] max-h-[40px] rounded-full "
														src={user?.profile?.profilephoto}
														alt="User Profile photo"/>
											</Avatar>
										
										<div>  
											<h4 className="font-medium"> { user?.fullname} </h4>
											<p className="text-sm text-muted-foreground"> {user?.profile?.bio} </p>
										</div>
									</div> 
									
										{/* //&------------------------------------------------------------------------------------------  */}
										
										<div className="flex flex-col mt-2 text-gray-700 mx-5">
											<div className="flex items-center gap-2 cursor-pointer w-fit">
												< User2/>
												<Button variant="link"> <Link to="/profile"> View Profile </Link></Button>
											</div>
											<div className="flex items-center gap-2 cursor-pointer w-fit">
												<LogOut/>
												<Button onClick={logoutHandler}  variant="link"> Logout </Button> 
											</div>
										</div>
										
										{/* //&------------------------------------------------------------------------------------------  */}
									
										
									 </PopoverContent>
								   </Popover>
								)
								
							}
			
				</div>

				{/* //&------------------------------------------------------------------------------------------  */}
				
			</div>
		</>
	);
}

export default Navbar;

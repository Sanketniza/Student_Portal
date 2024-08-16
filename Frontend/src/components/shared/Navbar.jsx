import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@radix-ui/react-popover";
import { LogOut, User2 } from "lucide-react"; // icon
import { Link } from "react-router-dom";

function Navbar() {
	const user = false;
	
	return (
		<>
			<div className='flex items-center justify-between h-16 mx-auto max-w-7xl'>
{/* //&------------------------------------------------------------------------------------------  */}

				<div className="">
					<h1 className="text-3xl font-bold text-zinc-800">
						Job <span className="text-red-500">Portal</span>{" "}
					</h1>
				</div>

{/* //&------------------------------------------------------------------------------------------  */}

				<div className="flex items-center gap-4">
					<ul className="flex items-center space-x-4 font-medium text-zinc-800">
						<li>Home</li>
						<li>Job</li>
						<li>Browser</li>
					</ul>
							
							{
						
									!user ? (
										
									   <div className="flex items-center gap-4">
											Link
											{/* <Link to="/login"> */}
												<Button variant="outline" className="">LogIn</Button>
											{/* </Link> */}
											
											{/* <Link to="/signup">/ */}
												<Button className="bg-red-500">Signup</Button>
											{/* </Link> */}
										 </div>
										 
									) : (
										<Popover >
										<PopoverTrigger asChild>
											<Avatar className="cursor-pointer">
												<AvatarImage className="w-10 h-10 rounded-full "
													src="https://github.com/shadcn.png"
													alt="@shadcn"/>
											</Avatar>
										</PopoverTrigger>
				
										<PopoverContent className="p-4 mt-2 ">
											
													{/* //&------------------------------------------------------------------------------------------  */}
											<div className="flex gap-4 space-y-2 ">
												<Avatar className="cursor-pointer">
													<AvatarImage className="w-10 h-10 rounded-full "
														src="https://github.com/shadcn.png"
														alt="@shadcn"/>
												</Avatar>
											
											<div>  
												<h4 className="font-medium">how are you</h4>
												<p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur.</p>
											</div>
										</div> 
										
											{/* //&------------------------------------------------------------------------------------------  */}
											
											<div className="flex flex-col mt-2 text-gray-700">
												<div className="flex items-center gap-2 cursor-pointer w-fit">
													< User2/>
													<Button variant="link">View Profile</Button>
												</div>
												<div className="flex items-center gap-2 cursor-pointer w-fit">
													<LogOut/>
													<Button variant="link">Logout</Button> 
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

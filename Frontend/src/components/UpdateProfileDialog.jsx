import { useState } from "react";
import PropTypes from "prop-types"; 
import { Dialog,DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/API";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";



const UpdateProfileDialog = ({open , setOpen}) => {

    const [loading , setLoading] = useState(false);
    const {user} = useSelector((store) => store.auth);

    const [input , setInput] = useState({
        fullname: user?.fullname,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        bio: user?.bio,
        github: user?.github,
        linkedin: user?.linkedin,
        skill: user?.profile?.skills?.map(skill => skill) || "",
        file:user?.profile?.resume || ""
    });

    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({
            ...input, [e.target.name]: e.target.value});
    }

    const fileChangeHandler = (e) => {
        const file = e.target.file?.[0];
        setInput({...input, file});
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("bio", input.bio);
        formData.append("github", input.github);
        formData.append("linkedin", input.linkedin);
        formData.append("skill", input.skill);
        if(input.file) { 
            formData.append("file", input.file);
        }
        
        try{
            setLoading(true);
            const res = await axios.post(`${USER_API_END_POINT}/profile/update` , formData ,  {
                
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true 
            });

            if(res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
            }

            const data = await res.json();
            console.log(data);
            
        }catch(error) {
            console.log(error);
            // toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
        
        // setLoading(true);
        setOpen(false);
        setLoading(false);
        console.log("sanket");
        console.log(input);
    };

  
    
  return (
        <>
            <div>
                <Dialog open = {open}>
                    <DialogContent className="sm:max-w-[425px] overflow-y-auto" onInteractOutside={() => setOpen(false)}>
                        <DialogHeader>
                            <DialogTitle>Update Profile</DialogTitle>
                        </DialogHeader>

                        <form action="" onSubmit={submitHandler}>
                            <div className="grid gap-3 py-4" >
                                <div className="grid items-center grid-cols-4 gap-10 space-y-3">
                                    <Label htmlFor="name" className="text-right" >Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={input.fullname}
                                        onChange={changeEventHandler}
                                        className="col-span-3 px-3 py-1 border rounded-md outline outline-offset-2 outline-1" 
                                    />
                                </div>
                                
                                <div className="grid items-center grid-cols-4 gap-10 space-y-3">
                                    <Label htmlFor="email" className="text-right" >Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={input.email}
                                        onChange={changeEventHandler}
                                        className="col-span-3 px-3 py-1 border rounded-md outline outline-offset-2 outline-1" 
                                    />
                                </div>
                                
                                <div className="grid items-center grid-cols-4 gap-10 space-y-3">
                                    <Label htmlFor="number" className="text-right" >Number</Label>
                                    <Input
                                        id="number"
                                        type="number"
                                        name="number"
                                        value={input.phoneNumber}
                                        onChange={changeEventHandler}
                                        className="col-span-3 px-3 py-1 border rounded-md outline outline-offset-2 outline-1" 
                                    />
                                </div>
                                
                                <div className="grid items-center grid-cols-4 gap-10 space-y-3">
                                    <Label htmlFor="bio" className="text-right" >Bio</Label>
                                    <Input
                                        id="bio"
                                        type="text"
                                        name="bio"
                                        value={input.bio}
                                        onChange={changeEventHandler}
                                        className="col-span-3 px-3 py-1 border rounded-md outline outline-offset-2 outline-1" 
                                    />
                                </div>
                                
                                <div className="grid items-center grid-cols-4 gap-10 space-y-3">
                                    <Label htmlFor="skill" className="text-right" >Skill</Label>
                                    <Input
                                        id="skill"
                                        type="text"
                                        name="skill"
                                        value={input.skill}
                                        onChange={changeEventHandler}
                                        className="col-span-3 px-3 py-1 border rounded-md outline outline-offset-2 outline-1" 
                                    />
                                </div>
                                
                                <div className="grid items-center grid-cols-4 gap-10 space-y-3">
                                    <Label htmlFor="file" className="text-right" >Resume</Label>
                                    <Input
                                        id="file"
                                        name="file"
                                        value={input.file}
                                        type="file"
                                        onChange={fileChangeHandler}
                                        accept="application/pdf"
                                        className="col-span-3 px-3 py-1 border rounded-md outline outline-offset-2 outline-1" 
                                    />
                                </div>
                                
                                <div className="grid items-center grid-cols-4 gap-10 space-y-3">
                                    <Label htmlFor="github" className="text-right" >GitHub Id</Label>
                                    <Input
                                        id="github"
                                        type="url"
                                        name="github"
                                        value={input.github}
                                        onChange={changeEventHandler}
                                        className="col-span-3 px-3 py-1 border rounded-md outline outline-offset-2 outline-1" 
                                    />
                                </div>
                                
                                <div className="grid items-center grid-cols-4 gap-10 space-y-3">
                                    <Label htmlFor="linkedin" className="text-right" >LinkedIn</Label>
                                    <Input
                                        id="linkedin"
                                        type="url"
                                        name="linkedin"
                                        value={input.linkedin}
                                        onChange={changeEventHandler}
                                        className="col-span-3 px-3 py-1 border rounded-md outline outline-offset-2 outline-1" 
                                    />
                                </div>
                                
                            </div>

                            <DialogFooter>
                                {
							       loading ? <Button className="w-full mt-5"> <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Please Wait </Button> : 
                                     <Button type="submit" variant="destructive" className="w-full mt-5"> Update</Button>
                                }
                            </DialogFooter>
                            
                        </form>

                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
};

// Adding PropTypes for prop validation
UpdateProfileDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
  };

export default UpdateProfileDialog;
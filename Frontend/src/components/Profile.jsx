
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import Navbar from './shared/Navbar'
import { Button } from './ui/button';
import { Contact, GitBranchIcon, Linkedin, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//&------------------------------------------------------------------------------------------

// const Skill = [
//     "React", "Javascript", "CSS", "HTML", "NodeJS", "ExpressJS", "MongoDB", "MySQL"
// ];

//&------------------------------------------------------------------------------------------
 

function Profile() {

    const isResume = true;
    const[open , setOpen] = useState(false);
    const {user}  = useSelector((store) => store.auth);
    
  return (
        <>
            <Navbar />

            <div className="max-w-4xl mx-auto mt-5 bg-white border border-gray-300 shadow shadow-2xl p-7 rounded-2xl sm:px-6 lg:px-8">
                
                <div className="flex items-center justify-between">  
                    <div className='flex items-center gap-5'>
                        <Avatar>
                           <AvatarImage className='w-24 border-4 border-white' src="https://i.pinimg.com/564x/80/4e/51/804e518f3feec6345be49df95fac5bff.jpg" alt="@shadcn" />     
                        </Avatar>
        
                        <div>
                           <h1 className="text-xl font-bold text-zinc-800">{ user?.fullname }</h1>
                           <p className="text-sm"> { user?.profile?.bio} </p>    
                        </div>  
                    </div>

                    <div className='mr-10'>
                         <Button onClick={() => setOpen(true)} className="text-right bg-transparent border-zinc-700 text-zinc-500" variant="outline">
                            <Pen />
                        </Button>
                    </div>   
                </div>

{/* //?------------------------------------------------------------------------------------------ */}

                <div className="my-5">
                    <div className="flex items-center gap-2 mt-5 cursor-pointer">
                        <Mail/>
                        <span>{ user?.email }</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-5 cursor-pointer">
                        <Contact/>
                        <span> { user?.phoneNumber }</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-5 cursor-pointer">
                        <Linkedin/>
                        <a href={user?.linkedin}>Linkedin Id</a>
                        {/* <span> {user?.linkedin } </span> */}
                    </div>
                    
                    <div className="flex items-center gap-2 mt-5 cursor-pointer">
                        <GitBranchIcon/>
                        <a href={user?.github}>GitHub Id</a>
                        {/* <span> { user?.github } </span> */}
                    </div>
                    
                </div>

{/* //?------------------------------------------------------------------------------------------ */}

                <div className="my-5 ">
                    <h1 className="my-5 text-xl font-medium text-zinc-800">Skill</h1>
                    <div className='cursor-pointer'>
                        {
                            user?.profile?.skills.length !== 0 ?  user?.profile?.skills.map((item , index) => <Badge key={index} className={"mr-2 text-blue-800 text-center shadow shadow-2xl bg-gray-300"} variant="ghost">{item}</Badge>) : <span className="text-sm">No Skill</span>
                        }
                    </div>
                </div>
                
 {/* //?------------------------------------------------------------------------------------------ */}

                 <div className='grid w-full gap-2 max-w-7xl '>
                    <Label className="text-xl font-medium text-zinc-800">Resume </Label>
                    
                    {
                        isResume ? 
                        <a target='_blank' href={user?.profile?.resume} className='text-sm text-blue-500 hover:underline'>View Resume</a> : 
                        <span> No Resume Available </span>
                    }

                    
                 </div>
                 
 {/* //?------------------------------------------------------------------------------------------ */}
 
            </div>
            
 {/* //~------------------------------------------------------------------------------------------ */}


            <div className="max-w-4xl mx-auto my-20 bg-white border border-gray-300 shadow shadow-2xl p-7 rounded-2xl">
                    <h1 className="px-4 text-xl font-medium text-zinc-800">Applied Jobs</h1>
                    
                    <AppliedJobTable />
            </div>
                
 {/* //~------------------------------------------------------------------------------------------ */}
                    
         <UpdateProfileDialog open={open} setOpen={setOpen} />

        </>
    )
}

export default Profile;
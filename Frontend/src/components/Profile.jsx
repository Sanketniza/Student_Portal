import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import Navbar from './shared/Navbar'
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';

//&------------------------------------------------------------------------------------------

const Skill = [
    "React", "Javascript", "CSS", "HTML", "NodeJS", "ExpressJS", "MongoDB", "MySQL"
];

//&------------------------------------------------------------------------------------------


function Profile() {

    const isResume = true;
    
  return (
        <>
            <Navbar />

            <div className="mx-auto mt-5 bg-white border border-gray-200 shadow shadow-2xl p-7 rounded-2xl max-w-7xl sm:px-6 lg:px-8">
                
                <div className="flex items-center justify-between">  
                    <div className='flex items-center gap-5'>
                        <Avatar>
                           <AvatarImage className='w-24 border-4 border-white' src="https://i.pinimg.com/564x/80/4e/51/804e518f3feec6345be49df95fac5bff.jpg" alt="@shadcn" />     
                        </Avatar>
        
                        <div>
                           <h1 className="text-xl font-bold text-zinc-800">Full Name</h1>
                           <p className="text-sm">lorem ipsum Hey sanket how are you </p>    
                        </div>  
                    </div>

                    <div className='mr-10'>
                         <Button className="text-right bg-transparent border-zinc-700 text-zinc-500" variant="outline">
                            <Pen />
                        </Button>
                    </div>   
                </div>

{/* //?------------------------------------------------------------------------------------------ */}

                <div className="my-5">
                    <div className="flex items-center gap-2 mt-5 cursor-pointer">
                        <Mail/>
                        <span>Email</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-5 cursor-pointer">
                        <Contact/>
                        <span>Phone No</span>
                    </div>
                </div>

{/* //?------------------------------------------------------------------------------------------ */}

                <div className="my-5 ">
                    <h1 className="my-5 text-xl font-medium text-zinc-800">Skill</h1>
                    <div className=''>
                        {
                            Skill.length !== 0 ?  Skill.map((item , index) => <Badge key={index} className={"mr-2 text-blue-800 text-center shadow shadow-2xl bg-gray-300"} variant="ghost">{item}</Badge>) : <span className="text-sm">No Skill</span>
                        }
                    </div>
                </div>
                
 {/* //?------------------------------------------------------------------------------------------ */}

                 <div className='grid w-full gap-2 max-w-7xl '>
                    <Label className="text-xl font-medium text-zinc-800">Resume </Label>
                    
                    {
                        isResume ? <a target='_blank' href="https://www.google.com" className='text-sm text-blue-500 hover:underline'>asd.json</a> : <span> Null </span>
                    }
                    
                 </div>     
                 
 {/* //?------------------------------------------------------------------------------------------ */}
 
            </div>
            
 {/* //~------------------------------------------------------------------------------------------ */}


            <div className="mx-auto my-20 bg-white border border-gray-200 shadow shadow-2xl max-w-7xl p-7 rounded-2xl">
                    <h1 className="px-4 text-xl font-medium text-zinc-800">Applied Jobs</h1>
                    
                    <AppliedJobTable />
            </div>
                
 {/* //~------------------------------------------------------------------------------------------ */}

        </>
    )
}

export default Profile;
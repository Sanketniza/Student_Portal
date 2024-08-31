import { AvatarImage } from "@radix-ui/react-avatar"
import { Avatar } from "../ui/avatar"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Popover } from "../ui/popover"
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Edit2, MoreHorizontal } from "lucide-react"

function CompaniesTable() {
  return (
        <>
            <Table>
                <TableCaption> A list of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead> Logo </TableHead>
                        <TableHead> Name </TableHead>
                        <TableHead> Date </TableHead>
                        <TableHead className="text-right"> Action </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableCell>
                        <Avatar>
                            <AvatarImage src="https://i.pinimg.com/564x/ee/b8/88/eeb8887be49a50318564804d44e353f8.jpg" />
                        </Avatar>
                    </TableCell>
                    <TableCell> Student_Hub </TableCell>
                    <TableCell> 17/06/2023 </TableCell>
                    <TableCell className="text-right cursor-pointer "> 
                        <Popover className="cursor-pointer">
                            <PopoverTrigger>
                                 <MoreHorizontal/> 
                            </PopoverTrigger>
                            
                            <PopoverContent className="w-32 text-right ">
                                <div className="flex items-center gap-2 cursor-pointer w-fit">
                                    <Edit2 className="w-4" />
                                    <span> Edit </span>
                                </div>
                            </PopoverContent>
                            
                        </Popover> 
                    </TableCell>
                </TableBody>
                    
            </Table>
        </>
    ) 
}

export default CompaniesTable
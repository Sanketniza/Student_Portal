
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Table,TableBody,TableCaption, TableCell, TableHead, TableHeader, TableRow  } from "../ui/table"
import { MoreHorizontal, MoveRight } from "lucide-react";

// ^ -----------------------------------------------------------------------------------------------

const ShortListed = [ "accepted" , "rejected" ];


// ^ -----------------------------------------------------------------------------------------------

function ApplicantsTable() {
  return (

         <>
            <div>
                <Table>
                    <TableCaption> A List of your recent applied user </TableCaption>

                    <TableHeader>
                        <TableRow>
                            <TableHead>Applied Date</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Applied Date</TableHead>
                            <TableHead>Applied Date</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>

                        <TableBody >
                            <tr>
                                <TableCell> sanket </TableCell>
                                <TableCell> sanket </TableCell>
                                <TableCell> sanket </TableCell>
                                <TableCell> sanket </TableCell>
                                <TableCell> sanket </TableCell>
                                <TableCell className="text-right"> 
                                    <Popover>
                                        <PopoverTrigger> 
                                            <MoreHorizontal />
                                        </PopoverTrigger>

                                        <PopoverContent className="w-32"> 
                                            {
                                                ShortListed.map((item , index) => {
                                                    return (

                                                        <div key={index} className="flex items-center space-x-2">
                                                            <MoveRight /> 
                                                            <span> { item } </span>    
                                                        </div>
                                                    )
                                                })
                                              }
                                        </PopoverContent>
                                    </Popover>
                                    
                                 </TableCell>
                            </tr>
                        </TableBody>
                  

                </Table>
            </div>

         </>
    )
}

export default ApplicantsTable

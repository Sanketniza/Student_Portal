import { Badge } from "./ui/badge"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"



function AppliedJobTable() {
  return (
        <>
            <div className="p-4 ">
                <Table>
                    <TableCaption>A list of your Applied Jobs</TableCaption>

                    <TableHeader>
                        <TableRow className="font-medium font-bold text-slate-500">
                            <TableHead className="font-medium font-bold text-slate-500">Date</TableHead>
                            <TableHead className="font-medium font-bold text-slate-500">Job Role</TableHead>
                            <TableHead className="font-medium font-bold text-slate-500">Company</TableHead>
                            <TableHead className="font-medium font-bold text-slate-500">Status</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {
                           [1,2,3,4,5].map((item , index) => (
                             <TableRow key={index}>
                                 <TableCell>17/06/2023</TableCell> 
                                 <TableCell>Web Developer</TableCell> 
                                 <TableCell>Amazon</TableCell> 
                                 <TableCell className=""><Badge variant="outline" className="cursor-pointer  bg-zinc-300">Rejected</Badge></TableCell>
                             </TableRow>
                           ))
                                
                        }
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default AppliedJobTable
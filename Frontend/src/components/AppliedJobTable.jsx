import { useSelector } from "react-redux"
import { Badge } from "./ui/badge"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

//&------------------------------------------------------------------------------------------


//&------------------------------------------------------------------------------------------

function AppliedJobTable() {

    const {allAppliedJobs} = useSelector(state => state.job); //* fetching data from store, to find user status about applied job (accept or reject)

  return (
        <>
            <div className="p-2 ">  
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
                        allAppliedJobs.length <= 0 ? <span>Not Applied Any Job</span> : allAppliedJobs.map((appliedJob) => (
                            <TableRow key={appliedJob._id}>
                                <TableCell> {appliedJob?.createdAt?.split("T")[0]} </TableCell>
                                <TableCell> {appliedJob.job?.title} </TableCell>
                                <TableCell> {appliedJob.job?.company?.name} </TableCell>
                                <TableCell className=""> <Badge variant={"outline"} className={`${appliedJob?.status === "rejected" ? 'bg-red-400' : appliedJob.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>{appliedJob.status.toUpperCase()}</Badge></TableCell>
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

import { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CompaniesTable = () => {
    const { companies, searchCompanyByText } = useSelector(store => store.company);
    const [filterCompany, setFilterCompany] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (companies && companies.length > 0) {
            const filteredCompany = companies.filter(company => {
                if (!searchCompanyByText) {
                    return true;
                }
                return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
            });
            setFilterCompany(filteredCompany);
        }
    }, [companies, searchCompanyByText]);

    return (
        <>
            <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterCompany.length > 0 ? (

                            filterCompany.map((company) => (
                                <TableRow key={company._id}>

                                    <TableCell>
                                        <Avatar>
                                            <AvatarImage src={company.logo} />
                                        </Avatar>
                                    </TableCell>

                                    <TableCell>sanket</TableCell>
                                    <TableCell>{company.createdAt.split("T")[0]}</TableCell>

                                    <TableCell className="text-right cursor-pointer">
                                        <Popover>
                                            <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                            <PopoverContent className="w-32">
                                                <div onClick={() => navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 cursor-pointer w-fit'>
                                                    <Edit2 className='w-4' />
                                                    <span>Edit</span>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>

                                </TableRow>
                            ))

                        ) : (
                            <TableRow>
                                <TableCell colSpan={4}>No companies found</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </>
    );
};

export default CompaniesTable;
 



/* 

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';


const CompaniesTable = () => {

    const {companies} = useSelector(store=>store.company);
    console.log(companies)
   

    return (
        <>
            <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        companies.length <= 0 ? <span>you do not have register any company yet.</span> : (

                            <>
                                {
                                    companies.map((company) => {
                                        return (
                                            <div key={company._id}>
                                                <TableCell>
                                                    <Avatar>
                                                        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                                                      </Avatar>
                                                </TableCell>

                                                <TableCell> {company.name} </TableCell>
                                                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                                                <TableCell className="text-right cursor-pointer">
                                                           <Popover>
                                                               <PopoverTrigger> <MoreHorizontal /> </PopoverTrigger>
                                                               <PopoverContent className="w-32">
                                                                   <div className='flex items-center gap-2 cursor-pointer w-fit'>
                                                                       <Edit2 className='w-4' />
                                                                       <span>Edit</span>
                                                                   </div>
                                                               </PopoverContent>
                                                           </Popover>
                                                       </TableCell>
                                                </div>
                                            )
                                    })
                                }
                            </>
                        )
                    }
   
                </TableBody>
            </Table>
        </>
    );
};

export default CompaniesTable; */
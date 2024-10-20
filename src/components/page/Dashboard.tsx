import { Button } from "../ui/button"
import Navbar from "./Navbar"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../ui/table"
import { Check, Hourglass, X } from "lucide-react"
  

const Dashboard = () => {
  return (
    <div className='mx-6'>
        <Navbar />
        <div className="h-screen w-full p-6">
            <div className="flex-col">
                <p className="text-2xl font-medium">Welcome,</p>
                <h1 className="text-4xl font-bold">John Doe</h1>
                <div className="flex-col my-4 bg-zinc-100 w-[240px] p-4 rounded-md shadow-md">   
                    <div className="flex space-x-4 items-baseline">
                        <p className="text-sm text-slate-500">Investor ID</p>
                        <p className="text-lg font-medium">12</p>
                    </div>
                    <div className="flex space-x-4 items-baseline">
                        <p className="text-sm text-slate-500">Registered Territory</p>
                        <p className="text-lg font-medium">B</p>
                    </div>
                </div>
                <Button>
                    New Proposal
                </Button>
            </div>
            <hr className="my-4"/>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">Proposal ID</TableHead>
                        <TableHead className="text-center">Investment Amount</TableHead>
                        <TableHead className="text-center">Investment Type</TableHead>
                        <TableHead className="text-center">Territory Admin</TableHead>
                        <TableHead className="text-center">TA Reviewed On</TableHead>
                        <TableHead className="text-center">Admin</TableHead>
                        <TableHead className="text-center">Admin Reviewed On</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="text-center">10</TableCell>
                        <TableCell className="text-center">95000</TableCell>
                        <TableCell className="text-center">Health</TableCell>
                        <TableCell className="flex justify-center">
                            <Check className="text-green-600 h-5"/>
                        </TableCell>
                        <TableCell className="text-center">2024-10-20</TableCell>
                        <TableCell className="flex justify-center">
                            <Check className="text-green-600 h-5"/>
                        </TableCell>
                        <TableCell className="text-center">2024-10-20</TableCell>
                        <TableCell className="text-center text-green-600">Verified</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-center">12</TableCell>
                        <TableCell className="text-center">45000</TableCell>
                        <TableCell className="text-center">Education</TableCell>
                        <TableCell className="flex justify-center">
                            <Check className="text-green-600 h-5"/>
                        </TableCell>
                        <TableCell className="text-center">2024-10-20</TableCell>
                        <TableCell className="flex justify-center">
                            <Hourglass className="text-yellow-500 h-4"/>
                        </TableCell>
                        <TableCell className="text-center">2024-10-20</TableCell>
                        <TableCell className="text-center text-yellow-500">Pending</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-center">23</TableCell>
                        <TableCell className="text-center">30000</TableCell>
                        <TableCell className="text-center">Health</TableCell>
                        <TableCell className="flex justify-center">
                            <Hourglass className="text-yellow-500 h-4"/>
                        </TableCell>
                        <TableCell className="text-center">2024-10-20</TableCell>
                        <TableCell className="flex justify-center">
                            <Hourglass className="text-yellow-500 h-4"/>
                        </TableCell>
                        <TableCell className="text-center">2024-10-20</TableCell>
                        <TableCell className="text-center text-yellow-500">Pending</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-center">9</TableCell>
                        <TableCell className="text-center">10000</TableCell>
                        <TableCell className="text-center">Business</TableCell>
                        <TableCell className="flex justify-center">
                            <X className="text-rose-600 h-5"/>
                        </TableCell>
                        <TableCell className="text-center">2024-10-20</TableCell>
                        <TableCell className="flex justify-center">
                            <X className="text-rose-600 h-5"/>
                        </TableCell>
                        <TableCell className="text-center">2024-10-20</TableCell>
                        <TableCell className="text-center text-rose-600">Rejected</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    </div>
  )
}

export default Dashboard
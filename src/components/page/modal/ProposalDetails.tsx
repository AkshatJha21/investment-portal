import { Button } from "../../ui/button";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ProposalDetails = ({ isOpen, onClose }: ModalProps) => {
    if (!isOpen) {
        return null;
    }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-[300px] md:w-[400px]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-indigo-900">Proposal Details</h2>
                    <button onClick={onClose} className="text-2xl text-gray-600 hover:text-gray-900">&times;</button>
                </div>
                <div className="flex-col space-y-2 mb-2">
                    <div className="flex space-x-4 items-baseline">
                        <p className="text-sm text-slate-500">Proposal ID</p>
                        <p className="text-lg font-medium">10</p>
                    </div>
                    <div className="flex space-x-4 items-baseline">
                        <p className="text-sm text-slate-500">Investment Amount</p>
                        <p className="text-lg font-medium">45000</p>
                    </div>
                    <div className="flex space-x-4 items-baseline">
                        <p className="text-sm text-slate-500">Investment Type</p>
                        <p className="text-lg font-medium">Education</p>
                    </div>
                    <div className="flex space-x-4 items-baseline">
                        <p className="text-sm text-slate-500">Employment Generation</p>
                        <p className="text-lg font-medium">Yes</p>
                    </div>
                    <div className="flex space-x-4 items-baseline">
                        <p className="text-sm text-slate-500">Literacy Improvement</p>
                        <p className="text-lg font-medium">Yes</p>
                    </div>
                    <div className="flex space-x-4 items-baseline">
                        <p className="text-sm text-slate-500">Happiness Index</p>
                        <p className="text-lg font-medium">No</p>
                    </div>
                    <div className="flex space-x-4 items-baseline">
                        <p className="text-sm text-slate-500">Poverty Elimination</p>
                        <p className="text-lg font-medium">Yes</p>
                    </div>
                    <div className="text-center border border-dashed rounded-md py-2 border-green-600 text-green-600 font-light text-sm">
                        Verified by SUB_ADMIN
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-indigo-900">Investor Details</h2>
                <div className="flex-col space-y-2 mt-4">
                    <div className="flex space-x-4 items-baseline">
                        <p className="text-sm text-slate-500">Investor Name</p>
                        <p className="text-lg font-medium">John Doe</p>
                    </div>
                    <div className="flex space-x-4 items-baseline">
                        <p className="text-sm text-slate-500">Investor Email</p>
                        <p className="text-lg font-medium">john.doe@email.com</p>
                    </div>
                    <div className="flex space-x-4 items-baseline">
                        <p className="text-sm text-slate-500">Investor Territory</p>
                        <p className="text-lg font-medium">B</p>
                    </div>
                    <div className="flex space-x-4 items-baseline">
                        <p className="text-sm text-slate-500">Previous Investment Score</p>
                        <p className="text-lg font-medium">0</p>
                    </div>
                </div>
                <div className="flex w-full pt-4 space-x-2">
                    <Button className="w-1/2 bg-green-600" onClick={onClose}>
                        Accept
                    </Button>
                    <Button className="w-1/2 bg-rose-600" onClick={onClose}>
                        Reject
                    </Button>
                </div>
            </div>
        </div>
  )
}

export default ProposalDetails
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const NewProposal = ({ isOpen, onClose }: ModalProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-[300px] md:w-[400px]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-indigo-900">New Proposal</h2>
                    <button onClick={onClose} className="text-2xl text-gray-600 hover:text-gray-900">&times;</button>
                </div>
                <form className="space-y-4">
                    <div>
                        <Input
                            placeholder="Investment Amount"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                            type="number"
                        />
                    </div>
                    <div>
                        <select className="w-full px-4 py-2 border rounded-lg bg-white">
                            <option value="">Investment Type</option>
                            <option value="education">Education</option>
                            <option value="health">Health</option>
                            <option value="business">Business</option>
                            <option value="Automotive">Automotive</option>
                        </select>
                    </div>
                    <Button className="w-full  text-white mt-4 py-2 rounded-lg">
                        CREATE
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default NewProposal
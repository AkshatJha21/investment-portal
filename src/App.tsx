import { useState } from 'react';
import { Users, FileText, LogOut } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Select } from './components/ui/select';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    investorName: '',
    investorId: '',
    territory: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <div className="w-full bg-gradient-to-br from-indigo-50 to-white p-6">
      <div className="max-w-md mx-auto">
        <Card className="shadow-lg border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-indigo-900">
              Investor Registration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Input 
                  placeholder="Investor Name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <Input 
                  placeholder="Investor ID"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <select className="w-full px-4 py-2 border rounded-lg bg-white">
                  <option value="">Select Territory</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <Input 
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <Input 
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">
                Sign Up
              </Button>
            </form>
            <p className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                Sign in
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

type proposal = {
  id: number
  amount: number
  type: string
  status: string
  taReviewDate: string
  adminReviewDate: string
}

interface DashboardProps {
  proposals: proposal[]
}

const DashboardTable = ({ proposals }: DashboardProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['Proposal ID', 'Investment Amount', 'Investment Type', 'Territory Admin', 'TA Reviewed on', 'Admin', 'Admin Reviewed on', 'Status'].map((header) => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {proposals.map((proposal) => (
            <tr key={proposal.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {proposal.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${proposal.amount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  proposal.type === 'Education' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                }`}>
                  {proposal.type}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {proposal.status === 'Verified' ? '✓' : '○'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {proposal.taReviewDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {proposal.status === 'Verified' ? '✓' : '○'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {proposal.adminReviewDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  proposal.status === 'Verified' ? 'bg-green-100 text-green-800' :
                  proposal.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {proposal.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  
  return (
    <div className="h-screen bg-gradient-to-br from-indigo-50 to-white flex justify-center items-center">
      {currentPage === 'login' && <RegistrationForm />}
      {currentPage === 'dashboard' && (
        <div className="p-6">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-indigo-900">Welcome, Investor</h1>
              <p className="text-gray-600">Territory B</p>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              New Proposal
            </Button>
          </header>
          <DashboardTable proposals={[]} />
        </div>
      )}
    </div>
  );
}
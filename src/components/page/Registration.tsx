import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Link } from 'react-router-dom';
import Navbar from './AuthNavbar';

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
        <div>
            <Navbar />
            <div className="h-screen flex items-center bg-gradient-to-br from-indigo-50 to-white p-6">
                <div className="w-1/3 mx-auto">
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
                        <Link to={'/'}>
                            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-4 py-2 rounded-lg">
                            Sign Up
                            </Button>
                        </Link>
                    </form>
                    <div className="flex justify-center text-center mt-4 text-sm text-gray-600">
                        <p>
                            Already have an account? &nbsp;
                        </p>
                        <Link to={'/signin-investor'}>
                            <p className="text-indigo-600 hover:text-indigo-800">
                            Sign In
                            </p>
                        </Link>
                    </div>
                    </CardContent>
                </Card>
                </div>
            </div>
        </div>
    );
  };
export default RegistrationForm
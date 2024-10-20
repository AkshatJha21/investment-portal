import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Link } from 'react-router-dom';
import Navbar from './AuthNavbar';

interface LoginProps {
    title: string;
    next: string;
    route: string;
}

const Login = ({ title, route, next }: LoginProps) => {
  return (
    <div>
        <Navbar />
        <div className="h-screen flex items-center bg-gradient-to-br from-indigo-50 to-white p-6">
            <div className="w-1/3 mx-auto">
            <Card className="shadow-lg border-0">
                <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-indigo-900">
                    {title} Login
                </CardTitle>
                </CardHeader>
                <CardContent>
                <form className="space-y-4">
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
                    <Link to={`${next}`}>
                        <Button className="w-full text-white mt-4 py-2 rounded-lg">
                            Sign In
                        </Button>
                    </Link>
                </form>
                <div className="flex justify-center text-center mt-4 text-sm text-gray-600">
                    <p>
                        Don't have an account? &nbsp;
                    </p>
                    <Link to={`${route}`}>
                        <p className="text-blue-600 hover:text-indigo-800">
                        Sign Up
                        </p>
                    </Link>
                </div>
                </CardContent>
            </Card>
            </div>
        </div>
    </div>
  )
}

export default Login
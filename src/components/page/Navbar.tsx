import { Link } from "react-router-dom"
import { Button } from "../ui/button"


const Navbar = () => {
  return (
    <div className='w-full p-6'>
        <div className='flex items-center justify-end space-x-6'>
            <Link to={'/signin-investor'}>
                <Button variant={'destructive'}>
                    Logout
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
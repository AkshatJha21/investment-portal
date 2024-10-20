import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute w-full p-6'>
        <div className='flex items-center justify-end space-x-6'>
            <Link to={'/signin-investor'}>
                <Button>
                    Investor Login
                </Button>
            </Link>
            <Link to={'/signin-territory'}>
                <Button>
                Territory Admin Login
                </Button>
            </Link>
            <Link to={'/signin-caf'}>
                <Button>
                CAF Admin Login
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
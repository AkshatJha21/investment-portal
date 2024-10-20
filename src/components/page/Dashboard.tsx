import Navbar from "./Navbar"

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
            </div>
        </div>
    </div>
  )
}

export default Dashboard
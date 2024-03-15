
import {FaSearch} from 'react-icons/fa'

export default function Header() {
  return (
    <header className="w-screen bg-slate-300">
        <div className="flex justify-between p-5 items-center max-w-6xl mx-auto">
            <div className="flex">
                <h1 className="">Home</h1>
                <h2 className="font-semibold">Seller</h2>
            </div>
  
            <div className="flex gap-3 px-5">
                <form className="bg-slate-100 flex items-center rounded-lg">
                    <input type="text" placeholder="Search..." className="p-2  bg-transparent focus:outline-none w-24 sm:w-64" />
                    <FaSearch className=' text-xl mr-2'/>
                </form>
            
            </div>

            <ul className='flex gap-8 font-semibold'>
                <li className='hidden sm:inline'>Home</li>
                <li className='hidden sm:inline'>About</li>
                <li>SignIn</li>

            </ul>
        </div>

    </header>
  )
}

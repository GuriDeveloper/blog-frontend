import { Link, Outlet } from 'react-router-dom'
import logo from '../imgs/logo.png'
import { useState } from 'react'

function Navbar() {
    const [searchBoxVisibility, setSearchBoxVisibility] = useState(false)
    return (
        <>
            <nav className="navbar">
                <Link className='w-10' to='/'>
                    <img src={logo} />
                </Link>

                <div className={`absolute w-[100%] bg-white left-0 top-full mt-0.5 border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show ${searchBoxVisibility ? 'show' : 'hide'}`}>
                    <input
                        type='text'
                        placeholder='Search'
                        className='w-full md:w-auto bg-grey p-4 pl-6 pr-[-12%] md:pr-6 rounded-full md:pl-12'
                    />
                    <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
                </div>



                <div className='flex items-center gap-3 md:gap-6 ml-auto'>
                    <button onClick={() => setSearchBoxVisibility(!searchBoxVisibility)} className='md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center'>
                        <i className='fi fi-rr-search text-xl'></i>
                    </button>
                    <Link to='/editor' className='hidden md:flex gap-2 link'>
                        <i class="fi fi-rr-file-edit"></i>
                        <p>write</p>
                    </Link>
                    <Link className='btn-dark py-2' to='/signin'>
                        sign in
                    </Link>
                    <Link className='btn-light py-2 hidden md:block' to='/signup'>
                        sign up
                    </Link>
                </div>
            </nav>
            <Outlet />
        </>

    )
}

export default Navbar
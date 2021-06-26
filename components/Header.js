import { useState,useEffect } from 'react'
import Navbar from './Navbar'
import {HiMenuAlt2} from 'react-icons/hi'
function Header() {
    const [menu,setMenu] = useState(false)
    const [width,setWidth] = useState(769)
    
    useEffect(() => {
        
        if(window.innerWidth >= width){
            setMenu(true)
        }
        
    })
    return (
        <>
        <header className="absolute flex w-full p-5 " id="home">
           
            <div className="md:hidden"> 
                <button className="focus:outline-none"> 
                    <HiMenuAlt2 className="text-6xl text-white" onClick={() => setMenu(!menu)} />
                </button>
            </div>
            {menu && (
                <nav className="w-full p-5 bg-white rounded shadow-lg md:bg-transparent md:w-auto md:p-0 md:shadow-none md:rounded-none"> 
                <Navbar />
            </nav>
            )}
        </header>
            
        </>
    )
}

export default Header

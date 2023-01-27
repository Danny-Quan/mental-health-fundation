import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
    const toggleNav=()=>{
        const navItems= document.querySelector('.nav--items');
        const nav= document.querySelector('nav')
            nav.classList.toggle('nav--active')
            navItems.classList.toggle('navItems--on')
        }
  return (
    <div>
<nav className='flex lg:flex-row md:flex-row flex-row justify-between xl:items-center lg:items-center md:items-center  p-5 pr-10 shadow-md rounded-lg top-0 bg-white w-screen transition-all duration-300'>
    <div className='brandName'>
        <h2 className='capitalize font-bold text-2xl text-primary'><Link to={'/'}>Mental Life fundation</Link></h2>
    </div>
    <button onClick={toggleNav} className="hamburger text-2xl font-bold px-3 absolute right-5">
        &#9776;
    </button>
    <ul className='nav--items flex lg:flex-row md:flex-row flex-col justify-around text-slate-500 items-center font-bold'>
        <li onClick={toggleNav} className='px-5 hover:text-primary transition-all duration-200'><button><Link to={'/'}>Home</Link></button></li>
        <li onClick={toggleNav} className='px-5 hover:text-primary transition-all duration-200'><button><Link to={'/about-us'}>About</Link></button></li>
        <li onClick={toggleNav} className='px-5 hover:text-primary transition-all duration-200'><button><Link to={'/services'}>Services</Link></button></li>
        <li onClick={toggleNav} className='px-5 hover:text-primary transition-all duration-200'><button><Link to={'/blog'}>Events</Link></button></li>
        <li onClick={toggleNav} className='px-5 hover:text-primary transition-all duration-200'><button><Link to={'/contact-us'}>Contact</Link></button></li>
        <li ><button onClick={toggleNav} className='px-5 py-2 border-2 text-primary border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-200'><Link  to={'/support-us'}>Support Us</Link></button></li>
    </ul>

</nav> 
</div> 
)
}

export default Navigation
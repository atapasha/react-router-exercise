import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='flex justify-between bg-purple-400'>
            <div>
                <Link to={{ pathname: '/', hash: '#leelawebdev' }}> React Router</Link>
            </div>
            <div>
                <ul className='flex  '>
                    <li className='mr-2'><NavLink to='/' activeClassName='text-white' exact>Home</NavLink></li>
                    <li className='mr-2'><NavLink to='/about' activeClassName='text-white'>About</NavLink></li>
                    <li className='mr-2'><NavLink to='/contact' activeClassName='text-white'>Contact</NavLink></li>
                    <li className='mr-2'><NavLink to='/posts' activeClassName='text-white'>Posts</NavLink></li>
                </ul>
            </div>


        </div>
    )
}

export default Header
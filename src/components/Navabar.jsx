import React from 'react'
import NetflixLogo from '../images/netflixLogo.png'

function Navabar() {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full'>
        <img src={NetflixLogo} alt="" className='w-[250px] h-full pl-7'/>
        <div>
            <button className='bg-red-600 text-white text-xl font-bold px-7 py-2 mr-[65px] rounded cursor-pointer'>Sign In</button>
        </div>
    </div>
  )
}

export default Navabar
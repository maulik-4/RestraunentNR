import React, { useState } from 'react'

const Navigation = () => {
    const [LoginBtn,setLoginBtn] = useState("login");
  return (
   <div className='flex justify-between w-full h-10vh px-10 py-3 align-center items-center'>
    <div className="nav_left">
      
            <img className='h-[20vh] w-[10VW] object-contain' src="https://cdn.dribbble.com/userupload/33218438/file/original-cf7fe0d0583e23573b7a1422669c87f0.jpg?resize=1600x1280&vertical=center" alt="" />
      
    </div>
    <div className="nav_right ">
        <ul className='flex justify-between items-center w-1/2 gap-20'> 
            <li>Home</li>
            <li>Menu</li>
            <li>Services</li>
            <li>Contact</li>
            <button className='px-3 py-3 bg-blue-400' onClick={()=>{
                LoginBtn === "login" ? setLoginBtn("Logout") : setLoginBtn("login");
            }}>{LoginBtn}</button>
        </ul>
    </div>
   </div>
  )
}

export default Navigation
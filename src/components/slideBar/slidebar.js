import React, { useState } from 'react'
import img from '../../assets/control.png'
import Login from '../login/login';
import Home from '../home';
import Mentor from '../getMentor/mentor';
import FolderIcon from '@mui/icons-material/Folder';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import Add from '../addMentor/addMentor';
import Edit from '../updateMentor/updateMentor'
function Slidebar() {
  const [open, setOpen] = useState(true);
  
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
    console.log("Selected Menu Item:", index);  };
  const menus = [
  
    {
      title:"Home",
      icon:<GroupIcon/>,
      gap:false,
      component: <Mentor />,
      
    },
    {
      title:"Group",
      icon:<FolderIcon/>,
      gap:false,
      component: <Add />,
    },
    
    {
      title:"Folder",
      icon:<FolderIcon/>,
      component: <Login />,
    },
    {
      title:"Log out",
      icon:<LogoutIcon/>,
      gap:true,
      component: <Edit />,
    },
  ]
  return (
    <div className='flex'>
      <div className={`${open ? 'w-72' : 'w-20'}  duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}>
        <img src={img} 
        className={`absolute cursor-pointer rounded-full
        -right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}>

        </img>
        <div className='flex gap-x-4 items-center'>
          <img src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-469.jpg' 
          className={`cursor-pointer duration-500 rounded-full w-12 h-12 `}></img>
          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0" }`}>Mentor</h1>
        </div>  
        <ul className='pt-6'>
          {menus.map((Menu, index)=>(
            <li
               key={index}
               onClick={() => handleMenuItemClick(index)}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
              >
              {Menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className='h-screen w-screen'>
        {selectedMenuItem !== null && menus[selectedMenuItem].component}
      </div>
    </div>
  )
}

export default Slidebar
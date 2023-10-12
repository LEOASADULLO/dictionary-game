import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaPlusSquare,
  FaLaptop,
  FaFile,
  // FaDoorClosed,npm 
  // FaArrowAltCircleDown,
  // FaArrowAltCircleUp,
  
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    // const [subNav,setsubNav]= useState(false)
    // const showSubNav =()=> setsubNav(!subNav)
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/admin",
      name: "Admin",
      icon: <FaUserAlt />,
    },
    {
      path: "/crud",
      name: "CRUD",
      icon: <FaPlusSquare />,
    //   iconClosed:<FaArrowAltCircleDown/>,
    //   iconOpened:<FaArrowAltCircleUp/>,
      subNav:[
        {
            title:'catalogue',
        }, 
        {
            title:'product',
        }
      ]
    },
    {
      path: "/elements",
      name: "Elements",
      icon: <FaLaptop/>, 
    },
    {
      path: "/pages",
      name: "Pages",
      icon: <FaFile />,
    },
  ];
  return (
    <div className="container">
      <div style={{width:isOpen? "300px" : "50px"}}className="sidebar">
        <div className="top-section">
            <h1 style={{display:isOpen? "block" : "none"}} className="logo">#F4food</h1>
            <div style={{marginLeft:isOpen? "50px" : "0px"}} className="bars">
                <FaBars onClick={toggle}/>
            </div>
        </div>
        {
            menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display:isOpen? "block" : "none"}} className="link_text">{item.name}</div>
                    {/* <div>
                        {item.subNav && subNav ? item.iconOpened:item.subNav ? item.iconClosed:null}
                    </div> */}
                </NavLink>
            ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;

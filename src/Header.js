import React,{useState} from 'react'
import icon from '../src/assets/BI.jpeg'
import fire from '../src/assets/fire.jpg'
import arrow from '../src/assets/arrow.png'
import nature from '../src/assets/nature.jpg'
import { BsCircle } from "react-icons/bs";
import { AiOutlineStar,AiOutlineBulb } from "react-icons/ai";
import { GiFullWoodBucket } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import profile from '../src/assets/profile.png'





function Header(props) {
    const [bucketIcon,setBucketIcon] = useState(2)
    const [notification,setNotification] = useState(5)

    return (
        <div className='header'>
          <div style={{display:'flex',alignItems:'center'}}>
            <img src={icon} height={40} width={40}></img>
            <div style={{fontWeight:'bold',fontSize:30,color:props.color}}>CUBA</div>
            <img src={fire} height={40} width={40} style={{paddingLeft:50}}></img>
            <div className='flex_row'>
                <div style={{color:'blue',paddingRight:5}}>Don't Miss Out!</div>
                <div>Out new update has been release.</div>
                <img src={arrow} height={20} width={10} className='arrow' ></img>
            </div>
          </div>
          <div className='language'>
            <div className='flex_row'>
               <img src={nature} height={20} width={30} style={{paddingRight:4}}></img>
               <div>EN</div>
            </div>
            <BsCircle size={30} />
            <AiOutlineStar size={30}  />
            <AiOutlineBulb size={30} />
            <div>
                {bucketIcon>0 && 
               <div style={{backgroundColor:'green'}} className='notifications'>
                   <div style={{color:'white',fontWeight:'bold'}}>{bucketIcon}</div>
               </div>}
               <GiFullWoodBucket size={30} style={{marginTop:bucketIcon>0 ? -15 : 0}}/>
            </div>
            <div>
            {notification>0 && 
               <div style={{backgroundColor:'red'}} className='notifications'>
                   <div style={{color:'white',fontWeight:'bold'}}>{notification}</div>
               </div>}
            <IoMdNotificationsOutline size={30} style={{marginTop:notification>0 ? -15 : 0}}/>
            </div>
            <div className='profile_icon'>
               <img src={profile} className='profile'></img>
               <div className='flex_column'>
                   <div>Swathi</div>
                   <select className='select'>
                       <option value='admin'>Admin</option>
                       <option value='member'>Member</option>
                    </select>
               </div>
            </div>

          </div>

        </div>
    )
}

export default Header

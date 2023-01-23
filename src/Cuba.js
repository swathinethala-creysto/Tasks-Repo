import React,{useState} from 'react'
import Header from './Header'
import SubHeader from './SubHeader'
import { AiOutlineLike } from "react-icons/ai";
import g4 from '../src/assets/g4.jpeg'
import mix_layout from '../src/assets/mix_layout.png'
import { AiOutlineStar } from "react-icons/ai";
import { TfiPaintBucket } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";
import { BsBagPlus } from "react-icons/bs";
import Footer from './Footer';
import './Cuba.css'


function Cuba() {
    const details=[{icon:AiOutlineLike,name:'Purchase',number:'10,000',color:'red'},
                   {icon:AiOutlineStar,name:'Sales',number:'4,200',color:'blue'}]
    const icons=[{icon:TfiPaintBucket},{icon:CiSettings},{icon:BsBagPlus},{icon:TfiPaintBucket},{icon:CiSettings},{icon:BsBagPlus}]
    const LightLayout=['#5f94e8','#2a64bf','#c46ad9','#5727db','#533f8a','#2c156b']
    const DarkLayout=['#5f94e8','#2a64bf','#c46ad9','#5727db','#533f8a','#2c156b']
    const [color, setColor] = useState('blue')
    const [main,setMain] = useState('')

    return (
        <div>
            <Header color={color}/>
            <div className='subHeader'>
                <SubHeader color={color}/>
                <div className='preview_settings'>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                    <div style={{fontWeight:'bold',fontSize:30,color:color}}>PREVIEW SETTINGS</div>
                    <div style={{display:'flex',flexDirection:'row',paddingTop:15}}>
                       <div>Try It Real Time</div>
                       <AiOutlineLike style={{color:'blue'}} />
                    </div>
                    </div>
                        <div style={{paddingTop:'35%'}}>
                            <div style={{paddingBottom:12}}>UNLIMITED COLOR</div>
                            <div style={{display:'flex',flexDirection:'row'}}>
                                <div className='unlimited_box' style={{backgroundColor:'blue',border:main==='blue' ? 'solid black 3px' : ''}} onClick={()=>{setMain('blue')}}></div>
                                <div className='unlimited_box' style={{backgroundColor:'red',border:main==='red' ? 'solid black 3px' : ''}} onClick={()=>{setMain('red')}}></div>
                                <div className='apply' onClick={()=>{setColor(main)}}>
                                 Apply
                                </div>
                            </div>
                        </div>
                        <div style={{paddingTop:'20%',paddingBottom:'20%'}}>
                            <div style={{paddingBottom:12}}>LIGHT LAYOUT</div>
                            <div className='layout'>
                            {LightLayout.map((light)=>{
                                return (
                                    <div className='layout_colors' style={{backgroundColor:light}} onClick={()=>{setColor(light)}}></div>
                                )
                            })}
                            </div>
                        </div>
                        <div style={{paddingBottom:'25%'}}>
                            <div style={{paddingBottom:12}}>DARK LAYOUT</div>
                            <div className='layout'>
                            {DarkLayout.map((dark)=>{
                                return (
                                    <div className='layout_colors' style={{backgroundColor:dark}} onClick={()=>{setColor(dark)}}></div>
                                )
                            })}
                            </div>
                        </div>
                        <div >
                            <div style={{paddingBottom:12}}>MIX LAYOUT</div>
                            <div className='layout'>
                            <img src={mix_layout} height={100} width={300}></img>
                            </div>
                        </div>

                </div>
            </div>
            <div style={{paddingTop:50,paddingLeft:10}}>
                <div className='default' style={{color:color}}>Default</div>
                <div style={{display:'flex',flexDirection:'row',padding:5}}>
                    <div className='card' style={{backgroundColor:color}}>
                        <div className='sub_card'>
                           <div className='welcome'>Welcome to cuba</div>
                           <div className='down_text'>Here whats happening in your account today</div>
                           <div className='box'>
                              <div style={{color:'white',fontWeight:'bold'}}>What's New !</div>
                           </div>
                        </div>
                        <img src={g4} height={200} width={150} style={{paddingTop:50,borderRadius:'0px 0px 20px 0px'}}></img>
                    </div>
                    <div className='details'>
                        {details.map((circle)=>{
                            return(
                                <div className='details_icon'>
                                    <div className='circle' style={{border:`solid ${circle.color} 1px`}}>
                                       <circle.icon size={30} style={{color:circle.color}}/>
                                    </div>
                                    <div className='mid_circle'>
                                        <div className='circle_number'>{circle.number}</div>
                                        <div>{circle.name}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='icons'>
                    {icons.map((iconName)=>{
                        return(
                            <iconName.icon size={28} />
                        )
                    })}
                    </div>
                </div>
                {/* <userDetailContext.Provider value={color}> */}
                    <Footer color={color}/>
                {/* </userDetailContext.Provider> */}

            </div>
        </div>
    )
}
               
export default Cuba

import React,{useState} from 'react'
import { MdOutlineHome,MdOutlineWidgets } from "react-icons/md";
import { BiRectangle } from "react-icons/bi";
import { AiOutlinePlusCircle,AiOutlineFileSync } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";


function SubHeader() {
    const [dashboard, setDashboard] = useState(5)
    const [widgets, setWidgets] = useState(1)
    const [pageLayout, setPageLayout] = useState(2)
    const [project, setProject] = useState('New')
    const [fileManager, setfileManager] = useState(2)
    const [kanbanBoard, setKanbanBoard] = useState('Late')

    const subHeaders=[{name:'Dashboards',icon:MdOutlineHome,notification:true,variable:dashboard,color:'blue',bg:'#e6e7eb',width:'22px',ml:'140px'},
                   {name:'Widgets',icon:MdOutlineWidgets,notification:false,variable:widgets,color:'blue',bg:'#e6e7eb',width:'18px',ml:'140px'},
                   {name:'Page Layout',icon:BiRectangle,notification:false,variable:pageLayout,color:'blue',bg:'#e6e7eb',width:'18px',ml:'140px'},
                   {name:'Project',icon:AiOutlinePlusCircle,notification:true,variable:project,color:'red',bg:'#f5ebe9',width:'35px',ml:'100px'},
                   {name:'File Manager',icon:AiOutlineFileSync,notification:false,variable:fileManager,color:'blue',bg:'#e6e7eb',width:'18px',ml:'140px'},
                   {name:'Kanban Board',icon:CiSquarePlus,notification:true,variable:kanbanBoard,color:'red',bg:'#f5ebe9',width:'40px',ml:'120px'}]
    return (
        <div className='sub_headers'>
            {subHeaders.map((subHeader,index)=>{
               return (
                   <div>
                        <div style={{backgroundColor:subHeader.notification ? subHeader.bg : '',color:subHeader.color,width:subHeader.width,marginLeft:subHeader.ml}} className='dashboard_notification' >
                       {subHeader.notification && (subHeader.variable>0 || subHeader.variable!=='') && 
                            <div style={{fontWeight:'bold'}}>{subHeader.variable}</div>
                        }
                        </div>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <subHeader.icon size={30} style={{paddingRight:15}}/>
                            <div>{subHeader.name}</div>
                        </div>
                   </div>
               )
            })}
        </div>
    )
}

export default SubHeader

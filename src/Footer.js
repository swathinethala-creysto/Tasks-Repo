import React,{useState} from 'react'
import Design from './Design';

function Footer(props) {
    const [orders, set0rders] = useState('1,80k')
    const [profit, setProfit] = useState('6,90k')

    return (
        <div className='footer'>
            <div style={{display:'flex',marginRight:53,flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'48%',paddingRight:'5%',boxShadow:' 2px 3px 8px 5px rgb(241, 238, 238)',padding:20,borderRadius:18}}>
            <div >
                <div className='welcome' style={{color:'black',paddingBottom:10}}>{orders}</div>
                <div>Orders</div>
            </div>
            <div><Design color={props.color}/></div>
            </div>
            <div style={{display:'flex',flexDirection:'row',height:'80%',justifyContent:'space-between',alignItems:'center',width:'50%',paddingRight:'5%',boxShadow:' 2px 3px 8px 5px rgb(241, 238, 238)',padding:20,borderRadius:18}}>
            <div>
            <div className='welcome' style={{color:'black',paddingBottom:10,paddingRight:'10%'}}>{profit}</div>
            <div>Profit</div>
            </div>
            </div>
        </div>
    )
}

export default Footer

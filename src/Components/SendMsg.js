import React,{useState} from 'react'
import './SendMsg.css';
import { Formik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
// import tick from '../src/assets/tick.png';
// import { msgPreview } from './AppConstants';

const imageSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaPoukl7yUBCOtpkC4dUPIhplZnivWR9njQ&usqp=CAU'
const videoSrc =  `data:image/jpeg;base64,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`
const docSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUYAAACaCAMAAADighEiAAAAZlBMVEXi4uJYWFhSUlLn5+dJSUnq6uqUlJTb29uRkZFVVVVQUFBOTk5fX1/f399jY2OoqKh0dHR6enq4uLiFhYVoaGiurq7W1tbw8PDCwsK5ubmenp5tbW2MjIzLy8uCgoKqqqpDQ0P39/d4mNL2AAAFEUlEQVR4nO3caXPaOhiGYUneeL1L3uWF5P//yUqGTjnFHU6pM5Yzz/WBUseQcI+EZZwJYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzvG+hcMrKh2e37U9NmQ2pSTOj5fDkRW9SRD/DiifD6yo0u9RkXOxZMdl1N+lohEdl/Eijn7xu/GRcQ/IuAtk3AUy7gIZd4GMu0DGXSDjLpBxF8i4C2TcxYkyCoc/EDpRxjxPvyjCvztDRiHWj3dNRvMP1S4OypNktHuuGWmU45cGec8ZMtJtONqMRLLMMRr/PqNtRutwXEfjWI4OVnQ+Y7rEdJvWZDKKuixtRZE6tlZyPKPPsnkxM/qeMS2lmdKUlqVjb5COZ0zmKGODpHg9yPB0LGMTUZZl/eVl/orjGTnXM8tYWN93FWlay1LWfOOhFG+9a66/T7Dxhe293+V8RiGbKGt/HVdSKcd6s9fYTM/bqb5epuL5sET11t6bKHm9o/MZzQCUffGwZ53/4dXKoIk3trJhYMtzxnJr783nXXr5sqPbGYVvfdDjWSAlq6fHkvTWMGQeIdbbxOz7MWaDORm3TxPfnm5dQfkftdckid3IzW0izJ3YX79u/uubB5o7dPv2E1te/qBOZxRTtv6uluc/bKyn1fL7oLxnpDzoulCMXfc5p3X76XVKZQ0zG69Cd13gmblMMuo8rxnb7lMR9V03V0zRwIooC7o2+8x43ZuH8yIwD9PtJ9t8FzlNxrjJVuy/GStjqv6QkbdzrlhZNKLw8iuTU6BUW7DZ76NL2/s9q4inKhpDk7fNdRBqtox9EzVCRbqNkt5bdDcVUTl6hQ6KPOsXJs89Gmksbh4zmkWj9bTiuWW0t/6FhbJQrZfObT22NmOm+WBiFkJnFVE9zzVn/dznZu+hrYUv7xkHUpEMg6nPVOHNOls+or6y5c+c0axW4ljEH+Xje3ydxubUeuOYfM/IbMbLHIU9WzNGa8bi94zpQ0ZaMzY2Ix9uGaOrDiuzs/8dMlpJHrb9w57hRW5EXDNeP8wxw6RTbMzmcfbSIpiWYLCTuuB9O7Vmant2UjesnMykjnLdXTSr4nkw833OfmUsMpnPzS3jxOTLY7rrGSm9zFnWlj/DkdRaT1trHpJZ13VeSKzzJv/aBW028d4cSlRzn9Tl5AVZZDKSOYIEWVPPXVeIWJlDTF2YY0trM6rWZKzSoesyUUQ2YxkFL5eYjmckObOoLZJxqrmdyelCdRVqXW3tuy5PBF9vYrtyIbuY8eM4ie2WJC1Tv2jtGwSt2+2t+RHi+9rGLKISs+yx94liu+wRZuGdJHRbJJ05Y9Kz9ioTHg5FuixjHeoxpnLS+vWK+Dlz3ZphObxcvLzD8Yxiai6poHIYLkINmiY9pea8pnxa7vwfYrk2+ms+rnQ84+1yYNKo65goFSal1vaUgt67HkPmuP81H/q6nnF99dIOxthkFKLSl3cG4lc7Q8ZUKZ3yNSPnZjg6eBXhBBlpVMoseG4ZSYaVg5erT5CRJ1OV8J+jkXBl8M2MfD1rERe1rnIcjHiSjDepY5exHp0oo5vj8OZMGR2GjLtAxl0g4y6QcRfIuAtk3AUy7gIZd4GMu0DGXRyZMXT4JPkviQMzXh38/PU9VB73d3hY+8ZVUjdRc1xF5vX5t3h3JAqPm9NWO3H/9JJSHTilV17wHRz+BxwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+xQ+6QYSVJPaCXgAAAABJRU5ErkJggg==`

const msgPreview = {}

const typeOptions={Text:[{id:10,type:'autoreply000'},{id:23,type:'test'},{id:24,type:'subscription_message'},{id:25,type:'custom_text'},{id:28,type:'loan_statement_dynamic'},{id:29,type:'autoreply0001'},{id:30,type:'autoreply0002'},{id:31,type:'Ish_reply'},{id:35,type:'Template_2'},{id:36,type:'Bnb'}],
                   Image:[{id:8,type:'image2'},{id:9,type:'test_image2'}],
                   Video:[{id:1,type:'auto_reply_to_customer'},{id:2,type:'video_template'},{id:3,type:'video_template1'}],
                   Document:[{id:4,type:'statement'},{id:5,type:'Ish_doc'}],Others:[]}
const initialValues = { number:'',templateType:'',type:'' }
const templateTypeOptions=['Text','Image','Video','Document','Others']

function SendMsg() {
    const [popUp, setPopUp] = useState(true)
    const [templateType, setTemplateType] = useState('')
    const [type, setType] = useState('')
    const [options,setOptions]=useState([])
    const [responseArray, setResponseArray] = useState([])
    const [number, setNumber] = useState('')
    const [success, setSuccess] = useState(false)
    const [details, setDetails] = useState('')
    const [message, setMessage] = useState('')
    const [header, setHeader] = useState('')
    let FormData_TemplateType=new FormData()
    let FormData_id=new FormData()


    const schema = Yup.object().shape({
        number: Yup.string().matches(/^[6-9]\d{9}$/, 'Please Enter valid mobile no.!'),
        templateType: Yup.string().required(),
        type: Yup.string().required(),

      });

    const validate = (values) => {
        const errors = {};
        if (!values.number) {
           errors.number = 'Please enter valid mobile no. !';
        }
       
        else if (!values.templateType) {
           errors.templateType = 'Required';
        }
         else if (!values.type) {
           errors.type = 'Required';
        }      
        return errors;
     }

     const templateTypesAPI=(template_type)=>{
          FormData_TemplateType.append('temp_name',template_type)
          axios.post('http://216.48.182.12:5555/templist/',FormData_TemplateType)
         //  axios.get('https://whatsappuat.hagnosoft.com/sendimage?number=9876543444&t_data=%7B%22t_type%22:%22Image%22,%22t_name%22:%22test_image2%22,%22t_header%22:%22%22,%22t_body%22:%22Dear%2520Dev%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520thanks%2520for%2520choosing%2520Sky%2520Airlines%22,%22t_footer%22:%22%22,%22t_link%22:%22https:%2F%2Fimage.shutterstock.com%2Fimage-illustration%2Fmovie-ticket-icon-260nw-663331288.jpg%22%7D')
          .then(res=>{
            //  console.log('ress',res)
            //  setOptions(typeOptions[e.target.value])
            setOptions(res.data.map(item=>{
               return {
                  id:item[0],
                  type:item[1]
               }
            }))
          })
          .catch(err=>{
             console.log('err',err)
          })
     }

     const getTemplateDetails=(id)=>{
         //   console.log('idddd',id)
           FormData_id.append('template_id',id)
           axios.post('http://216.48.182.12:5555/tempval/',FormData_id)
            .then(res=>{
               console.log('ress-----',res)
               setDetails(res.data)
               setResponseArray(res.data[0])
            })
            .catch(err=>{
               console.log('err',err)
            })
     }

// console.log('response arrr',responseArray)

     const handleSubmit = (values, setSubmitting) => {
        setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
        }, 400);
     }

     const handleChangeOptions=(e,type)=>{
         if(type==='templateType'){
        //  console.log('event',e.target.value)
         setType('')
         setTemplateType(e.target.value)
         setOptions(typeOptions[e.target.value])
         }
         else{
             setType(e.target.value)
         }
     }

     const handleClose=()=>{
         setType('')
         setTemplateType('')
         setPopUp(false)
         setSuccess(false)
         setResponseArray([])
     }

    const onSend=(values)=>{
      // setSuccess(true)
   //   axios.get('https://whatsappuat.hagnosoft.com/sendimage?number=9876543444&t_data=%7B%22t_type%22:%22Image%22,%22t_name%22:%22test_image2%22,%22t_header%22:%22%22,%22t_body%22:%22Dear%2520Dev%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520thanks%2520for%2520choosing%2520Sky%2520Airlines%22,%22t_footer%22:%22%22,%22t_link%22:%22https:%2F%2Fimage.shutterstock.com%2Fimage-illustration%2Fmovie-ticket-icon-260nw-663331288.jpg%22%7D')

   //  console.log('values-send',values,values.templateType,typeOptions[values.templateType])
    sendMessageAPI(values)  
    }

    const sendMessageAPI=(payload)=>{
         // const t_type=payload.type
          console.log('payload',payload)
          const t_data={"t_type":payload.templateType,"t_name":payload.type,"t_header":responseArray[4],"t_body":responseArray[2],"t_footer":responseArray[5]}
         let url=''
          switch(payload.templateType){
             case 'Text': url=`http://216.48.182.12:5555/send?number=${payload.number}&t_data=%7B"t_type":${JSON.stringify(payload.templateType)},"t_name":${JSON.stringify(payload.type)},"t_header":${JSON.stringify(responseArray[4])},"t_body":${JSON.stringify(responseArray[2])},"t_footer":${JSON.stringify(responseArray[5])}%7D`
                          break;
             case 'Image': url=`http://216.48.182.12:5555/sendimage?number=${payload.number}&t_data=%7B"t_type":${JSON.stringify(payload.templateType)},"t_name":${JSON.stringify(payload.type)},"t_header":${JSON.stringify(responseArray[4])},"t_body":${JSON.stringify(responseArray[2])},"t_footer":${JSON.stringify(responseArray[5])},"t_link":${JSON.stringify(responseArray[6])}%7D`
                          break;       
             case 'Video': url=`http://216.48.182.12:5555/sendvideo?number=${payload.number}&t_data=%7B"t_type":${JSON.stringify(payload.templateType)},"t_name":${JSON.stringify(payload.type)},"t_header":${JSON.stringify(responseArray[4])},"t_body":${JSON.stringify(responseArray[2])},"t_footer":${JSON.stringify(responseArray[5])},"t_link":${JSON.stringify(responseArray[6])}%7D`
                          break;
             case 'Document':url=`http://216.48.182.12:5555/senddoc?number=${payload.number}&t_data=%7B"t_type":${JSON.stringify(payload.templateType)},"t_name":${JSON.stringify(payload.type)},"t_header":${JSON.stringify(responseArray[4])},"t_body":${JSON.stringify(responseArray[2])},"t_footer":${JSON.stringify(responseArray[5])},"t_link":${JSON.stringify(responseArray[6])}%7D`
                          break;
             case 'Others':url=''
                          break;
          }
         
         // let url=`https://216.48.182.12:5555/send?number=${payload.number}&t_data=${JSON.stringify(t_data)}`

          axios.get(url)
          .then(res=>{
             setSuccess(true)
             console.log('ress',res)
             
                setHeader('Message Sent')
                setMessage('Message Sent Successfully...')
          })
          .catch(err=>{
             setSuccess(true)
             console.log('err',err)
             setHeader('Error')
             setMessage(err.response.data.message)
          })
          console.log('payload-after',payload)

    }

    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:popUp ? 'grey' : 'white', height:responseArray.length ? '150vh':'100vh' }}>
            <div style={{fontWeight:'bold'}}>Whatsapp API Application</div>
            <div style={{backgroundColor:'#08a0ff',borderRadius:20,padding:7,color:'white',marginTop:10,cursor:'pointer'}} onClick={()=>{setPopUp(true)}}>send message</div>
            {popUp &&
                <div id="expenseForm" style={{backgroundColor:success ? 'lightgrey' : 'white',width:'35%',marginTop:-35}}>
                <Formik
                   initialValues={initialValues}
                   validationSchema={schema}
                   validate={values => validate(values)}
                   onSubmit={onSend} >
                   {
                      ({
                         values,
                         errors,
                         touched,
                         handleChange,
                         handleBlur,
                         handleSubmit,
                         isSubmitting,
                         /* and other goodies */
                      }) =>
                      (
                       <>
                        <div className='' style={{display:'flex',flexDirection:'row',justifyContent:'space-between',backgroundColor:success ? 'lightgrey' :'white',marginBottom:20,paddingTop:20,paddingBottom:20,borderBottom:'1px solid #dee2e6'}}>
                           <label style={{paddingLeft:20,paddingRight:20,fontWeight:'bold'}}>Send message on Whatsapp</label>
                           <label style={{paddingLeft:20,paddingRight:20}} onClick={()=>{handleClose()}}>x</label>
                        </div>
                         <form onSubmit={handleSubmit} style={{paddingLeft:20,paddingRight:20,paddingBottom:20}}>
                             <label style={{color:'red'}}>*</label>
                            <label for="number">Mobile Number </label>
                            <input type="text" id="number" name="number" placeholder="Enter the mobile number" style={{outline:errors.number ? '4px solid rgb(177, 212, 231)' : ''}}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.number} />
                            <div style={{color:'red',fontSize:15,justifyContent:'flex-end',display:'flex',marginTop:-8}}>{errors.number && touched.number && errors.number}</div>

                            <label style={{color:'red'}}>*</label>
                            <label for="templateType">Template Type </label>
                            <select id="templateType" name="templateType"
                                 onChange={(e)=>{handleChange(e);
                               
                                 values.type=''
                                 templateTypesAPI(e.target.value)
                              }}
                               onBlur={handleBlur}
                               value={values.templateType}
                               style={{outline:errors.number ? '4px solid rgb(177, 212, 231)' : ''}}  
                               >
                               <option value="">--select--</option>
                               {templateTypeOptions.map((option)=>{
                                   return(
                                     <option value={option}>{option}</option>
                                   )
                               })}
                            </select>
                           
                            <label style={{color:'red'}}>*</label>
                            <label for="type">Template </label>
                            <select id="type" name="type"
                               onChange={(e)=>{handleChange(e);
                                 let id=''
                                 setResponseArray([])
                                 options.forEach((item)=>{
                                    // console.log(item)
                                    if(item.type == e.target.value){
                                       getTemplateDetails(item.id)
                                    }
                                 })
                                 // typeOptions[values.templateType].forEach(ele => {
                                 //    // console.log('eleee',ele.type,values.type)
                                 //    if(ele.type===e.target.value){
                                 //       id=ele.id
                                 //       getTemplateDetails(id)
                                 //    }
                                 // });
                              }}
                               onBlur={handleBlur}
                               value={values.type}
                               style={{outline:errors.number ? '4px solid rgb(177, 212, 231)' : ''}}
                               >
                               <option value="">--select--</option>
                               {options?.map((option)=>{
                                   return(
                                     <option value={option.type}>{option.type}</option>
                                   )
                               })}
                            </select>
                            {/* {values.type!=='' && <div style={{paddingBottom:10}}>Message Preview</div>} */}
                              {responseArray.length > 0 && 
                              <div style={{}}>
                                 <div>
                                    Message preview
                                 </div>
                                 <div style={{textAlign:'center', }} className='preview_data'>
                                    <div className='bind_preview'>
                                          <p className='preview_header'>{responseArray[4].replace(/%20/g," ")}</p>
                                          {responseArray[3] != 'Text' &&  <img style={{width:'100%' ,height:'160px'}} src={responseArray[3] == 'Image' ? imageSrc : responseArray[3] == 'Video' ? videoSrc : docSrc} alt='datarender'/>}
                                          <p className='preview_body'>{responseArray[2].replace(/%20/g," ")}</p>
                                          <p className='preview_foot'>{responseArray[5].replace(/%20/g," ")}</p>
                                    </div>
                                 </div>
                              </div>
                                 }
                            {/* {values.type!=='' && <Template TemplateType={values.templateType} Type={values.type} /> } */}
                         </form>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderTop:'1px solid #dee2e6',backgroundColor:success ? 'lightgrey' :'white',padding:'10px 20px 10px 20px'}}>
                            <button type='close' onClick={()=>{handleClose()}} >Close</button>
                            <button type='submit' disabled={isSubmitting} onClick={handleSubmit}>Send</button>
                            </div>
                         </>
                      )
                   }
                </Formik>
             </div>
                }
                {success &&
                <div className='Modal' style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around',top:'26%',left:'28%',position:'absolute',height:'55%',width:'44%',borderRadius:7,zIndex:99999,backgroundColor:'white'}}>
                   {/* <img src={''} alt='alt text for image'></img> */}
                   <div style={{color:'black',fontWeight:'bold',fontSize:35}}>{header}</div>
                   <div style={{color:'grey',fontSize:30}}>{message}</div>
                   <button type='ok' onClick={()=>{handleClose()}}>OK</button>
                  </div>
                }
        </div>
    )
}

export default SendMsg
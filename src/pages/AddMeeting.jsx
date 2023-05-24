import { useState,useRef } from "react";
import '../css/pages.css'
import { useNavigate } from "react-router-dom";
function AddMeeting(){
  let titleInput = useRef();     
  let ImgInput = useRef();     
  let LinkInput = useRef();     
  let DateInput = useRef();
  let navigate=useNavigate(); 
  let [loadingStatus,setLoadingStatus]=useState(false); 
  function AddMeetingHandler(){
    setLoadingStatus(true)
    console.log("1")
          let tempMeeting={
             title: titleInput.current.value,
             img: ImgInput.current.value,
             link:LinkInput.current.value,
             date: DateInput.current.value
          }
          console.log(tempMeeting)
          fetch('https://manage-meeting-app-default-rtdb.firebaseio.com/meet.json',{
            method: 'post',
            body: JSON.stringify(tempMeeting)
          }).then(()=>{
            setLoadingStatus(false)
                navigate('/upcoming-meeting')
          })
  }
  return(
   
    <>
    
    <div className={loadingStatus==false?"add-meeting":"d-none"}>
        <h1>Add Meetings</h1>
        <div className="form">
          <input type="text" ref={titleInput} placeholder="Enter Meeting Title"/>
          <input type="text" ref={ImgInput} placeholder="Enter Meeting Image"/>
          <input type="text" ref={LinkInput} placeholder="Enter Meeting Link"/>
          <input type="datetime-local" ref={DateInput} placeholder="Enter Meeting date"/>
          <button class="cssbuttons-io-button" onClick={AddMeetingHandler}><div>Add New Meeting</div></button>
        </div>
    </div>
    <div className={loadingStatus==true?"loader":"d-none"}></div>
    
    </>
  )
}
export default AddMeeting;
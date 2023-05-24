import meetingImg from '../assets/meeting.jpeg'
import MeetingCard from '../components/MeetingCard';
import '../css/App.css'
import { useState } from "react";
import '../css/pages.css'
function Home(){
   const [meetings,setMeetings]=useState([]);
   fetch('https://manage-meeting-app-default-rtdb.firebaseio.com/meet.json').then((response=>response.json())).then(data=>{
           let tempMeeting=[]
            for(const key in data){
             let meeting={
               id:key,
               ...data[key]
             }
             tempMeeting.push(meeting)
           }
           setMeetings(tempMeeting)
           console.log(meetings)
   });
 return(
    <>
    <div className="App">
    <div className="head">
   <img src={meetingImg} className='meetingImg' />
      </div>
      <h1 class="gradient-text">Organize all your Meetings in One place </h1>
      <div className="body">
         <h3 className='today'>Today Meetings</h3>
         <div className="meeting-container">
          {
             meetings.filter((meeting)=>{
              let today=new Date();
              let meetingDate = new Date(meeting.date)
              return (meetingDate.setHours(0,0,0,0)==today.setHours(0,0,0,0))
             }).map((meeting)=>{
              const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
              let date = new Date(meeting.date);
              let fDate = date.toLocaleDateString('en',options)
              console.log('1')
              return <MeetingCard title={meeting.title} img={meeting.img} date={fDate} />
             })
          }
          </div>
      </div>
    </div>
    </>
 )
}
export default Home;
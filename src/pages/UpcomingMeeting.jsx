import { useState } from "react";
import '../css/pages.css'
import MeetingCard from "../components/MeetingCard";
MeetingCard
function UpcomingMeeting(){
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
    })
    return(
      <>
      <div>
          <h1 className="text-center">Upcoming Meetings</h1>
          <div className="meeting-container">
          {
             meetings.filter((meeting)=>{
              let today=new Date();
              return (new Date(meeting.date)>today)
             }).map((meeting)=>{
              const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
              let date = new Date(meeting.date);
              let fDate = date.toLocaleDateString('en',options)
              return <MeetingCard title={meeting.title} img={meeting.img} date={fDate} />
             })
          }
          </div>
         
          
      </div>
      </>
    )
  }
  export default UpcomingMeeting;
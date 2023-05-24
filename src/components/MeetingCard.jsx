import '../css/MeetingCard.css'
function MeetingCard(props){
 return(
    <>
    <div className="card">
        <div className="card-img">
          <img src={"https://source.unsplash.com/1600x800/?"+ props.img}/>
        </div>
        <div className="content">
            <h3>{props.title}</h3>
            <p>{props.date}</p>
        </div>
    </div>
    </>
 )
}
export default MeetingCard;
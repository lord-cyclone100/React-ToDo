import '../css/DateTime.css'

export const DateTime = (props)=>{
    return(
        <div className="date-and-time">
            <h2>Date :- {new Date().toLocaleDateString()}</h2>
            <h2>Time :- {props.setTime}</h2>
        </div>
    )
}
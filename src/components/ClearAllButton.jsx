import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

import '../css/ClearAllButton.css'

export const ClearAllButton = (props) =>{
	const [inputArr,setInputArr] = useState([]);
	const handleDeleteAll = ()=>{
		props.clrAllBtn()
	}
	return(
		<button className={props.hasItems !== 0 ? 'clr-btn-on' : 'clr-btn-off'} onClick={handleDeleteAll}><MdDeleteForever style={{fontSize:"3vh"}}/><p>Clear All</p></button>
	)
}
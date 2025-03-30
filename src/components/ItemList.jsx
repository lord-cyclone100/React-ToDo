import { useState } from "react";
import "../css/ItemList.css"
import { MdDelete,MdOutlineEdit,MdCheckBox, MdCheckBoxOutlineBlank,MdOutlineCancel,MdDone } from "react-icons/md";


export const ItemList = (props)=>{
	const {id, content, checked} = props.curTask
	const [editText, setEditedText] = useState(false);
	const [editedContent, setEditedContent] = useState(content);

	const deleteTodoElement = (e)=>{
		props.dltItem(e);
	}

	const checkTodoElement = (e)=>{
		props.chkItem(e);
	}

	const checkEdit = ()=>{
		setEditedText(!editText);
	}

	const handleEditChange = (value)=>{
		setEditedContent(value);
	}

	const handleEdit = () => {
		props.updateTask(id, editedContent);
		setEditedText(false);
	};

	return(
		<div className="outer">
			<div className="list-name">
				<div className="txt-box">
					<p className={`${checked ? "strike" : "non-strike"} ${editText ? "inv":"vis"}`}>
						{content}
					</p>
					<input type="text" className={!editText ? "edit-box-off" : "edit-mode-on"} value={editedContent} onChange={(e)=>{handleEditChange(e.target.value)}}/>
				</div>
				<div className="buttons">
					<div>
						<MdCheckBoxOutlineBlank className={checked ? "task-pending-off" : "task-pending-on"} onClick={()=>checkTodoElement(props.curTask)} style={{cursor:"pointer"}} />

						<MdCheckBox className={checked ? "task-done-on" : "task-done-off"} onClick={()=>checkTodoElement(props.curTask)} style={{cursor:"pointer"}} />

					</div>
						<MdOutlineEdit style={{cursor:"pointer"}} onClick={checkEdit} className={editText ? "inv":"vis"} />

						<MdDelete className="dlt-btn" onClick={()=>deleteTodoElement(props.curTask)} style={{cursor:"pointer"}} />

				</div>
				<div className="edit-func">
					<MdDone className={editText ? "vis":"inv"} onClick={handleEdit}/>
					<MdOutlineCancel className={editText ? "vis":"inv"} onClick={checkEdit} style={{cursor:"pointer"}} />
				</div>
			</div>
		</div>
	)
}
import { useState } from "react";
import { MdAdd } from "react-icons/md";

export const TodoForm=(props)=>{
	const [inputValue,setInputValue] = useState({id:'',content:'',checked:false});
	const handleFormSubmit = (e)=>{
		e.preventDefault();
		props.formSubmission(inputValue);
    if(!inputValue.content){
      return
    }
    setInputValue({id:'',content:'',checked:false})
  }

	const handleInputChange = (val)=>{
    setInputValue({id:Date.now(),content:val,checked:false});
  }

	return(
		<div className="inp">
			<form onSubmit={handleFormSubmit}>
				<input 
					type="text" 
					placeholder="Enter a Task"
					autoComplete='off' 
					className='inpBox' 
					value={inputValue.content} 
					onChange={(e)=>handleInputChange(e.target.value)} 
				/>
				<button type='submit' className='sub-Btn' > <MdAdd style={{fontSize:"20px",fontWeight:"600"}}/> <p>Add Item</p></button>
			</form>
		</div>
	)
}
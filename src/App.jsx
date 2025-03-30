import { useEffect, useState } from 'react'
import { ItemList } from './components/ItemList';
import { Heading } from './components/Heading';
import { DateTime } from './components/DateTime'
import { ClearAllButton } from './components/ClearAllButton';
import { TodoForm } from './components/TodoForm';
import './App.css'
import { Boxes } from './components/Boxes';

function App() {
  const [inputArr,setInputArr] = useState(()=>{
    const fetchedArray = localStorage.getItem('key');
    if (!fetchedArray || fetchedArray === "undefined") {  // ✅ Check for null & "undefined"
      return [];
    }
    return JSON.parse(fetchedArray);
  });
  const [currentDate,setCurrentDate] = useState(new Date().toLocaleTimeString('en-US', { hour12: true }));

  const handleFormSubmit = (inputValue)=>{
    const {id,content,checked} = inputValue;
    if(!content){
      return
    }
    setInputArr([...inputArr,{id:id,content:content,checked:checked}]);
  }

  useEffect(() => {
    console.log(inputArr);
  }, [inputArr]);
  localStorage.setItem("key",JSON.stringify(inputArr));

  // console.log(inputArr);

  const interval = setInterval(()=>{
    setCurrentDate(new Date().toLocaleTimeString('en-US', { hour12: true }))
  })

  const handleDelete = (hj)=>{
    const dltArr = inputArr.filter((item)=>{
      if(item !== hj){
        return item;
      }
    })
    setInputArr(dltArr);
  }

  const handleDeleteAll = ()=>{
    setInputArr([])
  }

  const handleCheckButton = (task)=>{
    const updatedInputArray = inputArr.map((item)=>{
      if(item.id === task.id){
        return {...item,checked:!item.checked}
      }
      else{
        return item;
      }
    })
    setInputArr(updatedInputArray);
  }

  const handleUpdateTask = (id, newContent) => {
    setInputArr((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, content: newContent } : task
      )
    );
  };  
  
  return (
    <>
      <div className="wrapper">
        <div className="box">
          <Boxes/>
        </div>
        <section>
          <Heading />
          <DateTime setTime={currentDate} />
          <TodoForm formSubmission={handleFormSubmit} />
          <div className="addedItems">
            {inputArr.map((item)=>{
              return(
                <ItemList key={item.id} curTask={item} dltItem={handleDelete} chkItem={handleCheckButton} updateTask={handleUpdateTask}/>
              )
            })}
          </div>
          <ClearAllButton clrAllBtn={handleDeleteAll} hasItems={inputArr.length} />
        </section>
      </div>
    </>
  )
}

export default App

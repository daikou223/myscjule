import {useState,useEffect} from "react"
import {
    BrowserRouter as Router,Routes,Route,useNavigate
      } from 'react-router-dom';

function Input({date}){
    const [task,setTask] = useState(JSON.parse(localStorage.getItem(date)));
    const navigate = useNavigate();
    useEffect(() => {
        const savedTasks = localStorage.getItem(date);
        if (savedTasks) {
          setTask(JSON.parse(savedTasks));
        }
      }, [date]);
    useEffect(() => {
        localStorage.setItem(date, JSON.stringify(task));
    }, [task, date]);
    function setdata(){
        let taskName= document.getElementById("name").value;
        let startTime= document.getElementById("starttime").value;
        let endTime= document.getElementById("endtime").value;
        document.getElementById("name").value = "";
        document.getElementById("starttime").value = "";
        document.getElementById("endtime").value = "";
        setTask([...task,{name:taskName,start:startTime,end:endTime}]);
    }
    function back(){
        navigate(`/`)
    }
    function dlt(indx){
        let tmplist = [...task];
        tmplist.splice(indx,1);
        setTask(tmplist)
        return null;
    }
    return(
    <div>
    <input type = "text" id = "name"></input>
    <input type = "time" id = "starttime"></input>
    <input type = "time" id = "endtime"></input>
    <button onClick = {()=>setdata()}>登録</button><br/>
    <ul>
        {task.map((t, index) => (
            <div>
          <li key={index}>
            {t.name}: {t.start} ~ {t.end}
          </li>
          <button onClick = {()=>dlt(index)}>削除</button>
          </div>
        ))}
      </ul>
    <button onClick = {()=>back()}>戻る</button>
    </div>
    )
}

export default Input
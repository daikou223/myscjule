import React,{useEffect} from "react";

function Day({setFirstDay}){
    function setDay(daynum){
        setFirstDay(daynum);
        localStorage.setItem(0, JSON.stringify(daynum));
    }
    useEffect(() => {
        setFirstDay(JSON.parse(0));
      }, []);
    return(<tr>
        <td><button onClick={()=>setDay(0)}>月</button></td>
        <td><button onClick={()=>setDay(1)}>火</button></td>
        <td><button onClick={()=>setDay(2)}>水</button></td>
        <td><button onClick={()=>setDay(3)}>木</button></td>
        <td><button onClick={()=>setDay(4)}>金</button></td>
        <td><button onClick={()=>setDay(5)}>土</button></td>
        <td><button onClick={()=>setDay(6)}>日</button></td>
        </tr>);
}

export default Day;
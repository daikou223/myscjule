import React,{useState,useEffect} from "react";
import Day from "./day";
import Date from "./date";
import Tbl from "./tbl";
import "./style.css"

function Week(){
    let [firstDay,setFirstDay] = useState(0);
    useEffect(()=>{
    setFirstDay(localStorage.getItem(0));
    },[]
)
    const style = 
    {
        borderCollapse: 'collapse',
    }
    function reset(){
        for(let i = 1;i<32;i++){
            localStorage.setItem(i, JSON.stringify([]));
        } 
        localStorage.setItem(0, JSON.stringify(0));   
    }
    return(
        <div>
        <div className = "scr">
            <button onClick = {()=>reset()}>リセット</button>
    <table class = "bttn">
        <Day setFirstDay={setFirstDay}/>
        <Date firstDay={firstDay}/>
    </table>
    <p>現在指定された曜日:{firstDay}</p>
    <button onClick = {()=>window.print()}>印刷</button>
    </div>
    <div class = "prt">
        <table class = "tbl"style = {style}>
            <tbody>
        <Tbl firstDay={firstDay}/>
        </tbody>
        </table>
    </div>
    </div>
);
}

export default Week
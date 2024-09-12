import React,{useEffect} from "react";
import {
BrowserRouter as Router,Routes,Route,useNavigate
  } from 'react-router-dom';

function Date({firstDay}){
    let buttons = [];
    const navigate = useNavigate();
    function gototoday(day){
        navigate(`/today/${day}`,{
            state:{date:day},
        })
    }
    useEffect(() => {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                const day = i * 7 + j - firstDay + 1;
                if (day >= 1 && day <= 30) {
                    // すでにローカルストレージに設定されているかを確認
                    if (!localStorage.getItem(day)) {
                        localStorage.setItem(day, JSON.stringify([]));
                    }
                }
            }
        }
    }, [firstDay]);
    for(let i = 0;i<6;i++){
        let cells = [];
        for(let j = 0;j<7;j++){
            if(i*7+j-firstDay >= 0 && i*7+j-firstDay <= 30){
                let task_num = localStorage.getItem(i*7+j-firstDay+1).length;
                if(task_num == 2){
                cells.push(
                    <td><button onClick ={()=>gototoday(i*7+j-firstDay+1)}>{i*7+j-firstDay+1}</button></td>
                );
            }
            else{
                cells.push(<td><button onClick ={()=>gototoday(i*7+j-firstDay+1)} style = {{backgroundColor:"yellow",}}>{i*7+j-firstDay+1}</button></td>)
            }
            }
            else{
                cells.push(
                    <td></td>
                )
            }
        }
        buttons.push(<tr>{cells}</tr>)
    }
    return(buttons)
}

export default Date
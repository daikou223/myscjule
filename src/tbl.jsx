import DaysTask from "./tasks"
function Tbl({firstDay}){
    let buttons = [<tr><td>月</td><td>火</td><td>水</td><td>木</td>
    <td>金</td><td>土</td><td>日</td></tr>];
    const style = {
        border: 'solid 2px black',
        width:`100px`,
        height:`150px`,
    }
    let week_num = firstDay<=4 ? 5:6;
    for(let i = 0;i<week_num;i++){
        let cells = [];
        for(let j = 0;j<7;j++){
            if(i*7+j-firstDay >= 0 && i*7+j-firstDay <= 30){
                cells.push(
                    <td style = {style}>
                        {i*7+j-firstDay+1}日
                        <DaysTask day = {i*7+j-firstDay+1}/>
                    </td>
                );
            }
            else{
                cells.push(
                    <td style = {style}></td>
                )
            }
        }
        buttons.push(<tr>{cells}</tr>)
    }
    return(buttons)
}

export default Tbl
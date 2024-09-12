function DaysTask({day}){
    const tadld = JSON.parse(localStorage.getItem(day));
    console.log(tadld);
    const style = {
        height:"100px",
        fontSize:"15px",
    }
    const styleTask = {
        height:"65px",
        fontSize:"10px",
    }
    const listStyle = {
        listStyleType:'none',
    }
    let start = "x";
    let end = "-";
    tadld.map((t, index) => {
        if(start > t.start){
            start=t.start;
        };
        if(end < t.end){
            end=t.end;
        };
        return null;
    })
    if(start == "x"){
           start="";
    };
    if(end=="-"){
        end="";
    };
    return(
        <div style = {style}>
            {start}
            <div style = {styleTask}>
        {tadld.map((t, index) => (
          <li key={index} style = {listStyle}>
            {t.name}: {t.start} ~ {t.end}
          </li>
        ))}
        </div>
        {end}
        </div>
    )
}

export default DaysTask

import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation,useParams } from "react-router-dom";
import Input from "./input";
/*import Result from "./result";*/

function Today(){
    const {date} = useParams();
    return(<div>
        <h1>date:{date}</h1>
        <Input date = {date}/>
    </div>);
}

export default Today;
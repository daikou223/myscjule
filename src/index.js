import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Week from "./Week"
import {
  BrowserRouter as Router,Routes,Route,useNavigate
    } from 'react-router-dom';
import Today from "./today";

const root = ReactDOM.createRoot(document.getElementById('root'));
for(let i = 1;i<32;i++){
  localStorage.setItem(i, JSON.stringify([]));
}  
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* ルート '/' に対応するコンポーネント */}
        <Route path="/" element={<Week />} />

        {/* ルート '/about' に対応するコンポーネント */}
        <Route path="/today/:date" element={<Today />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

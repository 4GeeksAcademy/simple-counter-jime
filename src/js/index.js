//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { Card, SecondsCounter }  from "./secondsCounter.jsx";


let seconds = 0

//render your react application
let app = ReactDOM.createRoot(document.getElementById('app'))

setInterval(() => { 
    seconds++;
app.render(<>
    <SecondsCounter counter={seconds} />
    <div>
        <input onChange={(event) => {
            seconds = event.target.value;
        }}
     
            placeholder="ingresar" type="number" />
    </div>  

</>);} ,1000);

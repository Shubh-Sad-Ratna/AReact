import React from "react";
import ReactDOM from "react-dom/client"
const Head=()=>{
    return(
    <h1>Hello World</h1>
    )
}
const Title=()=>{
    return(
    <div>
        <p>Hello</p>
        {Head()}
        <Head/>
    </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Title/>);
import * as React from "react";
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from "./components/Menu";

function App(){
    return(
        <div>
            <Menu></Menu>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))
import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

    // const [state, setState] = useState({a: 1, b: 2})


    return (
        <div className="App">
            <div>{JSON.stringify(state)}</div>
            <button onClick={() => setState((prevState =>  {
                console.log(prevState)
                prevState.b
                return prevState
            }))}>inc
            </button>
        </div>
    );
}

export default App;

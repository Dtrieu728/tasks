import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <span style={{ color: "blue" }}>Dustine Trieu</span>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;

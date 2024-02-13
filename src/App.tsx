import React from "react";
import "./App.css";
import logo from "C:\\Users\\Potat\\tasks\\src\\Images\\GD7I9K3XwAApR08.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <div className="App-Column"> Hello </div>
                    </Col>
                    <header className="App-header">
                        UD CISC275 with React Hooks and TypeScript
                        <span style={{ color: "blue" }}>Dustine Trieu</span>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </header>
                    <p>
                        Edit <code>src/App.tsx</code> and save. This page will
                        automatically reload. Hello World.
                    </p>
                    <Col>
                        <div className="App-Column"> Hello </div>
                    </Col>
                </Row>
            </Container>
            <h1> Here is a goofy little guy </h1>
            <img src={logo} alt="A silly goofy little guy" />
            Unordered Cat List:
            <ul>
                <li> Hairless</li>
                <li> RagDoll</li>
                <li> Maine Coon</li>
            </ul>
        </div>
    );
}

export default App;

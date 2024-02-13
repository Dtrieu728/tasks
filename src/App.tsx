import React from "react";
import "./App.css";
import logo from "./GD7I9K3XwAApR08.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

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
                automatically reload. Hello World.
            </p>
            <h1> Here is a goofy little guy </h1>
            <img
                src={logo}
                width="500"
                height="500"
                alt="A silly goofy little guy"
            />
            <ul>
                <li> Hairless</li>
                <li> RagDoll</li>
                <li> Maine Coon</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: 30,
                                height: 100,
                                backgroundColor: "#FF0000"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 30,
                                height: 100,
                                backgroundColor: "#FF0000"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

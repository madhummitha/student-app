import React from "react";
import {Nav, Navbar, Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import CreateStudent from "./Components/CreateStudent";
import EditStudent from "./Components/EditStudent";
import StudentList from "./Components/ListStudent";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"} className="nav-link">Student App</Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} 
                    className="nav-link">
                    Create Student
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/student-list"} 
                    className="nav-link">
                    Student List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" 
                    component={CreateStudent} />
                  <Route path="/create-student" 
                    component={CreateStudent} />
                  <Route path="/edit-student/:id" 
                    component={EditStudent} />
                  <Route path="/student-list" 
                    component={StudentList} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </BrowserRouter>
  )
}

export default App;
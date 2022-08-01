import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, Route, Switch} from "react-router-dom";
import ReadXml from "../pages/ReadXml";
import DataList from "../pages/DataList";
import Main from "../pages/Main";

function NavbarBoot() {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Link to="/main" style={{textDecoration: 'none'}}><Navbar.Brand>MAIN</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/dataList">리스트조회</Nav.Link>
                <Link to="/dataList" style={{textDecoration: 'none'}}><Nav.Link>배당금조회</Nav.Link></Link>
                <NavDropdown title="추가메뉴" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/readXml">xml읽어오기</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">json읽어오기</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          <Switch>
            <Route exact={true} path="/main" component={Main}></Route>
            <Route exact={true} path="/dataList" component={DataList}></Route>
            <Route exact={true} path="/readXml" component={ReadXml}></Route>
          </Switch>
        </>
      );
}

export default NavbarBoot;
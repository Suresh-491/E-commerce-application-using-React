import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
//import AuthContext from "../store/auth-context";
import { useSelector,useDispatch } from "react-redux";
import { authAction } from "../store/store";

const Header = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const admin = useSelector(state => state.auth.admin)
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch()
  
  const logoutHandler = () =>{
    dispatch(authAction.logout())
  }
  //const context = useContext(AuthContext);
  //const isLoggedIn = context.isLoggedIn;
  //const admin = context.admin;
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <strong>ShopIt</strong>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>
        
              {isLoggedIn ? (
                <NavDropdown title={token} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  {admin && (<><LinkContainer to="/productedit">
                    <NavDropdown.Item>Edit Product</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/productlist">
                  <NavDropdown.Item>List Product</NavDropdown.Item>
                </LinkContainer>
                </>
                  )}
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

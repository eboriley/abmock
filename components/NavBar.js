import React,{useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'
import db from '../firebase'
import {useSelector, useDispatch} from 'react-redux'
import {actionTypes} from '../reducers/actionTypes'
import styled from 'styled-components'

const theme = {
  primary: 'palevioletred',
  secondary: 'green',
  alert: 'yellow',
  accent: '#FBFFFF',
  font: 'sans-serif'
}

const HeaderBar = styled.div`
    margin: auto;
    padding: 5px 0;
    display: flex;
`;

const ProfileInfo = styled.div`
display: flex;
flex-direction: column;
margin-right: 20px;
margin-left: 20px;
`;

const HeaderImg = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
`;

const HeaderNames = styled.h4`
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    text-align: left;
    color: #fff;
`;

const HeaderText = styled.p`
    margin: 0;
    font-size: .811rem;
    color: #FFF;
    font-weight: 400;
    text-align: left;
`;

function NavBar() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  console.log(user)
  useEffect(() => {
    db.collection('teacherlogin').doc(user?.user.email).set({
      name: user?.user.displayName,
      email: user?.user.email,
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.data());
      })
    .catch((error) => {
      console.error("Error adding document: ", error);
      })   
  })

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <LinkContainer to="/">
        <Navbar.Brand href="#home">Mock tracker</Navbar.Brand>
        </LinkContainer>
        <Navbar>
          <ProfileInfo>
        <HeaderNames>{user?.user.displayName}</HeaderNames>
        <HeaderText>{user?.user.email}</HeaderText>
        </ProfileInfo>
        <HeaderImg src={user?.user.photoURL} alt="profile"/>
        </Navbar>
       
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        <LinkContainer to="/students">
        <Nav.Link href="#features">Students</Nav.Link>
        </LinkContainer>
    </Nav>
    <Nav>
      <LinkContainer to="/profile">
        <Nav.Link href="#features">Profile</Nav.Link>
        </LinkContainer>
    </Nav>
  </Navbar.Collapse>
  
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
</Navbar>
    )
}

export default NavBar

import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../firebase';
import Modal from 'react-bootstrap/Modal';

  const auth = getAuth(app);
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const navigate  = useNavigate();
  const [user,setUser] = useState(null);

  useEffect(() => {    
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setUser(user)
        console.log(user)
       navigate("/home")
       setShow(false)

      }
      else{
       setUser(null)
      }
    })
     
    }, []);
    
  
  
    if(user === null){



    }


  return (
    <>

    { user?  <Navbar bg='dark'>
      <Container>
        <h2 className='text-light'>FirebaseAuth</h2>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
         <p className='text-light m-3'><i class="fa-regular fa-user"></i> {user.displayName}</p>
         <Button variant="warning" onClick={()=>handleShow()}>
       Log Out
       
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you Sure want to Log Out?</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={()=>signOut(auth)}>
            Yes,Log Out
          </Button>
        </Modal.Footer>
      </Modal>

        
           
      
        </Navbar.Collapse>
      </Container>
    </Navbar>:<Navbar bg='dark'>
      <Container>
        <h2 className='text-light'>FirebaseAuth</h2>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <NavLink to="/login" >
            <Button variant="warning" className='m-2'>SignIn</Button>
            </NavLink>
            <NavLink to="/signup">
            <Button variant="warning" className='m-2'>Signup</Button>

            </NavLink>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>

    }
    
    
  
    
    
    </>
  )
}

export default Header
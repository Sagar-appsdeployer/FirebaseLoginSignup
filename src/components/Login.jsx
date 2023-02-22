import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { app } from '../firebase';

const Login = () => {

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider()
   

  const [email,setEmail] = useState("");
  const [password ,setPassword] =useState("");


  const SignInUser = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then((value)=>console.log("SIGN IN SUCCESS"))
    .catch((err)=>console.log(err))
  }


  const signUpWithGoogle = ()=>{
    signInWithPopup(auth,googleProvider)
    console.log("Suee")
 }
  return (
    
    <>


<Form className='m-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        onChange={(e)=>setEmail(e.target.value)}
        value={email}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
          onChange={(e)=>setPassword(e.target.value)}
          value={password}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={SignInUser}>
        Submit
      </Button>
    </Form>


    <Button onClick={signUpWithGoogle}>Sign In with Google</Button>
    </>
  )
}

export default Login
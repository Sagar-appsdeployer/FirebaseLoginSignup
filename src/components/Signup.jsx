import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth,GoogleAuthProvider ,signInWithPopup, updateProfile} from 'firebase/auth';
import { app } from '../firebase';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const Signup = () => {


     const signUpWithGoogle = ()=>{
        signInWithPopup(auth,googleProvider)
     }
    const [email,setEmail]  = useState("");
    const [password,setPassword]  = useState("");
    const [name,setName] = useState("");

    const createUser = ()=>{
        createUserWithEmailAndPassword(auth,email,password).then(async(res)=>{
            const user = res.user;
           await updateProfile(user, {
                displayName:name
            })
        })
    }


    console.log()
  return (
    <>
 <Form className='m-5'>
 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter name" 
        onChange={(e)=>setName(e.target.value)}
        value={name}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
         onChange={(e)=>setEmail(e.target.value)}
         value={email}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
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
      <Button variant="primary" onClick={createUser }>
        Submit
      </Button>
    </Form>
   <h2>Or</h2>

   <Button onClick={signUpWithGoogle}>SignUp with Google</Button>


    </>
  )
}

export default Signup
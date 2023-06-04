import { useState } from "react";
import Button from 'react-bootstrap/Button';
export default function UesrFunction(){

    const [users] = useState (
        [
            {
                name:"mostafa",
                email:"mostafa@gmail.com",
                isactive:true
            },
            {
                name:"Ahmed",
                email:"ahmed@gmail.com",
                isactive:true
            },
            {
                name:"mohamed",
                email:"mohamed@gmail.com",
                isactive:true,
            },
            {
                name:"hmada",
                email:"hmada@gmail.com",
                isactive:true
            }
        ]
    )
    const [auth,setAuth] = useState (false)

    const toggle=()=>{
           setAuth(!auth)
           console.log(auth);
    }
    
    return<>
  {auth? <ul >
                { users.map((user,index)=>{
                    return <li key={index}>{user.name}</li>
                })}
            </ul> :<p>Hello World</p>
    }
    <Button variant="primary" onClick={toggle}>Show</Button>
    </>
}
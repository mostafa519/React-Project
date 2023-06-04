import React from "react";
import Button from 'react-bootstrap/Button';

export default class Uesrs extends React.Component {

    constructor(){
        super();
        this.state =
        {
            users:[
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
        ],
        show:true
    
}
    }
 
 handelevent=()=>{
    this.setState({show:(this.state.show)?false:true})
 }
    render() {
        return (
            <>
          {/* {this.state.show?  <ul >
                {this.state.users.map((user,index)=>{
                    return <li key={index}>{user.name}</li>
                })}
            </ul> :<p>Hello World</p>
    } */}
        {this.state.show &&  <ul >
                {this.state.users.map((user,index)=>{
                    // if(user.isactive )
                     return <li key={index}>{user.name}</li>}
                
                   
                )}
            </ul> 
    }
<Button variant="primary" onClick={()=>{this.handelevent()}}>  Containt</Button>
            </>
        )
    }
}
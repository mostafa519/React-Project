import React from "react";
import NavB from "../links/nav"
// import { Link } from "../links/link";
export default class Navbar extends React.Component {

//     state ={
//         //any datatype 
//         name:"mustafa",
//         address:"Sohag",
//         skills:["",""],
//         obj:{}
//     }

//    // eslint-disable-next-line no-useless-constructor
//    constructor(){
//     super()
//     console.log("from constructor"); //1
//    }
//    // when loading 
//    componentDidMount(){
//     console.log("from componentDidMount"); //3
//     // this.setState({name:"Hmada"})
//    }
// // call when update
//    componentDidUpdate(){
//     console.log("from componentDidUpdate"); //
//     // this.setState({name:"Hmada"}) no change becouse can't reach to update
//    }

// //unmounting clean up method
// componentWillUnmount(){
//     console.log("from componentWillUnmount");
// }

// handleChang=()=>{
//     // this.setState({name:"Hmada"})
//     this.setState({name:(this.state.name==="mustafa")?"Hmada":"mustafa"})
// }
    render(){
        // console.log("from render"); //2
        // // this.setState({name:"Hmada"}) infinite loop
        // //React.Fragment
      
        // <Link name = "Home" href="www.google.com"/>
        // <Link name = "Address" href="#"/>
        // <Link name = "Contact" href="#"/>
        // <Link name = "Others"href="#"/>
        //       <h1>hello from NavBar</h1> 
        //       <h1>hello I'm {this.state.name}</h1> 
        //       <h1>hello number {this.props.x}</h1> 
        //       {/* <button onClick={this.handleChang}>Change</button> */}
        //       <button onClick={()=>{this.handleChang()}}>Change</button>
        return<>
        <NavB></NavB>
        </>
    }
}
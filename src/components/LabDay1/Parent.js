import React from "react"; 
import Head from "./header";
import Foot from "./footer";
import Section1 from "./section1"
import Section2 from "./section2"
import Mainn from "./main";
export default class Parent extends React.Component {

    state ={ 
    }

   // eslint-disable-next-line no-useless-constructor
   constructor(){
    super() 
   }
  
    render(){
       return <>
       <Head/>
       <Mainn/>
       <Section1/>
       <Section2/>
       <Foot/>
 
        </>
    }
}

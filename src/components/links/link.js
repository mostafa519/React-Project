import './link.css'
export   function Link(props){
    console.log(props);
return<>  
{/* <a href={props.href} className='myLink'>{props.name} </a> */}
<a href={props.href}className='myLink' style={{backgroundColor:'red' ,textDecorationLine:'none'}}>{props.name} </a>
</> 
}

// const Link =()=>{};
// const Link=function(){};  <ProgressBar  label={`${'HTML'}`} />
        //   <ProgressBar  label={`${'Sass'}`} />
        //   <ProgressBar  label={`${'Angular'}`} />
        //   <ProgressBar  label={`${'JS'}`} />
        //   <ProgressBar  label={`${'CSS'}`} />
        //   <ProgressBar  label={`${'Bootstrap'}`} />
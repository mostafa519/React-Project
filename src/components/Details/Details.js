
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import axiosMovies from "../../axiosConfig/aaxiosMovie"; 
// import AddFavourite from "../Favourite/Favourits";
// import Test from "./Test";


export default function Details(){
    const params = useParams()
     //  console.log(params.id);


    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        axiosMovies.get(`/movie/${params.id}`,{
            params: {
                api_key: "3f72f7829f88b84747dfa3dc1e637f1d",
              },
            })
            .then((res) => {
             // console.log(res);
              setMovie(res.data);
            })
            .catch((err) => {
              console.log(err.message);
            });
        },[]);
    
    return (
        <div>
           
           <Card
            style={{ width: "18rem", marginLeft: "30px", marginTop: "20px" }}
          > <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            /> 
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.overview}
       
              
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>  
          {/* <Test></Test> */}
          {/* <AddFavourite></AddFavourite> */}
        </div>
        
    );
}
import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import axios from "axios"; 
import axiosInstance from "../../axiosConfig/instance";
import { Col } from "react-bootstrap";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      //.get("https://fakestoreapi.com/products?limit=10",{
      .get("/products",{
        // headers:{'Content-Type': 'application/json'},
        // params:{limit:5}
      })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <>Hello from Product
  
  {
    products.map((movie)=>{
        return <p key={movie.id}>
       <Col  sm={2}className="m-1">
       <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.image} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
      {movie.original_title}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
       </Col>
    </p>
    })
  }
  </>;
}

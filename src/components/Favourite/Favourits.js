// Favorites.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../store/Actions/removeFov";
import { FaHeart } from "react-icons/fa";

function Favorites() {
  const favorites = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(favorites);
  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };

  return (
    <>
      <div className="contain">
        {favorites.map((movie) => (
          <Card
            key={movie.id}
            style={{ width: "18rem", marginLeft: "30px", marginTop: "20px" }}
          >
            <Card.Img
              variant="top"
              style={{ position: "relative" }}
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            />
            <Link onClick={() => handleRemoveFromFavorites(movie.id)}>
              <FaHeart
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "90%",
                  color: "red",
                }}
                size={25}
              />
            </Link>

            <Card.Body>
              <Card.Title>{movie.title} </Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              <Link to={`/details/${movie.id}`}>
                <Button variant="primary">Go Details </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Favorites;

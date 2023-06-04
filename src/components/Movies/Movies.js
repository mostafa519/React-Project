import { useEffect, useState } from "react";
import axiosMovies from "../../axiosConfig/aaxiosMovie";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./edit.css";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../store/Actions/removeFov";
import { addToFavorites } from "../store/Actions/addFav";

export default function Movies() {
  const [currentPage, setCurrentPage] = useState(8);

  const [movies, setMovies] = useState([]);

  const favorites = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosMovies
      .get("/movie/popular", {
        params: {
          headers: { "Content-Type": "application.json" },
          page: currentPage,
        },
      })
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [currentPage]);
  const handlePrevPage = () => {
    if (currentPage != 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const [searchMovie, setsearchMovie] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    let task = document.getElementById("form1").value;
    // console.log(task);
    // setsearchMovie([...searchMovie, task]);
    setsearchMovie(movies.filter((movie) => movie.title == task));
    // console.log(movies);
  };
  // console.log(searchMovie);
  const isFav = (movie) => {
    return favorites.some((Movie) => Movie.id == movie.id);
  };

  const handleAddToFav  = (movie) => {
    if (isFav(movie)) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };
  return (
    <>
      <div
        className="col-5"
        style={{ marginLeft: "40%", width: "20%", marginTop: "20px" }}
      >
        <div className="form-outline">
          <input type="text" id="form1" className="form-control" />
        </div>
        <button
          onClick={handleSearch}
          className="btn btn-primary "
          style={{ marginLeft: "100px", marginTop: "15px" }}
        >
          Search
        </button>
      </div>
      <div>
        {searchMovie.map((movie) => (
          <Card
            key={movie.id}
            style={{ width: "18rem", marginLeft: "30px", marginTop: "20px" }}
          >
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            />

            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              <Link to={`/details/${movie.id}`}>
                <Button variant="primary">Go Details </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="contain">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            style={{ width: "18rem", marginLeft: "30px", marginTop: "20px" }}
          > 
            <Card.Img
              variant="top"
              style={{ position: "relative" }}
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            />
            <Link onClick={() => handleAddToFav(movie)}>
              {isFav(movie) ? (
                <FaHeart
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "90%",
                    color: "red",
                  }}
                  size={25}
                />
              ) : (
                <FaHeart
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "90%",
                    color: "white",
                  }}
                  size={25}
                />
              )}
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
      <Row>
        <Col ms={1}>
          <Button
            variant="primary"
            style={{ margin: "50px", marginLeft: "100px" }}
            onClick={handlePrevPage}
          >
            Back
          </Button>
        </Col>
        <Col ms={10} />
        <Col ms={1}>
          <Button
            variant="primary"
            style={{ margin: "50px", marginLeft: "300px" }}
            onClick={handleNextPage}
          >
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
}

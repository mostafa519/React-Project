// import { useEffect, useState } from "react";
// import axiosMovies from "../../axiosConfig/aaxiosMovie";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import "../Movies/edit.css";
// import { Link } from "react-router-dom";

// export default function Test() {
//   const [currentPage, setCurrentPage] = useState(8);

//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axiosMovies
//       .get("/movie/popular", {
//         params: {
//           api_key: "3f72f7829f88b84747dfa3dc1e637f1d",
//           headers: { "Content-Type": "application.json" },
//           page: currentPage,
//         },
//       })
//       .then((res) => {
//         // console.log(res.data);
//         // console.log(res.data.results);
//         setMovies(res.data.results);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, [currentPage]);
//   const handlePrevPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const [searchMovie, setsearchMovie] = useState([]);

//   const handleSearch = (event) => {
//     event.preventDefault();
//     let task = document.getElementById("form1").value;
//     console.log(task);
//     // setsearchMovie([...searchMovie, task]);
//     setsearchMovie(movies.filter((movie) => movie.title == task));
//     console.log(movies);
//   };
//   console.log(searchMovie);

//   return (
//     <>
//       <div
//         class="col-5"
//         style={{ marginLeft: "40%", width: "20%", marginTop: "20px" }}
//       >
//         <div class="form-outline">
//           <input type="text" id="form1" class="form-control" />
//         </div>
//         <button
//           onClick={handleSearch}
//           class="btn btn-primary "
//           style={{ marginLeft: "100px", marginTop: "15px" }}
//         >
//           Search
//         </button>
//       </div>
//       <div>
//         {searchMovie.map((movie) => (
//           <Card
//             key={movie.id}
//             style={{ width: "18rem", marginLeft: "30px", marginTop: "20px" }}
//           >
//             <Link to={`/details/${movie.id}`}>
//               <Card.Img
//                 variant="top"
//                 src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
//               />
//             </Link>
//             <Card.Body>
//               <Card.Title>{movie.title}</Card.Title>
//               <Card.Text>{movie.overview}</Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//       <div className="contain">
//         {movies.map((movie) => (
//           <Card
//             key={movie.id}
//             style={{ width: "18rem", marginLeft: "30px", marginTop: "20px" }}
//           >
//             <Link to={`/details/${movie.id}`}>
//               <Card.Img
//                 variant="top"
//                 src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
//               />
//             </Link>
//             <Card.Body>
//               <Card.Title>{movie.title}</Card.Title>
//               <Card.Text>{movie.overview}</Card.Text>
//                  <Link to={`/details/${movie.id}`}>  <Button variant="primary">Go Details </Button></Link>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//       <div style={{ justifyContent: "center" }}>
//         <Button
//           variant="primary"
//           style={{ margin: "50px", marginLeft: "300px" }}
//           onClick={handleNextPage}
//         >
//           Next
//         </Button>
//         <Button variant="primary" onClick={handlePrevPage}>
//           Back
//         </Button>
//       </div>
//     </>
//   );
// }


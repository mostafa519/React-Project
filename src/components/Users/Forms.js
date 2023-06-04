// import { useState } from "react";
// import Col from "react-bootstrap/Col";

// export default function AddUserFormNative() {
//   const [user, setUser] = useState([
//     {
//       email: "",
//       password: "",
//     },
//   ]);
//   const [error, setError] = useState([
//     {
//       emailError: "",
//       passError: "",
//     },
//   ]);

//   const handleChange = (ev) => {
//     if (ev.target.name === "email") {
//       setUser({ ...user, email: ev.target.value });
//       setError({
//         ...error,
//         emailError:
//           ev.target.value.length === 0
//             ? "Enter Email"
//             : ev.target.value.length <= 5
//             ? "Email must be at least 5"
//             : "",
//       });
//     } else if (ev.target.name === "password") {
//       setUser({ ...user, password: ev.target.value });
//       setError({
//         ...error,
//         passError:
//           ev.target.value.length === 0
//             ? "Enter Pass"
//             : ev.target.value.length <= 5
//             ? "Pass must be at least 5"
//             : "",
//       });
//     }
//   };
//   return (
//     <>
//       <Col lg={5}  className="m-5">
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlInput1" className="form-label">
//             Email address
//           </label>
//           <input
//           required
//             type="email"
//             value={user.email}
//             className="form-control"
//             onChange={(e) => {
//               handleChange(e);
//             }}
//             placeholder="name@example.com"
//             name="email"
//           />
//           <p >{error.emailError}</p>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlInput1" className="form-label">
//             Password
//           </label>
//           <input
//           required
//             type="password"
//             value={user.password}
//             className="form-control"
//             onChange={(e) => {
//               handleChange(e);
//             }}
//             placeholder="Password"
//             name="password"
//           />
//           <p>{error.passError}</p>
//         </div>
//         <div className="mb-3">
//           <input
//             type="submit"
//             className="form-control btn btn-danger w-25"
//             id="exampleFormControlInput3"
//             value={"Login"}
//           />
//         </div>
//       </Col>
//     </>
//   );
// }

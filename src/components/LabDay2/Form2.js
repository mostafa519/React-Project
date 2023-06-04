import { useState } from "react";
import Form3 from '../LabDay2/Example3'
import Button from 'react-bootstrap/Button';
export default function AddUserFormNative() {

  

  // var emailRegex =
  //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  
  const [passwordType, setPasswordType] = useState("password");
  const [user, setUser] = useState([
    {
      name: "",
      lname: "",
      confirmPass: "",
      email: "",
      password: "",
    },
  ]);
  const [error, setError] = useState([
    {
      emailError: "",
      passError: "",
      nameError: "",
      lnameError: "",
      confirmPassError: "",
    },
  ]);
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  const handleChange = (ev) => {
    if (ev.target.name === "email") {
      setUser({ ...user, email: ev.target.value });
      setError({
        ...error,
        emailError:
          ev.target.value.length === 0
            ? "Enter Email"
            : ev.target.value.length <= 5
            ? "Email must be at least 7" 
            : " ",
      });
    } else if (ev.target.name === "password") {
      setUser({ ...user, password: ev.target.value });
      setError({
        ...error,
        passError:
          ev.target.value.length === 0
            ? "Enter Pass"
            : ev.target.value.length <= 8
            ? "Pass must be at least 8" 
            : " ",
      });
    } else if (ev.target.name === "confirmPass") {
      setUser({ ...user, confirmPass: ev.target.value });
      setError({
        ...error,
        confirmPassError:
          ev.target.value.length === 0
            ? "Enter Pass"
            : ev.target.value.length <= 8
            ? "Pass must be at least 8"
            : ev.target.value!==user.password
            ? "error in Confirm Password" :
            ''
      });
    } else if (ev.target.name === "name") {
      setUser({ ...user, name: ev.target.value });
      setError({
        ...error,
        nameError:
          ev.target.value.length === 0
            ? "Enter Your  Name"
            : ev.target.value.length <= 6
            ? "Your Name must be at least 6"
            : ev.target.value.match(" ")
            ? "Error Name "
            : "",
      });
    } else if (ev.target.name === "lname") {
      setUser({ ...user, lname: ev.target.value });
      setError({
        ...error,
        lnameError:
          ev.target.value.length === 0
            ? "Enter Your  Name"
            : ev.target.value.length <= 6
            ? "Your Name must be at least 6"
            : ev.target.value.match(" ")
            ? "Error Name "
            : "",
      });
    }
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="w-50 m-5"
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            required
            type="text"
            value={user.name}
            className="form-control"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Mustafa"
            name="name"
          />
          <p className="text-danger">{error.nameError}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Last Name
          </label>
          <input
            required
            type="text"
            value={user.lname}
            className="form-control"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Ali"
            name="lname"
          />
          <p className="text-danger">{error.lnameError}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            required
            type="email"
            value={user.email}
            className="form-control"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="name@example.com"
            name="email"
          />
          <p className="text-danger">{error.emailError}</p>
        </div>
        <div className="mb-3">
          <input
            type={passwordType}
            onChange={(e) => {
              handleChange(e);
            }}
            value={user.password}
            name="password"
            class="form-control"
            placeholder="Password"
          />
          <div className="input-group-btn">
            <button
              className="btn btn-outline-primary"
              onClick={togglePassword}
            >
              {passwordType === "password" ? (
                <input type="checkbox" checked></input>
              ) : (
                <input type="checkbox"></input>
              )}
            </button>
            <p className="text-danger">{error.passError}</p>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Confirm Password
          </label>
          <input
            required
            type="password"
            value={user.confirmPass}
            className="form-control"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Confirm Password"
            name="confirmPass"
          />
          <p className="text-danger">{error.confirmPassError}</p>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <a href={'./Form2.js'}  download 
        target="_blank"
        rel="noreferrer"><Button variant="primary" className="m-2" value="download">Download</Button> </a>
        </div>
      </form>
       <Form3></Form3>
    </>
  );
}

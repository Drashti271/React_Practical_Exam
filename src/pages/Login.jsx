import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, userLogin } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData , setFormData] = useState({});
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleChange = (e) => {
    const { name , value } = e.target;
    setFormData({...formData , [name] : value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = verifyEmail(formData);

    if(userData) {
      if(userData.password === formData.password) {
        dispatch(userLogin(userData));
        navigator('/');
        localStorage.setItem('user',JSON.stringify(userData));
      } else {
        alert("Wrong Password.");
      }
    } else {
      alert("User Not Found.");
    }
  }

  const verifyEmail = (user) => {
    let data = users.find((value) => value.email === user.email);
    if(data) {
      return data;
    } else {
      return false;
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) ||  {};
    if(user.id) {
      dispatch(userLogin(user));
    } 
    dispatch(getAllUser());
  },[]);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <h2 className="mb-3">Login</h2>
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={formData.email || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                value={formData.password || ""}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../components/logo";
import "../styles/Auth.scss";
import { useForm } from "./../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../../store/auth/actions";

export default function Login({ history }) {
  const dispatch = useDispatch();

  const [value, handleInputChange] = useForm({
    email: "pablo@gmail.com",
    password: "123456",
  });
  const { email, password } = value;

  const handleLoginEmailPassword = (e) => {
    e.preventDefault();
    dispatch(AuthActions.signInWithEmailAndPassword(email, password));
  };

  const handleLoginGoogle = () => {
    dispatch(AuthActions.signInWithGoogle());
  };

  return (
    <div className="auth__card p-4 animate__animated animate__fadeIn">
      <Logo classWidth="w-100" width="150px" src="/assets/img/logo/logo.png"></Logo>
      <hr />
      <h2 className="primary-color">Login</h2>
      <form className="mb-4" onSubmit={handleLoginEmailPassword}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </div>
      </form>

      <button
        className="btn btn-small btn-outline-primary mb-2 w-100"
        onClick={handleLoginGoogle}
      >
        Sign In with <i className="fab fa-google"></i>oogle
      </button>

      <p>
        Are you new? <Link to="/auth/register">Sign Up</Link>
      </p>
    </div>
  );
}

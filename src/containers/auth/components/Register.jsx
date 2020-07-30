import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../components/logo";
import "../styles/Auth.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "./../../../hooks/useForm";
import validator from "validator";
import { setError } from "./../../../store/ui/actions";
import { createUserWithEmailAndPassword } from "./../../../store/auth/actions";

export default function Register() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ui);
  const messageError = state.messageError;

  const [value, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = value;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(createUserWithEmailAndPassword(email, password, name));
    }
  };

  const isFormValid = () => {
    if (validator.isEmpty(name.trim())) {
      dispatch(setError("El nombre es requerido"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("El correo es inválido"));
      return false;
    } else if (password.length < 6) {
      dispatch(setError("La contraseña debe tener al menos 6 caracteres"));
    } else if (password !== password2) {
      dispatch(setError("La contraseñas ingresadas no coinciden"));
    } else {
      return true;
    }
  };

  return (
    <div className="card auth__card animate__animated animate__fadeIn">
      <div className="card-body">
        <Logo classWidth="w-100" width="150px" src="./../assets/img/logo.png"></Logo>
        <hr />
        <h2 className="primary-color">Register</h2>
        <form className="mb-4" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              id="name"
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              id="email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              id="password"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={password2}
              id="password2"
              name="password2"
              onChange={handleInputChange}
            />
          </div>

          <div>
            {messageError && (
              <div className="alert alert-danger" role="alert">
                {messageError}
              </div>
            )}
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </div>
        </form>

        <p>
          Have you account? <Link to="/auth/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

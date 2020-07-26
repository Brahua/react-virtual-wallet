import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../components/logo';
import './../Auth.scss';
import { useForm } from '../../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithGoogle, signInWithEmailAndPassword } from '../../../redux/auth/action';

export default function Login( { history } ) {

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui);

  const [ value, handleInputChange ] = useForm({
    email: '',
    password: ''
  });
  const { email, password } = value;

  const handleLoginEmailPassword = (e) => {
    e.preventDefault();
    dispatch(signInWithEmailAndPassword(email, password));
  }

  const handleLoginGoogle = () => {
    dispatch(signInWithGoogle());
  }


  return (
    <div className="card auth__card animate__animated animate__fadeIn">
      <div className="card-body">
        <Logo classWidth="w-100" width="150px" src="./../assets/img/logo.png"></Logo>
        <hr/>
        <h2 className="primary-color">Login</h2>
        <form className="mb-4" onSubmit={handleLoginEmailPassword}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" 
                   name="email" value={email} onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" 
                   name="password" value={password} onChange={handleInputChange}/>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>Sign In</button>
          </div>
        </form>

        <button className="btn btn-small btn-outline-primary mb-2 w-100"
          onClick={handleLoginGoogle} disabled={loading}
        >
          Sign In with <i className="fab fa-google"></i>oogle
        </button>

        <p>Are you new? <Link to="/auth/register">Sign Up</Link></p>
      </div>
    </div>
  )
}

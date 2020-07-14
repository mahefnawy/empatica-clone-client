import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from "axios";
import '../../stylesheets/Login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
  constructor(props){
    super(props);

      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: '',
      password: ''
  }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  handleLogin = (e) => {
    e.preventDefault()

    // construct Object to be send by axios to the API endpoint POST - /login
    const userObject = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post('http://localhost:3000/login', userObject).then(response => {
      this.setState({
        redirect: true,
        email: '', 
        password: ''
      })
    })
    .catch(err => {
      var errorBox = document.getElementById('error-box');

      errorBox.classList.remove('hide');
    })
  };

  onChangeEmail(e) {
    this.setState({ email: e.target.value })
}

  onChangePassword(e) {
      this.setState({ password: e.target.value })
  }

  render() {
    return (
      <div className="container">
        <div id="error-box" className="alert alert-danger hide" role="alert">
          <strong>Oh snap!</strong> Something went wrong!, Please try again later!
        </div>
        <form onSubmit={this.handleLogin}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" onChange={this.onChangeEmail}  aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.onChangePassword}  placeholder="Password" />
          </div>
          {this.renderRedirect()}
          <button type="submit" className="btn btn-primary" onClick={this.props.loginUpdateState}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;


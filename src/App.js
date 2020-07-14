import React, { Component } from 'react';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './stylesheets/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.loginUpdateState = this.loginUpdateState.bind(this);

    this.state = {
      isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false
  };
}


  componentWillMount () {
    this.setState({
      isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) 
    })
  }

  handleLogout = () => {
    localStorage.setItem( 'isLoggedIn', false );

    this.setState({
      isLoggedIn: false
    })
  };

  loginUpdateState = () => {
    localStorage.setItem( 'isLoggedIn', true );

    this.setState({
      isLoggedIn: true
    })
  }

  isLoggedInMethod = () => {
    let isLoggedIn = this.state.isLoggedIn;
    console.log(isLoggedIn)
  }

  render() {
    return (
      <div className="container">
         <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                {this.state.isLoggedIn ? <li><Link to={'/dashboard'} id="dashboard" className="nav-link">Dashboard</Link></li> : ''}
                {!this.state.isLoggedIn ? <li><Link to={'/login'} id="login" className="nav-link">Login</Link></li> : ''}
                {this.state.isLoggedIn ? <li><Link to={'/'} id="logout" className="nav-link" onClick={this.handleLogout}>Log Out</Link></li>  : ''}
              </ul>
            </nav>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/login' render={()=><Login loginUpdateState={this.loginUpdateState}/>}/>
                <Route path='/dashboard' render={()=><Dashboard isLoggedIn={this.state.isLoggedIn}/>}/>
            </Switch>
         </Router>
      </div>
    );
  }
}

export default App;

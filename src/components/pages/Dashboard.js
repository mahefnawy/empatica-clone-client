import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentWillMount () {
    let isLoggedIn =  this.props.isLoggedIn
      this.setState({
        isLoggedIn: isLoggedIn
      })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let dashboardTemplate;
    if(isLoggedIn){
      dashboardTemplate = 'Dashboard Shown here'
    } else {
      dashboardTemplate = 'Please Login'
    }

    return (
      <div className="container">
        {dashboardTemplate}
      </div>
    );
  }
}

export default Dashboard;


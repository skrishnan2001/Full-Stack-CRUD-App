import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

const cookies = new Cookies();

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: "",
      isAuthenticated: false,
    };

  }

  componentDidMount = () => {
    this.getSession();
  }

  getSession = () => {
    fetch("/userapi/session/", {
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.isAuthenticated) {
          this.setState({ isAuthenticated: true });
        } else {
          this.setState({ isAuthenticated: false });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  whoami = () => {
    fetch("/userapi/whoami/", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log("You are logged in as: " + data.username);
        console.log("ID : ",data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleUserNameChange = (event) => {
    this.setState({ username: event.target.value });
  }

  isResponseOk(response) {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  }

  login = (event) => {
    event.preventDefault();
    fetch("/userapi/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": cookies.get("csrftoken"),
      },
      credentials: "same-origin",
      body: JSON.stringify({ username: this.state.username, password: this.state.password }),
    })
      .then(this.isResponseOk)
      .then((data) => {
        console.log(data);
        this.setState({ isAuthenticated: true, username: "", password: "", error: "" });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: "Wrong username or password." });
      });
  }

  logout = () => {
    fetch("/userapi/logout", {
      credentials: "same-origin",
    })
      .then(this.isResponseOk)
      .then((data) => {
        console.log(data);
        this.setState({ isAuthenticated: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };




  render() {
    if (!this.state.isAuthenticated) {
      return (
        <div className="container">
          {/* <br/>
          <h1 className="text-center mb-4"><strong>CRUD App</strong></h1> */}
          <br />
          <br/>
          <br/>
          <div className="w-75 mx-auto shadow p-5">
            <br />
            <h2 className="text-center mb-4">CRUD App Login</h2>
            <form onSubmit={this.login}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" name="username" value={this.state.username} onChange={this.handleUserNameChange} />
              </div>
              <div className="form-group">
                <label htmlFor="username">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
                <div>
                  {this.state.error &&
                    <small className="text-danger">
                      {this.state.error}
                    </small>
                  }
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <br />
            <br />
          </div>
          <br />
          <br />

          <Router>
            <div className="App">
              <Switch>
                <Route exact path="/users/add" component={AddUser} />
                <div className="w-75 mx-auto">
                  <Link className="btn btn-outline-success w-100" to="/users/add">Sign Up</Link>
                </div>
              </Switch>
            </div>
          </Router>

        </div>
      );
    }
    return (
      <Router>
        <div className="App">
          <Navbar />
          <button className="btn btn-danger float-right mr-4 my-2" onClick={this.logout}>Log out</button>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/add" component={AddUser} />
            <Route exact path="/users/edit/:id" component={EditUser} />
            <Route exact path="/users/:id" component={User} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
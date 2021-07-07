import React, { Component } from "react";
import axios from "axios";
import ProductList from "../Product-list/ProductList";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      islogedin: 0,
      loginformshow: 1,
      token: "",
    };
    //this.HandleChangeEmail = this.HandleChangeEmail.bind(this);
    this.HandleChangePassword = this.HandleChangePassword.bind(this);
  }
  HandleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  };
  HandleChangePassword = (event) => {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
  };

  handleLogin = (event) => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    console.log(user);
    axios
      .post(
        `http://127.0.0.1:8000/api/login`,
        {
          email: this.state.email,
          password: this.state.password,
        },
        {
          headers: headers,
        }
      )
      .then((res) => {
        //console.log(res);
        console.log(res.data);
        console.log(res.data.token);
        const hasKey = "token" in res.data;
        if (hasKey) {
          this.setState({ islogedin: 1 });
          this.setState({ loginformshow: 0 });
          this.setState({ token: res.data.token });
        } else {
          alert("bad");
          this.setState({ islogedin: 0 });
          this.setState({ loginformshow: 1 });
        }
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  render() {
    //let {islogedin} = this.state.islogedin;
    let ret = <ProductList token={this.state.token} />;
    const logedornut = () => {
      if (this.state.islogedin === 1) {
        return ret;
      } else {
        return <h1>err</h1>;
      }
    };
    return (
      <div>
        {this.state.loginformshow === 1 ? (
          <div>
            <form onSubmit={this.handleLogin}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  onChange={this.HandleChangeEmail}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  onChange={this.HandleChangePassword}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
            <p>email is {this.state.email}</p>
            <p>pwd is {this.state.password}</p>

            <p>{this.state.islogedin}</p>
          </div>
        ) : (
          <div>{logedornut()}</div>
        )}
      </div>
    );
  }
}

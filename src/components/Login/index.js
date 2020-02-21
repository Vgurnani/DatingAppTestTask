import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import loginImage from "../../assets/images/loginImage.png";
import { pushNotification } from "utils/notifications";
import history from "utils/history";

const Login = props => {
  const { getList } = props;
  const [userState, setUserState] = useState("login");
  const [email, setEmail] = useState("admin@datingapp.com");
  const [password, setPassword] = useState("Password");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let login = () => {
    console.log(email, password);
    if (email === "admin@datingapp.com" && password === "Password") {
      history.push("/dashboard");
    } else {
      pushNotification("User not found", "error");
    }
  };
  let forgotPassword = () => {
    console.log(email, "forgot password email id");
    pushNotification("Email sent");
  };
  let validate = e => {
    switch (e.target.name) {
      case "email":
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (e.target.value == "") {
          setEmailError("Email is required.");
        } else if (!re.test(e.target.value)) {
          setEmailError("Invalid email");
        } else {
          setEmailError("");
        }
        setEmail(e.target.value);
        break;
      case "password":
        if (e.target.value.length < 6) {
          setPasswordError("Password must be 6 characer long");
        } else {
          setPasswordError("");
        }
        setPassword(e.target.value);
        break;
      default:
    }
  };

  let checkUserState = () => {
    let displayJsx = "";
    if (userState == "login") {
      displayJsx = (
        <>
          <img src={loginImage} />
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                defaultValue={email}
                placeholder="with a placeholder"
                onChange={e => validate(e)}
              />
            </FormGroup>
            <div>{emailError !== "" && emailError}</div>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                defaultValue={password}
                onChange={e => validate(e)}
                placeholder="password placeholder"
              />
            </FormGroup>
            <div>{passwordError !== "" && passwordError}</div>
            <Button onClick={() => login()}>Login</Button>
          </Form>
          <br />
          <span onClick={() => setUserState("forgotPassword")}>
            Forgot Password
          </span>
        </>
      );
    } else if (userState == "forgotPassword") {
      displayJsx = (
        <>
          <span onClick={() => setUserState("login")}>Go back</span>
          <img src={loginImage} />
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                defaultValue={email}
                placeholder="with a placeholder"
                onChange={e => validate(e)}
              />
            </FormGroup>
            <div>{emailError !== "" && emailError}</div>
            <div>{passwordError !== "" && passwordError}</div>
            <Button onClick={() => forgotPassword()}>Send E-mail</Button>
          </Form>
        </>
      );
    }
    return displayJsx;
  };
  return <> {checkUserState()} </>;
};

Login.propTypes = {
  getList: PropTypes.func
};

export default Login;

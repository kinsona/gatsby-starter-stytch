import "./login.css";

import React from "react";
import { navigate } from "gatsby"
import { Stytch } from "@stytch/stytch-react";

import Layout from "../components/layout"


const authenticateSession = async (sessionToken) => {
  try {
    console.log("checking token for existing session")
    const response = await fetch(`/api/authenticate_session?token=${sessionToken}`);
    if (response.ok) {
      response.json().then(data => {
        console.log("logged in from existing session")
        // TODO: You could add a call to your database to get additional user data here
        navigate("/", {
          state: {
            user: data.session.user_id,
            session: data.session,
            sessionToken: data.session_token
          }});
      });
    } else {
      console.log("session token invalid");
      window.localStorage.removeItem("stytchSessionToken");
    }
  } catch (err) {
    console.error("Error authenticating session token");
    window.localStorage.removeItem("stytchSessionToken");
  }
};


const Login = () => {

  // authenticate session if a Stytch session token is stored
  const sessionToken = window.localStorage.getItem("stytchSessionToken");
  if (sessionToken) {
    authenticateSession(sessionToken);
  }

  // Be sure to check out the docs if you want to give users
  // the option for Google, Apple, or MS OAuth:
  // https://stytch.com/docs/javascript-sdk#javascript-sdk/oauth
  const stytchProps = {
    loginOrSignupView: {
      products: ['emailMagicLinks'],
      emailMagicLinksOptions: {
        loginRedirectURL: process.env.LOGIN_MAGIC_LINK_URL,
        loginExpirationMinutes:30,
        signupRedirectURL:  process.env.CREATE_USER_MAGIC_LINK_URL,
        signupExpirationMinutes: 30,
      },
    },
    style: {
      fontFamily: '"Helvetica New", Helvetica, sans-serif',
      button: { backgroundColor: "#106ee9" },
      input: { textColor: "#090909" },
      headerText: {
        visible: true,
      },
    },
    publicToken: process.env.STYTCH_PUBLIC_TOKEN,
    callbacks: {
      onEvent: (data) => {
        // TODO: check whether the user exists in your DB
        // const userExists = false;
        // if (data.eventData.type === 'USER_EVENT_TYPE' && !userExists) {
        //   fetch("/users", {
        //     method: "POST",
        //     body: JSON.stringify({
        //       userId: data.eventData.userId,
        //       email: data.eventData.email,
        //     }),
        //   });
        // }
      },
      onSuccess: (data) => console.log(data),
      onError: (data) => console.log(data),
    },
  };

  return (
    <Layout>
      <main id="login">
        <title>Gatsby Starter with Stytch</title>
        <h1>
          Gatsby Starter with Stytch
        </h1>
        <div className="login-content">
          <div className="welcome-container">
            <h3>This site uses <a href="https://www.stytch.com">Stytch</a> for passwordless authentication</h3>
            <p>Sign up, login, and invite by email without the need for passwords!</p>
          </div>
          <div className="sign-in-container">
            { sessionToken ?
              <div className="loading">...loading...</div> :
              <Stytch
                publicToken={stytchProps.publicToken}
                loginOrSignupView={stytchProps.loginOrSignupView}
                style={stytchProps.style}
                callbacks={stytchProps.callbacks}
              />
            }
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Login;

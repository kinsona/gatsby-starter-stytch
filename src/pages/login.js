import "./login.css";

import React from "react";
import { Stytch } from "@stytch/stytch-react";

import Layout from "../components/layout"

const Login = () => {
  const stytchProps = {
    config: {
      loginConfig: {
        magicLinkUrl: process.env.LOGIN_MAGIC_LINK_URL,
        expirationMinutes: 30,
      },
      createUserConfig: {
        magicLinkUrl: process.env.CREATE_USER_MAGIC_LINK_URL,
        expirationMinutes: 30,
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
            <Stytch
              publicToken={stytchProps.publicToken}
              config={stytchProps.config}
              style={stytchProps.style}
              callbacks={stytchProps.callbacks}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Login;

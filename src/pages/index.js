import React from "react";
import { Link, navigate } from "gatsby";

import Layout from "../components/layout"

// styles
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  borderRadius: 4,
}

// Check if window is defined (so if in the browser or in node.js).
// https://www.gatsbyjs.com/docs/debugging-html-builds/#how-to-check-if-window-is-defined
const isBrowser = typeof window !== "undefined"

// markup
const IndexPage = ({ location }) => {
  // `gatsby build` will fail trying to build this component for
  // server-side rendering if window is undefined, so we check to
  // make sure we're in the browser before rendering.
  if (!isBrowser) {
    return null;
  }

  if (!location.state?.user) {
    navigate("/login");
    return null;
  }

  const { state: { user, session, sessionToken } } = location;

  // Store the session token so we can check for an existing session
  // before asking the user to log in.
  if (sessionToken) {
    window.localStorage.setItem("stytchSessionToken", sessionToken);
  }

  const clearSession = () => {
    window.localStorage.removeItem("stytchSessionToken");
  }

  return (
    <Layout>
      <main>
        <title>Gatsby Stytch</title>
        <h1>Congrats!</h1>
        <h4>You are logged in as: <span>{user}</span></h4>
        <h5>Session Details</h5>
        <ul>
          <li>Started at: {session.started_at}</li>
          <li>Expires at: {session.expires_at}</li>
        </ul>
      {/* onclick clear session from localStorage */}
        <Link to="/" state={{ user: null }} onClick={clearSession}>Log Out</Link> 
        <p>
          Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
          update in real-time.{" "}
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
        {/* TODO: invite other users by email */}
        <br />
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </main>
    </Layout>
  )
}

export default IndexPage

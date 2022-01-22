import React from "react";
import { navigate } from "gatsby"
import queryString from "query-string";

const Authenticate = ({ location }) => {
  React.useEffect((location) => {
    const { search } = location;
    const token = queryString.parse(search).token;
    if (typeof token !== "string") {
      throw new Error("No valid token provided.");
    }

    const authenticate = async () => {
      try {
        const response = await fetch(`/api/authenticate?token=${token}`);
        if (response.ok) {
          response.json().then(data => {
            // TODO: You could add a call to your database to get additional user data here
            navigate("/", {
              state: {
                user: data.user_id,
                session: data.session,
                sessionToken: data.session_token
              }});
          });
        } else {
          navigate("/login");
        }
      } catch (err) {
        console.error("Error authenticating magic link");
        navigate("/login");
      }
    };
    authenticate();
  }, []);

  return <React.Fragment />;
};

export default Authenticate;

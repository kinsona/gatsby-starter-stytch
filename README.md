<p align="center" style="display:flex; justify-content:space-evenly">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" height="80" />
  </a>
  <a href="https://www.stytch.com">
    <img alt="Stytch" src="src/images/Stytch wordmark - charcoal.svg" height="80" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter with Stytch
</h1>

## Overview

This starter creates a simple site with passwordless authentication, provided by [Stytch](https://stytch.com/).  Users can sign up and log in with just an email address - no password needed! 

*Note*: this starter uses Gatsby Cloud for an easy backend function to call the Stytch API. This function could be moved to a custom backend if you have or need one.  See `src/api/authenticate.js`.

Check out the [live demo deployed with Gatsby Cloud](https://gatsbystarterstytchmain.gatsbyjs.io/)!

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using this starter
    gatsby new my-gatsby-site [https://github.com/kinsona/gatsby-starter-stytch]
    ```

2.  **Sign up for Stytch and configure your new project**

    Create a `.env.development` file, using `.env_sample` as a template.

    Copy the variables for your project out of the [API Keys section of the Stytch dashboard](https://stytch.com/dashboard/api-keys):

      - `STYTCH_PROJECT_ID`
      - `STYTCH_PUBLIC_TOKEN`
      - `STYTCH_SECRET`

3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

4.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit files in `src/pages` to see your site update in real-time! Logged-in users will see `src/pages/index.js`, while guests will see `src/pages/login.js`.

5.  **(Optional) Build for Gatsby Cloud**
    `gatsby build`


6.  **Learn more**

    - [Stytch docs](https://stytch.com/docs/home)

    - [Gatsby docs](https://www.gatsbyjs.com/docs)

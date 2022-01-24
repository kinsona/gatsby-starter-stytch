export default function handler(req, res) {
  const stytch = require('stytch');
  const client = new stytch.Client({
    project_id: process.env.STYTCH_PROJECT_ID,
    secret: process.env.STYTCH_SECRET,
    env: stytch.envs.test
  });
  var token = req.query.token;
  client.sessions.authenticate({ session_token: token, session_duration_minutes: 60 })
  .then(response => {
    res.status(200).json(response);
  })
  .catch(error => {
    console.log(error);
    res.send('There was an error authenticating the session.');
  });
}
